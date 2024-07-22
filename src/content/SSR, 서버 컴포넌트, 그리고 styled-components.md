---
title: SSR, 서버 컴포넌트, 그리고 styled-components
category: ['블로그', 'CSS', 'styled-components']
date: 2024-06-10T10:00:46.000Z
---

### styled-components

앞서 기술 스택을 선정하며 스타일링 라이브러리로 styled-components를 선택했다. 그러나 SSR 환경에서 CSS-in-JS 라이브러리를 사용하기 위해서는 추가적인 설정이 필요하다. 사용자에게 스타일이 입혀지지 않은 HTML이 잠깐 노출되는 `FOUC` 문제가 발생하기 때문이다.

### styled-components의 동작 과정

먼저 동작 과정부터 이해해야 한다. styled-components는 각 컴포넌트가 정의될 때 고유한 ID를 생성하고, Tagged Template Literals를 평가해 CSS 문자열을 만든다. 이후 고유 ID와 CSS를 바탕으로 해시를 생성해 클래스명으로 활용한다. 실제로 DOM을 살펴보면 정말 고유해 보이는 클래스명들을 확인할 수 있다.

![SSR, 서버 컴포넌트, 그리고 styled-components 1](/image/SSR,%20서버%20컴포넌트,%20그리고%20styled-components%201.png)

클래스명은 `useState` 훅을 통해 관리되므로, 변화를 감지하면서 필요한 경우 스타일을 다시 적용할 수 있다.

이전에 생성된 CSS 문자열은 CSS 프로세서를 통해 스타일시트로 변환되며 곧 `<style>` 요소가 되어 DOM에 주입된다. 이로써 사용자는 스타일링이 완료된 화면을 보게 된다.

여기서 하나 알아야 할 점은 바로 이러한 과정이 모두 클라이언트 런타임에 실행된다는 점이다. SSR을 통해 초기 HTML을 빠르게 렌더링하지만, 자바스크립트의 실행이 끝나기 전에는 스타일이 적용되지 않는다. 이는 SSR에서 TTV와 TTI 사이의 공백이 발생하는 이유와 비슷하다.

### SSR과 공존하는 방법

이러한 CSS-in-JS 라이브러리의 태생적 한계를 극복하기 위한 방법이 있다. 바로 서버에서 스타일을 미리 모아 SSR에서 한꺼번에 제공하는 것이다. 먼저 styled-components를 설치하자.

```bash
npm install styled-components
npm install --save-dev @types/styled-components
```

추가적인 SWC 설정을 위해 다음 플러그인을 설치하고 `.swcrc` 파일을 작성하자.

```bash
npm i -D @swc/plugin-styled-components
```

```json
// .swcrc
{
    "jsc": {
        "experimental": {
            "plugins": [
                [
                    "@swc/plugin-styled-components",
                    {
                        "ssr": true
                    }
                ]
            ]
        }
    }
}
```

또한 `next.config.mjs` 파일의 `compiler.styledComponents` 설정이 필요하다.

```jsx
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
```

이렇게 설정하면 SWC가 빌드 시 styled-components의 스타일을 미리 모아준다. 이제 각 컴포넌트에 스타일을 적용하기 위해 공식 문서에서 제공해주는 컴포넌트를 추가하자.

```tsx
'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== 'undefined') return <>{children}</>;

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {children}
        </StyleSheetManager>
    );
}
```

간단히 살펴보면 `ServerStyleSheet` 에 의해 수집된 스타일시트가 `getStyleElement` 메서드를 통해 `<style>` 요소로 변환되며, `useServerInsertedHTML` 훅에 따라 초기 HTML에 삽입된다. 특히 조건문을 통해 서버와 클라이언트의 동작이 다른 것을 볼 수 있는데 해당 조건문을 통해 서버에서만 스타일을 주입하게 된다.

이제 마지막으로 `layout.tsx` 파일에서 해당 컴포넌트로 `children` 을 감싸주면 완성이다.

```tsx
import StyledComponentsRegistry from 'lib/registry';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
```

이렇게 `FOUC` 문제를 해결함과 동시에, 클라이언트에서 스타일을 주입하는 과정을 없애 TTI를 개선하였다.

### 서버 컴포넌트와 CSS-in-JS

Next.js는 13버전부터 서버 컴포넌트 개념이 추가되었다. 서버에서 렌더링된 HTML을 생성하고 이를 클라이언트로 전달하며, 관련 코드가 자바스크립트 번들에 포함되지 않는다. 또한, 데이터를 서버에서 직접 가져오기 때문에 클라이언트에 비해 빠른 속도를 기대할 수 있다. 현재 특정 코드(`use client`)를 추가하지 않으면 기본적으로 모든 컴포넌트가 서버 컴포넌트로 동작할 정도로 서버 컴포넌트는 Next.js의 지향성이라 볼 수 있다.

그러나 서버 컴포넌트는 `useState`, `useEffect`처럼 클라이언트에서 동작하는 모든 코드를 사용할 수 없다. 이벤트 핸들링 또한 불가능하기 때문에 보통 화면에 정보를 표시하는 정적인 용도로 사용된다. 이 부분에서 문제가 발생한다. 런타임에 스타일을 주입하는 CSS-in-JS와 서버 컴포넌트의 공존은 힘들다.

특히 styled-components는 내부에서 React Context API를 사용하기 때문에, 서버 컴포넌트에서 사용하면 오류가 발생한다. Context API 또한 클라이언트 측에서 상태 주입을 도와주는 API이기 때문이다.

![SSR, 서버 컴포넌트, 그리고 styled-components 2](/image/SSR,%20서버%20컴포넌트,%20그리고%20styled-components%202.png)

따라서 styled-components를 통해 스타일링하기 위해서는 모든 컴포넌트에 `use client`를 붙여야 한다..

### 마무리

괜히 Next.js가 Tailwind CSS를 추천하는 것이 아니었다. 기술 스택을 선정할 때는 몰랐던 내용이었는데 왜 지금에서야 알게 되었을까.. 빠르게 변화하는 개발 생태계에 적응해야 한다는 프론트엔드 분야의 노고를 직접 겪게 되었다. styled-components 대신 Tailwind CSS를 설치해 보자.
