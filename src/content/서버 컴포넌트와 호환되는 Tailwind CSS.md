---
title: 서버 컴포넌트와 호환되는 Tailwind CSS
category: 블로그 개발기
date: 2024-06-10T10:00:46.000Z
---

### 기술 스택 선정 실패

기술 스택을 선정할 때 Next.js와 styled-components를 선택했으나, styled-components가 서버 컴포넌트와의 호환성 문제로 인해 사용에 제약이 있다는 것을 나중에야 알게 되었다. 이는 사전 조사가 부족했기에 발생한 실수다. 앞으로 라이브러리나 프레임워크 간 호환성까지도 고려해야 된다는 점을 배워 간다.

### Tailwind CSS의 동작 원리

우선 대안으로 Tailwind CSS를 사용하려 한다. 서버 컴포넌트의 스타일링을 위해서는 런타임 이전에 스타일이 결정되어야 한다. Tailwind CSS는 정규표현식을 통해 `class` 속성에서 사용된 모든 단어들을 추출한 뒤, 유틸리티 클래스에 해당하는 것들을 CSS로 변환한다. 자바스크립트 런타임에 의존하지 않고 빌드 단계에서 최적의 CSS 파일을 생성하는 것이다. 이러한 동작 원리 때문에 서버 컴포넌트와 호환이 가능하다.

### Tailwind CSS 설치

[공식 문서](https://tailwindcss.com/docs/guides/nextjs)에 따라 진행했다. 이미 Next.js 프로젝트 구축이 되어 있으니 Tailwind CSS만 설치해 준다.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

init 명령어까지 입력하면 `tailwind.config.js` 및 `postcss.config.js` 파일이 생성된 것을 볼 수 있다.

이후 `tailwind.config.js` 파일에서 경로를 구성한다. `src` 디렉터리를 사용하므로 다음과 같이 구성했다.

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

마지막으로 `globals.css` 파일에 Tailwind의 지시어들을 추가한다.

```css
//globals.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

각각 기본 스타일, 컴포넌트 스타일, 유틸리티 클래스를 제공해 준다.

### 마무리

styled-components에 비해 설치가 굉장히 쉬운 것을 볼 수 있다.
