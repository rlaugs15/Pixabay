## Pixabay

<img width="800" alt="Image" src="https://github.com/user-attachments/assets/5ada7251-6b20-4003-92ad-6d856a0b004b" />

## 소개

**현재 서비스 되고 있는 [Pixabay](https://pixabay.com/ko/)를 기반으로 라이트하우스 성능 지표의 최적화를 위한 실험 프로젝트**

- CSR 기반 리액트 구조에서 시작해 CSR의 한계를 느끼고 SSR 기반의 넥스트JS로 마이그레이션
- LCP, FCP, CLS 같은 핵심 지표를 개선하는데 중점

## 개발 배경

<img width="800" alt="Image" src="https://github.com/user-attachments/assets/57eb197b-8624-48d7-ba8c-23ee4dde3935" />

- 라프텔을 이용하던 중 페이지 성능이 다소 느리다는 인상을 받았고, 라이트하우스로 측정한 결과를 보며 성능 개선에 관심을 가진 것이 시작
- 이미지 중심 서비스로서 LCP, CLS 같은 성능 지표 분석이 용이하고 오픈 API를 제공해 클론 사이트를 빠르게 구현 가능한 Pixabay를 선정

## 주요 성능 지표 개선 결과

| 지표    | 개선 전 | 개선 후 | 변화            |
| ------- | ------- | ------- | --------------- |
| **FCP** | 2,566ms | 284ms   | ⬇ **-89% 개선** |
| **SI**  | 3,529ms | 1,463ms | ⬇ **-59% 개선** |
| **LCP** | 7,241ms | 440ms   | ⬇ **-93% 개선** |
| **TBT** | 72ms    | 9ms     | ⬇ **-87% 개선** |
| **CLS** | 0.17    | 0.03    | ⬇ **안정화**    |

- 실제 성능 측정 결과를 바탕으로 라이트하우스 점수를 51점 → 99점으로 개선

## 성능 개선 전략 요약

| 지표                                  | 리액트 기반 개선 전략 (CSR)                                                                                                                        | 넥스트 기반 개선 전략 (SSR + RSC)                                                                                                                                          |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **LCP**<br>(Largest Contentful Paint) | - `prefetchQuery()`로 이미지 URL 미리 가져오기<br>- `new Image().src`로 브라우저 프리로드<br>- `<img loading="eager" fetchpriority="high" />` 적용 | - **배너 이미지 데이터를 서버에서 fetch**<br>- `<Image priority={index === 0} />`로 **첫 이미지만 preload**<br>- `next/image`의 WebP 자동 변환                             |
| **FCP**<br>(First Contentful Paint)   | - `React.lazy + Suspense`로 번들 크기 축소<br>- `h1`, `p` 같은 텍스트를 먼저 배치                                                                  | - **서버 컴포넌트에서 배너 구조와 텍스트를 먼저 렌더링**<br>- HTML에 초기 콘텐츠 포함                                                                                      |
| **SI**<br>(Speed Index)               | - 코드 스플리팅으로 초기 JS 줄이기<br>- `Suspense fallback`으로 뼈대 먼저 보여주기<br>- 이미지 lazy 로딩 적용                                      | - **배너 이미지를 서버에서 fetch한 뒤 캐러셀 구성 선렌더**<br>- 첫 이미지만 preload로 브라우저 Paint 시점 앞당김                                                           |
| **CLS**<br>(Cumulative Layout Shift)  | - `<img>`에 `aspect-[16/9]` 적용으로 이미지 크기 고정<br>- `Suspense fallback`에 `min-h-[...]`로 렌더 전 공간 확보                                 | - **배너 이미지 위치를 서버에서 먼저 렌더하고 크기를 고정해 화면 밀림 방지**<br>- `<Image priority fill aspect-[16/9] />` 사용<br>- `Suspense fallback`에도 최소 높이 지정 |

- 자세한 전략 및 실험 결과는 [Wiki 바로가기](https://github.com/rlaugs15/Pixabay/wiki#%EA%B0%9C%EC%84%A0-%ED%8F%AC%EC%9D%B8%ED%8A%B8)에서 확인 가능

## 기술 스택

<table>
  <tr>
    <td><strong>Framework</strong></td>
    <td>
      <img src="https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white" height="20" />
      <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" height="20" />
    </td>
  </tr>
  <tr>
    <td><strong>Styling</strong></td>
    <td>
      <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" height="20" />
      <img src="https://img.shields.io/badge/Shadcn_UI-EDEDED?logo=storybook&logoColor=black" height="20" />
    </td>
  </tr>
  <tr>
    <td><strong>State & Data</strong></td>
    <td>
      <img src="https://img.shields.io/badge/Zustand-000000?logo=zotero&logoColor=white" height="20" />
      <img src="https://img.shields.io/badge/TanStack_Query-FF4154?logo=react-query&logoColor=white" height="20" />
    </td>
  </tr>
  <tr>
    <td><strong>Form & Validation</strong></td>
    <td>
      <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=white" height="20" />
      <img src="https://img.shields.io/badge/Zod-3E52B5?logo=zod&logoColor=white" height="20" />
    </td>
  </tr>
</table>

## 폴더 구조

```
📦 src
 ┣ 📂app
 ┃ ┣ 📂actions          # 서버 액션 (이미지/비디오 API fetch)
 ┃ ┣ 📂search           # 검색 결과 페이지
 ┃ ┗ 📜page.tsx         # 홈 페이지
 ┣ 📂components
 ┃ ┣ 📂common           # 헤더, 검색폼 등 공용 UI
 ┃ ┣ 📂features
 ┃ ┃ ┣ 📂home           # 홈 페이지 구성 컴포넌트
 ┃ ┃ ┗ 📂search         # 검색 페이지 구성 컴포넌트
 ┃ ┗ 📂ui               # shadcn UI 컴포넌트
 ┣ 📂hooks
 ┃ ┣ 📂queries          # tanstack-query 관련 훅 및 키 관리
 ┃ ┗ 📜useInfiniteScrollObserver.ts
 ┣ 📂lib                # 유틸, zod 스키마, 쿼리 클라이언트 등
 ┣ 📂store              # Zustand 기반 상태 관리
 ┣ 📂styles             # 글로벌 CSS
 ┣ 📂types              # 타입 정의 (API 응답, 환경변수 등)
 ┗ 📜Provider.tsx       # React Query 글로벌 프로바이더

```

## 설치 및 실행

#### 의존성 설치

```
npm install
```

### 개발 서버 실행

```
npm run dev
```

## 주요 학습 및 경험

- 리액트의 불필요한 리렌더링 줄이는 방법 습득
- CSR 기반 구조의 한계와 SSR의 구조적 장점을 체감
- 성능 최적화는 코드단도 중요하지만, 렌더링 방식이나 초기 로딩 구조 같은차원의 개선이 훨씬 큰 영향을 미친다는 걸 경험
