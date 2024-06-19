---
title: Next.js에서 마크다운 렌더링하기 (1)
category: 블로그 개발기
date: 2024-06-13
---

### Contentlayer

블로그 제작을 시작하기 전부터 눈여겨보던 라이브러리다. Next.js 프로젝트에서 마크다운 파일을 비롯한 다양한 데이터를 사용할 수 있게 해주는 정적 콘텐츠 관리 도구다. `config` 파일만 조금 수정하면 통합이 완료되고, 하나의 라이브러리만으로 마크다운 렌더링뿐만 아니라 메타 데이터 처리까지 가능하다는 점이 마음에 들었다.

그러나 최근 Contentlayer에 대한 후원이 줄어듦에 따라 미래가 불분명해졌다. 현재 Next.js 14버전에서 설치를 하려고 하면 다음과 같이 오류가 발생한다.

![Next.js에서 마크다운 렌더링하기 (1) 1](</image/Next.js에서%20마크다운%20렌더링하기%20(1)%201.png>)

관련 이슈를 살펴보니 `--force` 혹은 `--legacy-peer-deps` 옵션을 통해 의존성 문제를 우회/무시하여 설치해도 당장 오류는 발생하지 않는다고 한다. 그러나 장기적으로 그리 좋은 선택은 아닌 것 같다. 벌써부터 불확실성을 안고 갈 수는 없다. 그렇다면 Next.js를 13버전으로 다운그레이드하는 방법은 어떨까? 이 또한 추후 출시될 최신 Next.js의 여러 기능들을 포기하는 것과 같다. 대안을 찾아보자.

### react-markdown

당장 관련 키워드로 구글링했을 때, 가장 많이 보이는 것이 바로 react-markdown이다. 이 라이브러리는 마크다운 문법을 MDAST, HAST를 거쳐 JSX 문법으로 변환해 준다. 또한, 리액트와 통합이 간편하며 SSR 및 SSG 환경을 지원한다. 한 번 사용해 보자.

```bash
npm install react-markdown
```

먼저 마크다운 파일을 불러오기 위해 다음과 같이 유틸 함수를 작성했다. 해당 함수들은 `src/utils` 디렉터리에, 마크다운 파일들은 `content` 디렉터리에 넣어주었다.

```tsx
import fs from 'fs';
import path from 'path';

const markdownDir = path.join(process.cwd(), 'content');

export function getMDFiles() {
    return fs.readdirSync(markdownDir);
}

export function getMDFileBySlug(filename: string) {
    const realPath = path.join(markdownDir, filename);
    const fileContents = fs.readFileSync(realPath, 'utf-8');
    return fileContents;
}

export function getAllMDFiles() {
    const files = getMDFiles();
    return files.map(file => {
        return getMDFileBySlug(file);
    });
}
```

이후 유틸 함수와 react-markdown을 활용한 간단한 컴포넌트를 만들었다.

```jsx
import { getAllMDFiles } from '#utils/markdown';
import ReactMarkDown from 'react-markdown';

const PostsPage: React.FC = () => {
    const files = getAllMDFiles();
    return files.map((file, index) => {
        return (
            <div>
                <ReactMarkDown key={index}>{file}</ReactMarkDown>
            </div>
        );
    });
};

export default PostsPage;
```

`#`, `##`, `###` 등 마크다운 문법으로 작성된 파일이 각각 `h1`, `h2`, `h3` 태그로 변환된 것을 확인할 수 있다.

![Next.js에서 마크다운 렌더링하기 (1) 2](</image/Next.js에서%20마크다운%20렌더링하기%20(1)%202.png>)

그러나 아직 태그 스타일링이 되지 않았다. 아마도 Tailwind CSS와 함께 사용하며 무언가 문제가 발생한 것 같다. 이전에 `globals.css`에 다음과 같이 코드를 추가했는데, 이 부분이 특히 의심스럽다.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Tailwind CSS Preflight

[공식 문서](https://tailwindcss.com/docs/preflight)에 따르면 Tailwind CSS는 브라우저 간 불일치 문제를 해결하기 위해 `Preflight` 설정을 사용한다고 한다. 기본 CSS 스타일을 초기화함으로써 브라우저 내장 스타일에 의존하지 않고, 개발자로 하여금 일관된 UI를 작성하도록 한다. 이에 따라 `h1`, `h2`, `h3` 태그 스타일링이 초기화되어 나타난 문제였다.

그럼 `Preflight`를 아예 꺼버려야 할까? 아니면 마크다운 기반으로 생성된 태그들을 일일이 직접 스타일링해야 할까? 다행히도 개발사에서 이미 적절한 조치를 취해놨다.

### Tailwind CSS Typography

개발자가 제어할 수 없거나, 마크다운 기반으로 생성된 HTML 등에 대해 `prose` 클래스 세트를 제공하는 Tailwind CSS Typography다. 이제 우리는 전문 디자이너의 도움을 받을 수 있다.

```bash
npm install -D @tailwindcss/typography
```

```jsx
// tailwind.config.js

plugins: [
    require('@tailwindcss/typography'),
],
```

설치가 끝났다면 이제 `className`으로 `prose` 속성을 달아주자.

```tsx
<ReactMarkDown className="prose" key={index}>
    {file}
</ReactMarkDown>
```

![Next.js에서 마크다운 렌더링하기 (1) 3](</image/Next.js에서%20마크다운%20렌더링하기%20(1)%203.png>)

참고로 다음과 같이 추가적인 맞춤 설정도 가능하다.

```tsx
<ReactMarkDown className="prose" key={index}>
    {file}
</ReactMarkDown>
```

![Next.js에서 마크다운 렌더링하기 (1) 4](</image/Next.js에서%20마크다운%20렌더링하기%20(1)%204.png>)
