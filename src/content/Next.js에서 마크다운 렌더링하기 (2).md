---
title: Next.js에서 마크다운 렌더링하기 (2)
category: 블로그 개발기
date: 2024-06-17
---

### 가독성을 높여보자

이전 글에서 기본적인 마크다운 렌더링과 스타일링을 진행했다. 이제 조금 더 디테일을 살릴 차례다. 다음 사진은 노션에 작성했던 글을 불러와 렌더링한 모습이다.

![Next.js에서 마크다운 렌더링하기 (2) 1](</image/Next.js에서%20마크다운%20렌더링하기%20(2)%201.png>)

가독성이 매우 아쉽다. 더욱 자연스러운 UX를 위해 인라인 코드 스타일링과 코드 하이라이트가 필요해 보인다.

### 인라인 코드 스타일링

먼저 인라인 코드 스타일링은 간단한 CSS로 해결할 수 있다. `<code>` 태그에 커스텀 CSS를 입히자.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

code {
    @apply px-2 py-1 rounded bg-gray-100 text-red-500;
}

code::before,
code::after {
    content: none !important;
}
```

![Next.js에서 마크다운 렌더링하기 (2) 2](</image/Next.js에서%20마크다운%20렌더링하기%20(2)%202.png>)

간단한 백그라운드 스타일링과 함께 `before` 및 `after` 요소, 즉 코드 전후의 백틱을 없애주었다.

### 코드 하이라이트

마크다운에서 인라인 코드와 코드 블록은 어떻게 HTML로 변환될까?

![Next.js에서 마크다운 렌더링하기 (2) 3](</image/Next.js에서%20마크다운%20렌더링하기%20(2)%203.png>)

개발자 도구를 살펴보면 인라인 코드는 단순히 `<code>` 태그 내에 위치하고, 코드 블록은 `<pre><code>` 태그에 위치하며 클래스를 통해 언어 정보를 담고 있다. 앞서 인라인 코드 스타일링을 위해 `<code>` 태그의 CSS를 손보았기 때문에 코드 블록의 스타일 또한 마찬가지로 변경되었다.

![Next.js에서 마크다운 렌더링하기 (2) 4](</image/Next.js에서%20마크다운%20렌더링하기%20(2)%204.png>)

참고로 UI 디자인을 위해 `prose` 속성 대신 `prose-base` 속성을 사용했기 때문에 발생한 문제이며, `prose` 속성을 그대로 사용하면 다음 사진처럼 블록 자체는 남아있다.

![Next.js에서 마크다운 렌더링하기 (2) 5](</image/Next.js에서%20마크다운%20렌더링하기%20(2)%205.png>)

물론 가독성이 떨어지는 것은 매한가지다.

이 코드 블록 스타일링 문제는 코드 하이라이트 기능과 동시에 해결할 수 있었다. 하이라이트 기능을 추가하기 위해 rehype-highlight 플러그인과 highlight.js 라이브러리를 사용했다.

rehype는 HTML을 파싱하고 변경할 수 있는 기능을 제공한다. react-markdown이 마크다운을 HTML로 변환하는 과정에서 MDAST와 HAST를 거친다고 했는데, rehype를 통해 HAST를 다양하게 다룰 수 있다. 이때 코드 하이라이트에 특화된 것이 바로 rehype-highlight 플러그인이다.

highlight.js는 `<pre><code>` 태그 내 코드 하이라이트 기능을 제공하며, 클래스에 언어 정보가 담겨 있지 않아도 자동 감지가 가능하다고 한다. 코드 블록 내 여러 키워드를 `<span>` 태그로 분류해 색상을 지정한다. 또한 일반적으로 CDN을 통해 브라우저에서 실행되기 때문에, 웹 페이지 내 동적 하이라이트가 가능하다.

사용법은 너무나도 간단하다.

```css
npm install rehype-highlight highlight.js
```

rehype-highlight는 react-markdown에서 제공하는 `ReactMarkDown` 컴포넌트에 플러그인으로 추가하면 되고, highlight.js는 공식 문서에서 적당한 디자인을 골라 `import` 해주면 끝이다. 나는 평소 Visual Studio Code에서 자주 사용하는 테마를 골랐다.

```tsx
import 'highlight.js/styles/atom-one-dark.css';

<ReactMarkDown rehypePlugins={[rehypeHighlight]} />;
```

이로써 마크다운 렌더링을 끝냈다.

![Next.js에서 마크다운 렌더링하기 (2) 6](</image/Next.js에서%20마크다운%20렌더링하기%20(2)%206.png>)
