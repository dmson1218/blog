---
title: 'SSG: Page Router vs App Router'
tags: ['블로그', '배포', 'Next.js', 'SSG']
date: 2024-07-04T15:58:17.000Z
---

### 배포를 시작하자

아직 추가하고 싶은 기능이 산더미지만 일단 블로그의 기본적인 뼈대는 완성되었다.

![SSG: Page Router vs App Router 1.png](/image/SSG:%20Page%20Router%20vs%20App%20Router%201.png)

그렇다보니 당장 배포하고 싶은 욕구가 생겼다. 일단 배포를 해야 지금까지의 시간이 결과물로 나타나는 거니까.

다만 배포 이전 해결해야 할 마지막 단계가 남았다. 특정 페이지가 아직 SSR 방식으로 동작하기 때문이다. 이번 포스트에서 SSR에서 SSG로 바꾸는 이유와 Next.js의 SSG를 활용하는 과정을 기록하고자 한다.

### SSR & SSG

먼저 두 방식에 대해 학습해 보자. SSR과 SSG 모두 웹 어플리케이션에서 사용되는 렌더링 방식이지만, 서로 다른 장단점을 가지고 있어 경우에 따라 알맞게 사용해야 한다.

SSR, Server-Side Rendering은 사용자가 페이지를 요청할 때 서버에서 HTML을 동적으로 생성해 클라이언트에게 전달하는 방식이다. 여기서 ‘사용자가 페이지를 요청할 때’, ‘동적’이라는 단어가 포인트다. 페이지 요청이 오면 그제서야 필요한 데이터를 불러와 HTML을 생성한다. 그렇기 때문에 사용자에 따라 각기 다른 데이터를 제공해야 할 때나 데이터의 변동이 잦은 경우 주로 사용된다. 다만 서비스 규모에 따라 서버 부하가 클 수 있고, HTML 생성 시간이 필요하기 때문에 SSG에 비해 속도가 느릴 수도 있다.

SSG, Static Site Generation은 빌드 타임에 사용자가 요청할 수 있는 모든 페이지를 정적으로 미리 생성해놓는 방식이다. 페이지 요청이 오면 서버는 별도의 생성 과정 없이 미리 생성해둔 파일을 제공한다. 이에 따라 빠른 속도와 서버 부하 감소의 이점이 있다. 빌드 이후 데이터 변경을 반영하지 못하고, 서비스 규모에 따라 빌드 시간이 길어질 수 있다는 단점이 있지만 일반적인 기술 블로그 특성 상 체감되지 않기 때문에 SSG로 배포하는 경우가 잦다. 무엇보다 정적 호스팅 서비스에서 저렴하게 배포할 수 있다는 점이 압도적이다.

### CSR

두 방식과 함께 자주 언급되는 CSR에 대해서도 간단히 알아보자. CSR은 Client-Side Rendering의 축약어로 서버가 제공해준 자바스크립트 파일을 토대로 클라이언트가 빈 HTML에 내용을 채워 넣는 방식이다.

브라우저에서 직접 필요한 데이터를 가져와 렌더링하기 때문에 초기 속도가 느리다. 하지만 사용자가 페이지와 상호작용할 때, 전체를 새로 렌더링하지 않고 필요한 부분만 업데이트할 수 있기 때문에 UX 측면에서 이점이 있다. 이외에도 수많은 장점이 있지만 이번 포스트에서는 다루지 않겠다.

개인적으로 SSR vs CSR 주제에 많은 시간을 들였다. 레이아웃, 페인트 등 브라우저의 렌더링 방식을 이해하는 것부터 시작해 SSR과 CSR을 혼합한 방식, 경우에 따라 적합한 방식을 선택하는 방법까지 전반적으로 재밌는 주제라고 생각한다. 후에 포스트로 기록하겠다.

### 현재 블로그 상황

`npm run build` 명령어를 통해 빌드를 실행하면 다음과 같은 결과를 확인할 수 있다.

![SSG: Page Router vs App Router 2.png](/image/SSG:%20Page%20Router%20vs%20App%20Router%202.png)

Next.js는 정적 페이지와 동적 페이지를 미리 구분하고 이를 빌드 결과에 반영한다. 정말 똑똑하다.

