---
title: Next.js 14 SEO 개선하기
tags: ['블로그', 'SEO', 'next-sitemap']
date: 2024-07-17T12:50:31.000Z
---

### SEO란 무엇인가

웹 개발을 하다보면 계속해서 듣게 되는 단어가 있다. 바로 SEO다. 이번 포스트에서 SEO가 무엇인지, 코드 상에서 어떤 모습으로 나타나는지, 그리고 최종적으로 어떠한 결과가 나오는지 알아보자.

우리는 궁금증이 생겼을 때, 구글이나 네이버와 같은 검색 엔진에 해당 키워드를 검색한다. 이후 검색 결과들을 위에서부터 살펴보게 된다. 이때 상단에 원하는 결과가 곧잘 나오는 엔진이 있다면 우리는 해당 검색 엔진을 애용할 것이다. 그렇기 때문에 검색 엔진들은 경쟁력을 높이기 위해 다양한 인덱싱 및 알고리즘 최적화 과정을 거친다.

이제 내가 작성한 페이지의 트래픽을 높이고 싶은 경우를 생각해보자. 가장 쉬운 방법은 유명 검색 엔진을 이용하는 것이다. 구글에서 관련 키워드를 검색했을 때, 내 페이지 링크가 항상 상단에 나온다면? 자연스럽게 수많은 트래픽을 얻을 수 있다. 이처럼 비용처리가 없으면서도 효과적인 홍보 방법은 없을 것이다.

이러한 상황에서 사용하는 용어가 바로 SEO다. Search Engine Optimization의 줄임말로, 검색 엔진 최적화를 의미한다. SEO를 개선한다는 말은 검색 엔진에게 내 페이지 정보를 자주 노출시켜 검색 결과 상위에 등록되게 하는 것을 뜻한다.

### 검색 엔진은 어떻게 동작하는가

그렇다면 검색 엔진은 웹 페이지 정보를 어떻게 수집하고 인덱싱할까? 다양한 방법이 존재하고 엔진마다 차이가 있겠지만 가장 주된 방법은 HTML 분석이다. 검색 엔진의 크롤러가 페이지의 HTML 소스를 분석하여 내용과 구조를 파악한다. HTML의 기본 구조는 다음과 같다.

```html
<!doctype html>
<html lang="ko">
    <head>
        <meta charset="utf-8" />
        <title>제목이 위치합니다.</title>
    </head>
    <body>
        콘텐츠가 위치합니다.
    </body>
</html>
```

크롤러는 먼저 메타 태그를 분석한다. 위 HTML 구조에는 나와있지 않지만 `meta` 태그로 `Title` 태그와 `Description` 태그를 작성할 수 있다. `Title` 태그는 페이지 제목을 나타낸다. 검색 엔진 결과 페이지(SERP)에서 각 페이지로 이동할 수 있는 링크가 바로 `Title` 태그다. SEO 개선을 위해 가장 중요한 태그로 페이지를 잘 나타내는 제목을 작성하자. `Description` 태그는 페이지 요약을 나타낸다. 제목 밑 스니펫으로 표시된다. 인상 깊고 유익한 문구를 작성하면 클릭률(CTR)을 높일 수 있다.

이외에도 헤딩 태그(`h1`, `h2`, `h3` 등), 본문 내용, 이미지 등을 상세히 분석하므로 평소에 명확한 콘텐츠를 작성하기 위해 노력해야 한다. 이를 하여금 페이지의 노출 빈도를 높일 수 있다.

### CSR은 SEO가 안 되나요?

이전 SSG를 다룬 포스트에서 SSR과 CSR을 설명한 적이 있다. SEO를 주제로 다시 한 번 알아보자. SSR은 서버에서 HTML 페이지를 렌더링하여 클라이언트에서 제공하는 방식이고, CSR은 클라이언트가 서버에서 제공받은 자바스크립트 파일을 기반으로 비어있는 HTML 내부에 콘텐츠를 렌더링하는 방식이다. 검색 엔진은 HTML을 분석할 수 있지만, 자바스크립트 기반 렌더링을 수행하기에는 한계가 있다. 따라서 CSR만으로 이루어진 페이지는 검색 엔진에게 비어있는 HTML 파일만 제공할 가능성이 있다. SSR 혹은 SSG로 전환하거나 SEO 관련 요소를 사전 렌더링하는 등의 방식을 고려하자.

### 1. 메타 태그 작성하기

본격적으로 블로그의 SEO를 개선할 차례다. 먼저 메타 태그를 자세하게 작성하자. Next.js 14버전은 최상위 `layout.tsx` 파일에 다음과 같이 정적 메타 데이터를 작성할 수 있다.

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '손동민 기술 블로그',
    description: '손동민 기술 블로그입니다.',
};
```

SNS 공유를 위한 미리보기를 설정하고 싶다면 오픈 그래프 태그를 작성하면 된다.

```html
<head>
    <meta property="og:title" content="손동민 기술 블로그" />
    <meta property="og:description" content="손동민 기술 블로그입니다." />
    <meta
        property="og:image"
        content="https://dmson1218.com/image/thumbnail.png"
    />
    <meta property="og:url" content="https://dmson1218.com" />
