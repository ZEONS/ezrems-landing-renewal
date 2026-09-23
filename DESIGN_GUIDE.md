# ezREMS 엔터프라이즈 디자인 가이드 (Design System Guide)

본 문서는 **ezREMS(이지램스)** 웹 애플리케이션 및 엔터프라이즈 리뉴얼 랜딩페이지를 구축하기 위한 공식 디자인 시스템 규격서입니다.  
일관성 있는 시각 언어와 최적의 사용자 경험(UX)을 유지할 수 있도록 정의되었습니다.

---

## 1. 디자인 철학 (Design Philosophy)

1. **Enterprise Authority (엔터프라이즈의 압도적 신뢰감)**:
   - 복잡한 대규모 자산과 금융 출납을 다루는 플랫폼 특성에 맞춰, 가볍지 않고 깊이 있는 미드나잇 다크 테마를 기반으로 합니다.
2. **FinTech Modernity (금융 테크의 정밀함과 선명성)**:
   - 사이버 시안(`#00F0FF`, `#0EA5E9`), 골드 앰버(`#F59E0B`), 에메랄드 그린(`#10B981`)을 기능별 하이라이트로 사용하여 명확한 정보 인지를 유도합니다.
3. **Glassmorphism & Depth (글래스모피즘과 레이어링)**:
   - 다층 구조의 배경 블러(`backdrop-filter: blur(8px)`)와 은은한 경계선(`border: 1px solid rgba(255, 255, 255, 0.12)`)을 결합하여 현대적인 깊이감을 형성합니다.

---

## 2. 타이포그래피 (Typography)

ezREMS 엔터프라이즈 전면에는 **Paperlogy (페이퍼로지)** 서체를 기본 시스템 폰트로 채택하여 현대적인 기하학적 미감과 탁월한 디지털 가독성을 제공합니다.

### 2.1 폰트 패밀리 정의
```css
/* CDN Import */
@import url("https://cdn.jsdelivr.net/gh/fonts-archive/Paperlogy/Paperlogy.css");

/* CSS Variable */
:root {
    --font-main: "Paperlogy", "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
}

body {
    font-family: var(--font-main);
}
```

### 2.2 폰트 웨이트 (Font Weights)
- **Thin (100)**: 특수 배경 워터마크
- **Light (300)**: 보조 안내 문구, 각주
- **Regular (400)**: 본문 기본 문단
- **Medium (500)**: 내비게이션 링크, 서브 라벨
- **SemiBold (600)**: 버튼 텍스트, 칩 라벨, 뱃지
- **Bold (700)**: 카드 제목, 강조 키워드, 소제목
- **ExtraBold (800)**: 섹션 헤딩 (`section-heading`), 주요 통계 숫자
- **Black (900)**: 히어로 메인 타이틀 (`hero-title`)

### 2.3 타입 스케일 (Type Scale)
| 용도 | CSS 클래스 / 태그 | 데스크톱 크기 | 모바일 크기 | 굵기 | 자간 | 행간 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | `.hero-title` | `3.6rem` (57.6px) | `2.25rem` (36px) | `900` | `-0.03em` | `1.25` |
| **Section Heading** | `.section-heading` | `2.5rem` (40px) | `1.85rem` (29.6px) | `800` | `-0.025em` | `1.3` |
| **Card Title (Bento)** | `.bento-card-title` | `1.6rem` (25.6px) | `1.3rem` (20.8px) | `800` | `-0.02em` | `1.35` |
| **Section Tag** | `.section-tag` | `0.85rem` (13.6px) | `0.8rem` (12.8px) | `700` | `+0.1em` | `1.0` |
| **Body Large** | `.section-subheading`| `1.1rem` (17.6px) | `0.95rem` (15.2px) | `400` | `-0.01em` | `1.6` |
| **Body Regular** | 본문 문단 (`p`) | `0.95rem` (15.2px) | `0.9rem` (14.4px) | `400` | `0` | `1.6` |
| **Chip / Badge** | `.client-chip`, `.landmark-chip` | `0.92rem ~ 1.02rem` | `0.85rem` | `700` | `-0.01em` | `1.0` |

---

## 3. 컬러 시스템 (Color System)