현재 `/posts/[slug]` 페이지는 빌드 결과에서 확인할 수 있듯이 동적 페이지다. 즉 SSR 방식으로 동작하기 때문에 이 부분을 수정해 보자. SSG 방식으로 만들기 위해서는 Next.js에게 가능한 URL을 미리 알려주면 된다.

### Page Router의 SSG

최신 Next.js에 App Router가 도입되기 전, 기본 라우팅 방식은 Page Router였다. 파일 시스템 기반의 Page Router는 각 페이지를 파일로 정의하여 `pages` 디렉터리에 위치시킨다. 각 라우팅 방식의 비교는 다른 포스트에서 자세히 알아보기로 하고 지금은 Page Router 방식에서 정적 페이지를 생성하는 법을 살펴보자.

`getStaticPaths` 함수를 통해 가능한 경로를 모두 반환하여 빌드 시 사전 렌더링을 수행할 수 있다.

```tsx
export async function getStaticPaths() {
    const paths = [
        { params: { slug: 'post-1' } },
        { params: { slug: 'post-2' } },
        { params: { slug: 'post-3' } },
    ];

    return {
        paths,
        fallback: false,
    };
}
```

위와 같은 코드를 작성하면 Next.js는 `paths` 객체 내 3가지 경로에 대해 사전 렌더링을 수행한다. `fallback` 옵션은 사전 렌더링되지 않은 페이지를 요청받았을 때의 처리 옵션으로 페이지를 새로 생성할 수도, 아니면 404 페이지를 표시할 수도 있다.

다음은 `getStaticProps` 함수다. 이 함수는 각 경로에 대한 데이터를 가져와 페이지를 사전 렌더링한다.

```tsx
export async function getStaticProps({ params }) {
    const { slug } = params;
    const postData = await fetchPostData(slug);

    return {
        props: {
            post: postData,
        },
    };
}
```

사전 렌더링을 수행하며 데이터베이스에서 데이터를 가져와야 하는 경우 `getStaticProps` 함수를 사용한다.

### App Router의 SSG

Next.js에 App Router 방식이 추가되면서 이제는 주된 렌더링 방식으로 자리잡게 되었다. Page Router에 비해 생산성과 데이터 최적화 측면에서 이점이 있기 때문이다. 그에 따라 여러 함수 또한 대체되었는데, `getStaticPaths` 함수는 `generateStaticParams` 함수로, `getStaticProps` 함수는 `fetch` 함수와 서버 컴포넌트 기반의 간단한 API로 대체되었다.

우선 `/page/[slug]` 페이지의 SSG를 위해 다음과 같이 코드를 작성했다.

```tsx
export const generateStaticParams = () => {
    const files = getMDFiles();
    const paths = files.map(file => ({
        params: {
            slug: file.title.replace(/\.md$/, '').replaceAll(' ', '%20'),
        },
    }));

    return paths;
};
```

이제 Next.js는 모든 포스트 정보를 알게 되어 개별 포스트 페이지를 사전에 렌더링할 수 있게 됐다.

앞서 `getStaticProps` 함수는 `fetch` 함수와 서버 컴포넌트 기반의 API로 대체되었다고 했다. 굳이 해당 함수를 사용하지 않아도 컴포넌트 내부에서 데이터를 가져오는 행위가 가능해졌기 때문이다.

```tsx
const PostBySlugPage = ({ params }: PostBySlugPageParams) => {
    const filename = decodeURIComponent(params.slug);
    const file = filename + '.md';
    const { data, content } = getMDFileBySlug(file);

    return (
        // ...
    );
};

export default PostBySlugPage;
```

위 컴포넌트는 URL을 통해 파일명을 도출하고, `fs module`을 활용해 마크다운 파일을 불러와 렌더링한다.

코드 수정 이후 빌드 결과는 다음과 같다.

![SSG: Page Router vs App Router 3.png](/image/SSG:%20Page%20Router%20vs%20App%20Router%203.png)

`/page/[slug]` 페이지가 정적으로 생성된 것을 확인할 수 있다.

### 마무리

App Router 방식에 대해 학습하면서 아직 정보가 많이 부족하다는 생각이 들었다. 한글로 된 좋은 자료도 찾기 힘들뿐더러 ChatGPT 또한 학습이 덜 되어 이상한 답변만 했다. 역시 공식 문서와 함께 직접 코드를 분석해 보는 습관이 중요하다.