</head>
```

### 2. next-sitemap

기술 블로그 특성 상 각 포스트 페이지 및 소개 페이지 또한 검색 결과에 노출되는 것이 좋다. 이렇게 메인 페이지 뿐만 아니라 모든 페이지의 SEO를 위해 사용하는 것이 바로 사이트맵(sitemap)이다. 사이트맵은 특정 사이트에서 이동할 수 있는 모든 URL을 나열하며 각 페이지의 데이터를 포함하기 때문에, 검색 엔진이 사이트 구조를 이해하고 크롤링하는 것을 돕는다.

Next.js 프로젝트는 next-sitemap 패키지를 통해 사이트맵을 아주 쉽게 생성할 수 있다.

```bash
npm install next-sitemap
```

설치가 완료되었다면 `next-sitemap.config.js` 파일을 생성할 차례다. 앞으로 이 파일을 통해서 사이트맵을 어떻게 생성할지 지정할 수 있다. 나는 다음과 같이 작성했다.

```jsx
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://dmson1218.com',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
        additionalSitemaps: ['https://dmson1218.com/server-sitemap.xml'],
    },
};
```

`generateRobotsTxt` 속성은 사이트맵과 함께 `robots.txt` 생성 여부를 결정하며, 이를 통해 생성된 `robots.txt` 파일은 각 페이지의 크롤링 여부를 지정한다. 만약 사이트 내에 검색 엔진에 노출되면 안 되는 민감한 페이지가 있을 경우 `robots.txt` 파일 내에서 접근을 제어할 수 있다.

`exclude` 및 `robotsTxtOptions` 속성은 개별 포스트 페이지를 위해 설정해주었다. 현재 `/posts/[slug]` 페이지는 `generateStaticParams` 함수를 통해 SSG 방식으로 동작한다. 사용자가 접속할 수 있는 모든 URL 정보를 Next.js에 넘겨주었기 때문이다. 그러나 해당 함수가 사이트맵 생성까지 도움을 주지는 못한다. 따라서 서버에서 사이트맵을 생성할 수 있도록 추가적인 설정이 필요하다.

[공식 문서](https://github.com/iamvishnusankar/next-sitemap#generating-dynamicserver-side-sitemaps)에 따라 진행하였다. next-sitemap은 서버 사이드 사이트맵을 위한 2가지 API를 제공한다.

![Next.js 14 SEO 개선하기 1.png](/image/Next.js%2014%20SEO%20개선하기%201.png)
개발 당시 사이트맵 인덱스와 사이트맵의 차이를 몰랐기 때문에 어떤 API를 선택해야 할지 감이 잡히지 않았다. 때문에 구글링을 통해 차이점을 알아보았다. 간단하게 정리하자면 사이트맵은 보유할 수 있는 데이터의 양에 제한이 있다. 그래서 50,000개가 넘는 URL이 존재하는 경우 여러 개의 사이트맵을 만든 다음 인덱스를 사용하고, 콘솔에 하나의 URL만 제출해야 한다. 나는 기술 블로그 규모를 생각해 사이트맵을 사용하기로 했다.

`/app/server-sitemap.xml` 경로에 `route.ts` 파일을 작성하자.

```tsx
// app/server-sitemap.xml/route.ts
import { getServerSideSitemap } from 'next-sitemap';
import { getMDFiles } from '../../utils/markdown';

export async function GET(request: Request) {
    const metaDatas = getMDFiles();

    return getServerSideSitemap([
        {
            loc: 'https://dmson1218.com',
            lastmod: new Date().toISOString(),
            changefreq: 'daily',
            priority: 0.7,
        },
        ...metaDatas.map(metaData => ({
            loc: `https://dmson1218.com/posts/${metaData.title.replace(/ /g, '%20')}`,
            lastmod: metaData.date.toISOString(),
            priority: 0.7,
        })),
    ]);
}
```

마크다운 파일들의 메타 데이터와 고차 함수를 사용해 모든 개별 포스트 페이지 URL을 입력했다. 이제 해당 페이지에서 Next.js가 서버 사이드 사이트맵을 제공한다. 다음은 [/server-sitemap.xml](https://www.dmson1218.com/server-sitemap.xml)에 접속했을 때 볼 수 있는 화면이다.

![Next.js 14 SEO 개선하기 2.png](/image/Next.js%2014%20SEO%20개선하기%202.png)

다시 `next-sitemap.config.js` 파일을 보자. 이제 모든 속성에 대해 이해할 수 있다. `exclude` 속성을 통해 `/server-sitemap.xml` 경로의 사이트맵 생성을 막고, `robotsTxtOptions` 속성을 통해 방금 구현한 서버 사이드 사이트맵을 `robots.txt` 파일에 포함시켰다.

### 마무리

이외에도 SEO 개선을 위한 다양한 방법이 있겠지만, 우선은 오늘 구현한 결과가 구글 검색 엔진에 반영될 때까지 기다리려 한다. 아마 일주일 정도 걸리지 않을까? 성공하면 어여쁜 도메인을 구매해야겠다.
