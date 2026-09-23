# ezREMS 엔터프라이즈 랜딩페이지 리뉴얼 프로젝트
> **대한민국 No.1 금융 연동형 프롭-핀테크(Prop-FinTech) 클라우드 자산관리 플랫폼**

[![ezREMS](https://img.shields.io/badge/Platform-ezREMS%20Enterprise-0EA5E9?style=flat-square)](https://ezrems.com)
[![Security](https://img.shields.io/badge/Security-CSAP%20Standard%20Certified-10B981?style=flat-square)](#)
[![Font](https://img.shields.io/badge/Font-Paperlogy-F59E0B?style=flat-square)](#)
[![Multilingual](https://img.shields.io/badge/i18n-KO%20%7C%20EN%20%7C%20JA%20%7C%20ZH-8B5CF6?style=flat-square)](#)

---

## 📌 프로젝트 소개 (Overview)

**ezREMS(이지램스)**는 수천억 원 대의 대규모 부동산 자산을 데이터와 클라우드 기반으로 완벽하게 통제하는 엔터프라이즈 프롭-핀테크 솔루션입니다.  
본 프로젝트는 기존 랜딩페이지를 최고 수준의 엔터프라이즈 다크 테마(Midnight Deep Theme)와 글래스모피즘(Glassmorphism), 네온 글로우 인터랙션으로 전면 리뉴얼하여 국내 유수의 금융 리츠사, 자산운용사(AMC), 전문 PM/FM 기업들에게 무결점의 신뢰도와 첨단 기술력을 전달합니다.

---

## 🚀 주요 특징 (Key Highlights)

### 1. 차세대 엔터프라이즈 비주얼 & 인터랙션
- **미드나잇 다크 테마(Midnight Deep Theme)**: 깊이감 있는 블루-블랙 배경(`#050B14`, `#0B1120`) 위에 정교한 네온 사이버 글로우 효과 적용
- **Paperlogy 전용 서체 시스템**: 가독성과 신뢰성을 극대화한 현대적 기하학 고딕 서체 페이퍼로지(Paperlogy) 풀 패밀리 적용
- **인터랙티브 3D 대시보드 틸트 프리뷰**: 실시간 입출금 수납 통제 및 금융기관급 보안 현황을 보여주는 가상 관제 대시보드

### 2. 신뢰도 검증 (Social Proof & 랜드마크)
- **3대 공인 클라우드 인증 뱃지**: KISA CSAP 표준등급, 클라우드 확인제, NIPA 품질·성능 검증 획득
- **50+ 대표 고객사 리스트**: KT에스테이트, 신세계프라퍼티, CBRE, 롯데물산, 파르나스호텔, SYS홀딩스, 네오벨류프라퍼티 등 36개 주요 고객사 칩
- **17대 상업·복합 랜드마크 쇼케이스**: 스타필드, 롯데타워, 파르나스타워·몰, 타임스퀘어, 파크원, 서울대병원, 전자랜드, VL르웨스트 등 이지램스로 관리되는 대표 랜드마크를 4대 자산별 컬러 시스템으로 시각화

### 3. 직무별 맞춤 솔루션 (Tailored Solutions)
- **리츠사 · AMC · 오너**: 미수금 누수 차단 및 자산 가치(Value-Up) 극대화
- **자산관리사 · PM**: 엑셀 수작업 탈출, 수납부터 계약까지 전 과정 자동화
- **시설관리 · FM**: 모바일 현장 점검, 중대재해처벌법 대응 안전일지 전산화

### 4. 글로벌 다국어(i18n) 완벽 지원
- 한국어(KO), 영어(EN), 일본어(JA), 중국어(ZH) 4개 국어 동적 전환 엔진 내장 (`i18n.js`)

---

## 📂 프로젝트 구조 (Directory Structure)

```plaintext
20260923_ezrems_hp (gemini)/
├── index.html                  # 메인 엔터프라이즈 랜딩페이지
├── design_guide.html           # Paperlogy 폰트 기반 인터랙티브 디자인 가이드
├── DESIGN_GUIDE.md             # 마크다운 디자인 시스템 상세 규격서
├── README.md                   # 프로젝트 개요 및 기술 문서
├── info_1.html ~ info_3.html   # 서브 서비스 안내 페이지
├── price_info.html             # 요금 안내 페이지
├── target_marketing.html       # 타겟 마케팅 랜딩
├── chat.html                   # 실시간 상담 위젯
├── robots.txt / sitemap.xml    # 검색엔진 최적화 (SEO)
├── .gitignore                  # Git 추적 제외 설정
└── resources/
    ├── css/
    │   ├── enterprise-theme.css # 엔터프라이즈 리뉴얼 통합 CSS (다크 테마, 랜드마크, 컴포넌트)
    │   ├── main.css             # 레거시 메인 스타일
    │   └── common/              # 공통 리소스 및 폰트 정의
    ├── js/
    │   ├── i18n.js              # 4개 국어(KO, EN, JA, ZH) 다국어 번역 엔진
    │   ├── common.js            # 공통 인터랙션 및 내비게이션
    │   └── aos.js, swiper...    # 애니메이션 및 슬라이더 플러그인
    └── images/                  # 로고, 대시보드 캡처, 고객사 심볼 등 그래픽 에셋
```

---

## 🎨 디자인 시스템 요약 (Design System Summary)

| 구분 | 테마 컬러 | HEX / RGBA 코드 | 적용 영역 |
| :--- | :--- | :--- | :--- |
| **Cyber Cyan** | 🌐 사이버 시안 | `#00F0FF`, `#0EA5E9` | 메인 포인트, 링크, 오피스 자산 뱃지 |
| **Amber Gold** | 🛍️ 앰버 골드 | `#F59E0B`, `#FBBF24` | 리테일 자산 뱃지, 랜드마크 강조 |
| **Emerald Green** | 🌿 에메랄드 그린 | `#10B981`, `#34D399` | 임대주택 자산 뱃지, 인증 뱃지 |
| **Violet Purple** | 💜 바이올렛 퍼플 | `#A855F7`, `#C084FC` | 시니어 레지던스 자산 뱃지 |
| **Midnight Deep** | 🌌 미드나잇 다크 | `#050B14`, `#0B1120` | 전체 배경 및 표면 레이어 |

> 💡 자세한 스타일 컴포넌트와 인터랙션 가이드는 **[`design_guide.html`](./design_guide.html)** 또는 **[`DESIGN_GUIDE.md`](./DESIGN_GUIDE.md)**를 참고하세요.

---

## 🛠️ 기술 스택 (Tech Stack)

- **Markup & Styling**: HTML5, CSS3 (Modern Flexbox, CSS Grid, CSS Variables, Glassmorphism)
- **Typography**: Paperlogy (페이퍼로지) Web Font CDN
- **JavaScript**: Vanilla ES6+, jQuery 3.3.1
- **Icons**: FontAwesome 5 Pro (Light/Solid/Duotone)
- **Libraries**:
  - `AOS.js` (스크롤 기반 트리거 모션 애니메이션)
  - `Swiper.js` (반응형 터치 슬라이더)
  - `Local Notification Hybrid` (로컬스토리지 & 쿠키 기반 오늘 하루 닫기 팝업 제어)

---

## 🌐 원격 저장소 (Remote Repository)

- **Repository**: [https://github.com/ZEONS/ezrems-landing-renewal.git](https://github.com/ZEONS/ezrems-landing-renewal.git)
- **Default Branch**: `main`

---

## 📄 저작권 및 라이선스 (Copyright)

COPYRIGHT © 2018 **ZEONS, Inc.** All rights reserved.  
본 프로젝트의 모든 소스코드와 디자인 자산의 저작권은 **(주)제온스**에 있습니다.