### 3.1 브랜드 & 테크 프라이머리 컬러
| 색상명 | HEX 코드 | RGB / 변수명 | 시각적 의미 및 용도 |
| :--- | :--- | :--- | :--- |
| **Cyber Cyan** | `#0EA5E9` | `var(--color-cyber-cyan)` | 차세대 테크, 주요 링크, 호버 하이라이트 |
| **Deep Electric Blue**| `#0284C7` | `rgba(2, 132, 199, 1)` | 메인 CTA 버튼 기본 배경 |
| **Growth Green** | `#10B981` | `var(--color-growth-green)` | 금융 정상 수납, 신뢰, 인증 획득 |
| **Alert Red** | `#EC2527` | `var(--color-zeons-red)` | 제온스 공식 CI 포인트, 강조 스팬 |

### 3.2 4대 부동산 자산 테마 컬러 매핑 (Core Assets Color Theme)
| 자산 유형 | 테마 컬러 | 대표 HEX | 뱃지 배경 그라디언트 | 테두리 (Border) | 호버 글로우 (Glow) |
| :--- | :---: | :---: | :--- | :--- | :--- |
| **임대주택** | **에메랄드 그린** | `#34D399` | `rgba(16, 185, 129, 0.15)` → `0.05` | `rgba(16, 185, 129, 0.35)` | `0 10px 25px rgba(16, 185, 129, 0.32)` |
| **오피스** | **사이버 블루** | `#38BDF8` | `rgba(14, 165, 233, 0.15)` → `0.05` | `rgba(14, 165, 233, 0.35)` | `0 10px 25px rgba(14, 165, 233, 0.32)` |
| **리테일** | **앰버 골드** | `#FBBF24` | `rgba(245, 158, 11, 0.15)` → `0.05` | `rgba(245, 158, 11, 0.35)` | `0 10px 25px rgba(245, 158, 11, 0.32)` |
| **시니어 레지던스**| **바이올렛 퍼플** | `#C084FC` | `rgba(168, 85, 247, 0.15)` → `0.05`| `rgba(168, 85, 247, 0.35)` | `0 10px 25px rgba(168, 85, 247, 0.32)` |

### 3.3 백그라운드 & 서피스 레이어
- **Canvas Base**: `#050B14` (가장 깊은 다크 캔버스)
- **Midnight Deep**: `#0B1120` (헤더, 섹션 교차 배경)
- **Surface Dark**: `rgba(15, 23, 42, 0.7)` (카드, 컨테이너 배경)
- **Border Default**: `rgba(255, 255, 255, 0.1)` (미세 경계선)

---

## 4. UI 컴포넌트 명세 (UI Components)

### 4.1 버튼 (Buttons)
1. **Primary Button (`.btn-hero-primary`)**:
   - `background: linear-gradient(135deg, #0284C7 0%, #0369A1 100%)`
   - `border: 1px solid rgba(14, 165, 233, 0.6)`
   - `box-shadow: 0 4px 20px rgba(14, 165, 233, 0.35)`
   - 호버 시: `translateY(-3px)`, 네온 글로우 확장
2. **Secondary Button (`.btn-hero-secondary`)**:
   - `background: rgba(255, 255, 255, 0.05)`
   - `border: 1px solid rgba(255, 255, 255, 0.2)`
   - 호버 시: 배경 투명도 상승 및 흰색 경계선 강조

### 4.2 칩 및 뱃지 (Chips & Badges)
1. **고객사 칩 (`.client-chip`)**:
   - 컴팩트한 알약 캡슐 형태로 단정한 무채색 다크 배경에 호버 시 화이트 하이라이트
2. **랜드마크 칩 (`.landmark-chip`)**:
   - 패딩 `12px 24px`, 모서리 곡률 `12px`, 고유 아이콘 탑재
   - 자산군(`type-retail`, `type-office`, `type-residential`, `type-senior`)에 따라 테마 색상 및 발광 효과 자동 연동

### 4.3 아코디언 (Accordion - FAQ)
- `.faq-item`: 미세 경계선과 다크 서피스 카드 구조
- `.faq-question`: 클릭 인터랙션 및 우측 chevron 아이콘 회전 트랜지션
- `.faq-item.active .faq-answer`: 부드러운 펼침 애니메이션과 상세 답변 텍스트 제공

---

## 5. 반응형 브레이크포인트 (Responsive Breakpoints)

- **Mobile**: `< 768px` (1열 스택 정렬, 헤더 패딩 축소, 폰트 스케일 다운)
- **Tablet**: `768px ~ 1024px` (2열 그리드 전환)
- **Desktop**: `> 1024px` (최대 너비 1280px 중앙 정렬, 풀 인터랙션 가동)
