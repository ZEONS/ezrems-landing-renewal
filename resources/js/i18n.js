/**
 * ezREMS Multilingual Translation Engine (i18n)
 * Supports: KO (Korean, default), EN (English), JA (Japanese), ZH (Simplified Chinese)
 */

(function () {
    const translations = {
        ko: {
            lang_label: "한국어",
            nav_solution: "엔터프라이즈 솔루션",
            nav_features: "핵심기능",
            nav_preview: "시스템화면",
            nav_clients: "고객사",
            nav_faq: "자주 묻는 질문",
            nav_contact: "도입 문의",
            btn_basic: "간편형",
            btn_pms: "기업형",
            btn_counsel: "도입 문의",
            
            hero_badge: "CSAP 클라우드 표준등급 획득 | 차세대 프롭-핀테크 플랫폼",
            hero_title: "수천억 대 부동산 자산,<br/>DX를 넘어 <span class=\"tech-gradient-text\">AX 기반</span>으로 관리하십시오",
            hero_desc: "엑셀과 수기 관리의 한계를 벗어나십시오. 대한민국 유일의 금융 연동형 프롭-핀테크(Prop-FinTech) 플랫폼 이지램스가 자산운용사, 리츠사, 전문 PM사를 위한 무결점 자산관리를 제공합니다.",
            hero_title_1: "수천억 대 부동산 자산,<br/>DX를 넘어 <span class=\"tech-gradient-text\">AX 기반</span>으로 관리하십시오",
            hero_desc_1: "엑셀과 수기 관리의 한계를 벗어나십시오. 대한민국 유일의 금융 연동형 프롭-핀테크(Prop-FinTech) 플랫폼 이지램스가 자산운용사, 리츠사, 전문 PM사를 위한 무결점 자산관리를 제공합니다.",
            hero_pill_1: "01 AX 자산관리",
            hero_title_2: "수백억 원의 임대료와 관리비,<br/><span class=\"tech-gradient-text\">1초 실시간 자동 수납 대사</span>로 완결하십시오",
            hero_desc_2: "은행 CMS(자동이체) 및 가상계좌 실시간 연동으로 월 수만 건의 입금을 1초 만에 자동 대사하고, 연체 발생 즉시 최고장을 자동 발송합니다.",
            hero_pill_2: "02 금융 수납 자동화",
            hero_title_3: "CSAP 클라우드 표준등급 획득,<br/><span class=\"tech-gradient-text\">금융기관과 대기업이 신뢰</span>하는 무결점 PMS",
            hero_desc_3: "국내 50+ 대표 금융지주 계열사, 대기업 자산관리사, 공공기관의 까다로운 보안 감사를 완벽하게 통과한 최고 수준의 인프라를 보장합니다.",
            hero_pill_3: "03 공인 클라우드 보안",
            hero_btn_inquire: "엔터프라이즈 도입 문의",
            hero_btn_demo: "간편형 무료 체험",
            hero_stat_trans: "실시간 금융 수납 통제 중",
            hero_stat_overdue: "연체 자동 감지 및 회수 연동",
            hero_stat_security: "금융기관급 데이터 암호화",

            client_tag: "ENTERPRISE CLIENTS",
            trust_title: "대한민국 50+ 대표 기업 및 금융 리츠사가 신뢰하는 이지램스",
            trust_csap: "CSAP 클라우드 표준등급",
            trust_kaci: "클라우드 확인제 인증",
            trust_nipa: "품질·성능 검증 획득",

            asset_type_residential: "임대주택",
            asset_type_office: "오피스",
            asset_type_retail: "리테일",
            asset_type_senior: "시니어 레지던스",

            landmark_tag: "MANAGED LANDMARKS",
            landmark_title: "이지램스로 관리되는 랜드마크",
            landmark_subtitle: "대한민국을 대표하는 초대형 상업시설과 프리미엄 복합자산이 이지램스 클라우드로 운영됩니다.",

            bento_tag: "CORE CAPABILITIES",
            bento_title: "엔터프라이즈를 위한 6대 핵심 기술",
            bento_subtitle: "모든 부동산 유형과 반복적인 금융 전산 업무를 단일 클라우드 엔진으로 통합합니다.",
            
            b1_tag: "FinTech Automation",
            b1_title: "금융 연동형 실시간 수납 자동화",
            b1_desc: "은행 CMS(자동이체) 및 가상계좌 실시간 연동으로 월 수백억 원의 임대료와 관리비를 1초 만에 자동 대사하고, 미수 발생 시 연체료를 자동 계산합니다.",
            
            b2_tag: "Gov-Tech & E-Doc",
            b2_title: "전자계약·전자문서 지원",
            b2_desc: "국토부 공식 전자계약 체결부터 임대차 전자계약서, 전자고지서 및 각종 증명서 발급까지 전 과정을 비대면 전자문서로 완결합니다.",
            
            b3_tag: "Tax & Billing",
            b3_title: "1클릭 전자세금계산서 대량 발행",
            b3_desc: "국세청 홈택스 시스템과 직접 연동되어 매월 수천 건의 세금계산서 및 현금영수증을 단 1회의 클릭으로 일괄 자동 전송합니다.",
            
            b4_tag: "AI Intelligence",
            b4_title: "AI 기반 빌딩 밸류업(Value-Up) 대시보드",
            b4_desc: "공실률 예측, 적정 임대료 AI 시뮬레이션, 임차인 계약 만기 사전 알림을 제공하여 자산 가치와 운영 수익률을 극대화합니다.",
            
            b5_tag: "Enterprise ERP & API",
            b5_title: "API 제공 (공실·계약·청구 등) & ERP 연동",
            b5_desc: "공실 정보, 계약 내역, 청구 및 수납 데이터를 자유롭게 연계할 수 있는 표준 REST API를 제공하며, SAP·더존 등 기업 ERP와 양방향 자동 연동됩니다.",
            
            b6_tag: "Bank-Grade Security",
            b6_title: "CSAP 금융기관급 클라우드 보안",
            b6_desc: "KISA CSAP 표준등급을 획득하여 금융기관 및 공공기관의 까다로운 보안 감사를 완벽하게 통과하는 최고 수준의 인프라를 보장합니다.",

            persona_tag: "TAILORED SOLUTIONS",
            persona_title: "직무별 맞춤형 엔터프라이즈 솔루션",
            persona_subtitle: "조직의 역할과 의사결정 계층에 최적화된 전용 워크플로우를 제공합니다.",
            tab_amc: "리츠사 · AMC · 오너",
            tab_pm: "자산관리사 · PM",
            tab_fm: "시설관리 · FM",
            
            amc_h3: "미수금 누수 차단 및 자산 가치(Value-Up) 극대화",
            amc_p: "연체 자동 감지와 법적 절차 연동으로 연체율을 0%에 수렴시킵니다. 공실률, 수익률, 지출 현황을 실시간 데이터로 시각화하여 투자자 및 오너 보고서를 클릭 한 번에 완성합니다.",
            amc_feat1: "연체료 자동 산정 및 즉시 청구",
            amc_feat2: "월간 오너 정산 리포트 원클릭 생성",
            amc_feat3: "실시간 포트폴리오 자산 가치 분석",

            pm_h3: "엑셀 수작업 지옥 탈출, 수납부터 계약까지 자동화",
            pm_p: "매달 수작업으로 대조하던 수백 행의 엑셀 정산과 세금계산서 발행을 시스템이 대신 처리합니다. 서류와 도장 없는 비대면 전자계약으로 행정 소요 시간을 80% 이상 단축합니다.",
            pm_feat1: "CMS 및 가상계좌 입금 실시간 자동 대사",
            pm_feat2: "국토부 공식 전자계약 비대면 체결",
            pm_feat3: "부가세 및 세무 신고 데이터 일괄 연동",

            fm_h3: "시설 점검 및 안전관리 업무의 완벽한 디지털화",
            fm_p: "수기 장부와 종이 서류 대신 모바일로 현장 시설을 점검하고 중대재해처벌법 대응 안전관리 문서를 체계적으로 전산화합니다. 임차인 민원 접수 및 처리 상태를 실시간 공유합니다.",
            fm_feat1: "모바일 현장 점검 및 하자 접수",
            fm_feat2: "법정 안전점검 일지 클라우드 아카이빙",
            fm_feat3: "임차인 모바일 전용 앱(ezREMS Connect) 연동",

            metric_clients: "엔터프라이즈 고객사",
            metric_units: "전국 관리 세대수",
            metric_billing: "월 관리 청구 규모",
            metric_recovery: "미수금 자동 회수율",

            preview_tag: "SYSTEM PREVIEW",
            preview_title: "전문가를 위한 직관적인 통합 관제 화면",
            preview_subtitle: "복잡한 자산 현황을 한눈에 파악할 수 있는 사용자 중심의 대시보드를 직접 경험해보세요.",

            faq_tag: "FAQ",
            faq_title: "자주 묻는 질문",
            faq_subtitle: "이지램스 도입에 관해 가장 많이 궁금해하시는 사항들입니다.",
            faq_q1: "이지램스 이용 신청 시 실제 사용까지 기간이 얼마나 소요되나요?",
            faq_a1: "이지램스는 클라우드 기반 플랫폼 서비스이기 때문에 기초 데이터만 설정하시면 바로 사용하실 수 있습니다. 보통 사용 신청 후, 1주일 후면 사용이 가능합니다.",
            faq_q2: "이지램스를 기업형으로 구축 가능한가요?",
            faq_a2: "KT, 롯데건설, 롯데물산, SK D&D, 우미건설, 파크원디벨롭먼트, 라이크홈, 해피투게더하우스 등 많은 기업들이 솔루션 기반으로 구축하였습니다. 기업 환경에 맞도록 구축형으로 가능합니다. 구축기간은 보통 6개월 정도 소요됩니다.",
            faq_q3: "이지램스는 오피스, 주택 등 다양한 부동산 관리에 적용 가능한가요?",
            faq_a3: "이지램스는 매달 임대료를 청구하는 주거용 건물 등 외에도 분기별, 반기별로 임대료를 청구하는 오피스, 중소형 빌딩, 쇼핑몰 등 관리에도 적합합니다.",
            faq_q4: "이지램스 관련 매뉴얼이나 교육이 제공되나요?",
            faq_a4: "사용자매뉴얼과 초기 데이터 셋팅 외 별도로 담당자 교육을 진행합니다. 이지램스를 사용하고 있는 중에도, 업무지원팀과의 핫라인을 통해 VoC, 문의사항 등 업무 소통이 가능합니다.",
            faq_q5: "입주민 편의 서비스도 함께 이용할 수 있나요?",
            faq_a5: "이지램스는 고객사에 계약, 청구, 수납 등 입주 관련 API를 제공하기 때문에 각 기업 특성에 맞는 입주민 편의서비스 제공이 가능합니다. 제온스의 다양한 협력사들이 이지램스 제공 API를 활용해 각 사 입주민 플랫폼을 운영하고 있습니다.",
            faq_q6: "관리비 청구도 가능한가요?",
            faq_a6: "이지램스 솔루션을 통해 매달 관리비 청구가 가능합니다. 오피스 등 상업용 건물의 경우 계약 특수성을 반영해 분할/병합 청구도 가능합니다.",
            faq_q7: "기존에 사용하던 엑셀 데이터 이전이 가능한가요?",
            faq_a7: "네, 전문 데이터 컨설팅 팀이 계약 내역, 임차인 정보, 수납 이력 등 기존 엑셀 데이터를 표준 데이터베이스 규격으로 안전하고 신속하게 일괄 마이그레이션해 드립니다.",
            faq_q8: "금융기관이나 공공기관에서도 도입할 수 있나요?",
            faq_a8: "이지램스는 KISA CSAP 표준등급 클라우드 보안 인증을 획득하여 국내 주요 금융지주 계열사, 대기업 자산관리사, 공공기관의 까다로운 보안 심사를 모두 통과한 검증된 플랫폼입니다.",

            cta_badge: "START YOUR DIGITAL TRANSFORMATION",
            cta_title: "부동산 자산관리, 이제는 사람이 아닌<br/><span style='color:#EC2527;'>'엔터프라이즈 플랫폼'</span>의 영역입니다.",
            cta_desc: "이지램스 전문 컨설턴트가 귀사의 포트폴리오 규모에 맞춘 최적 도입 플랜과 데모 계정을 48시간 내에 안내해 드립니다.",
            cta_btn: "1:1 엔터프라이즈 도입 문의",
            cta_phone: "전화 문의: 070-8811-8880",
            cta_email: "이메일: sales@zeons.co.kr",

            foot_privacy: "개인정보처리방침",
            foot_terms: "이용약관",
            foot_email_reject: "이메일주소무단수집거부",
            foot_ceo: "대표이사 : 김인섭",
            foot_tel: "TEL : 070-8811-8881",
            foot_fax: "FAX : 070-4850-8848",
            foot_email: "EMAIL : support@zeons.co.kr",
            foot_biz: "사업자등록번호 : 220-88-84510",
            foot_addr: "본사 : 서울시 강남구 선릉로 93길 40 (스파크플러스 선릉3호점)",
            foot_copy: "COPYRIGHT © 2018 ZEONS, Inc. All rights reserved.",

            // Modal Notice
            modal_notice_title: "이지램스 공지사항",
            modal_notice_today: "오늘 하루 열지 않기",

            // 3D Dashboard Mockup Elements
            dash_nav_dashboard: "통합 관제 대시보드",
            dash_nav_portfolio: "포트폴리오 자산관리",
            dash_nav_billing: "가상계좌·CMS·PG 수납 자동화",
            dash_nav_econtract: "전자계약·전자문서 지원",
            dash_nav_tax: "세금계산서 일괄발행",
            dash_nav_erp: "회계ERP 연동·결산자료 지원",
            dash_nav_api: "API 제공 (공실,계약,청구 등)",
            dash_nav_security: "다중 권한 보안감사",
            dash_kpi_billing_title: "월간 총 청구/수납 규모",
            dash_kpi_billing_trend: "<i class=\"fal fa-arrow-up\"></i> 전월 대비 +14.8% 정상 수납",
            dash_kpi_units_title: "전국 관리 세대 및 호수",
            dash_kpi_units_unit: "세대",
            dash_kpi_units_trend: "<i class=\"fal fa-check-circle\"></i> 평균 공실률 2.1% (초안정)",
            dash_chart_title: "실시간 월별 수납 및 연체 회수 추이",
            dash_chart_legend: "● 정상 수납  ● 자동 회수",
            dash_alert_title: "이상 징후 및 연체 통제",
            dash_alert_desc: "연체 자동 감지 및 회수 연동: 1건 발생 즉시 최고장 전자고지 발송 처리 완료 (회수율 98.4%)",
            dash_sec_title: "CSAP 보안 상태: 무결",
            dash_sec_desc: "이중화 클라우드 서버 무중단 가동 99.99% 달성. 금융 전산 암호화 전송 프로토콜 작동 중.",

            // Clients
            client_more: "+ 50개 이상 기업",

            // Landmarks (18 Managed Landmarks)
            lm_starfield: "스타필드",
            lm_times_square: "타임스퀘어",
            lm_pamiers_mall: "파미어스몰",
            lm_anyoung_insadong: "안녕인사동",
            lm_alleyway: "엘리웨이",
            lm_lake_como: "레이크꼬모",
            lm_lacmon: "라끄몽",
            lm_etland: "전자랜드",
            lm_lotte_tower: "롯데타워",
            lm_parnas: "파르나스타워·몰",
            lm_parc1: "파크원",
            lm_one_grove: "원그로브",
            lm_josun_hotel: "조선호텔",
            lm_snuh: "서울대병원",
            lm_dcamp: "디캠프·FRONT1",
            lm_remarkville: "리마크빌",
            lm_mangrove: "맹그로브",
            lm_vl_lewest: "VL르웨스트",
            lm_baekun_morning: "백운호수·숲속의아침",

            // Bento Grid Details
            b1_metric_label: "수납 대사 소요 시간",
            b1_metric_val: "3일 소요 → 즉시(1초) 완결",
            b6_cta_btn: "보안 백서 및 도입 안내서 신청",

            // Solutions KPI & Quotes
            amc_kpi_title: "AMC 핵심 성과 지표",
            amc_kpi_label: "미수금 회수율",
            amc_quote: "\"사람이 직접 독촉할 필요 없이, 시스템이 공신력 있는 절차에 따라 채권을 관리하여 감정 소모 없이 회수율을 극대화합니다.\"",
            pm_kpi_title: "PM 핵심 성과 지표",
            pm_kpi_label: "단순 반복 업무 시간",
            pm_quote: "\"매달 말일과 10일 야근을 유발하던 엑셀 입금 확인 및 영수증 발행 업무를 1클릭으로 끝내고 가치 있는 자산 분석에 집중합니다.\"",
            fm_kpi_title: "FM 핵심 성과 지표",
            fm_kpi_label: "점검 이력 전산화",
            fm_quote: "\"현장에서 스마트폰으로 사진을 찍어 등록하면 본사와 임차인에게 즉시 상태가 공유되며, 법적 보관 서류가 안전하게 클라우드에 영구 저장됩니다.\"",

            // Metrics unit
            metric_billing_unit: "억+",

            // System Preview Card
            preview_card_title: "한눈에 통제하는 자산 관리 허브",
            preview_card_desc: "입주 현황, 청구/수납 대사, 계약 만기 예고, 민원 및 시설 점검까지 분산되어 있던 전산 업무를 단일 통합 화면에서 마우스 몇 번으로 모두 완결할 수 있습니다.",
            preview_demo_btn: "기업형 데모 화면 둘러보기",

            // Footer Certifications & Floating
            foot_cert_nipa: "클라우드 컴퓨팅 서비스<br/>품질·성능 검증 획득",
            foot_cert_kaci: "클라우드 서비스 확인제 인증<br/>한국클라우드산업협회",
            float_solution: "고객별 맞춤 솔루션",
            float_kakao: "카카오 상담",
            float_top: "맨 위로"
        },
        en: {
            lang_label: "English",
            nav_solution: "Enterprise Solutions",
            nav_features: "Features",
            nav_preview: "Screens",
            nav_clients: "Clients",
            nav_faq: "FAQ",
            nav_contact: "Contact",
            btn_basic: "Basic",
            btn_pms: "Enterprise",
            btn_counsel: "Contact Us",

            hero_badge: "CSAP Cloud Security Standard Certified | Next-Gen Prop-FinTech",
            hero_title: "Beyond DX to AX: Intelligent Asset Management<br/>for <span class=\"tech-gradient-text\">Hundreds of Billions</span> in Real Estate",
            hero_desc: "Break free from manual spreadsheets. ezREMS is Korea's leading financial-integrated Prop-FinTech platform, delivering automated, flawless asset management for REITs, AMCs, and professional PM firms.",
            hero_title_1: "Beyond DX to AX: Intelligent Asset Management<br/>for <span class=\"tech-gradient-text\">Hundreds of Billions</span> in Real Estate",
            hero_desc_1: "Break free from manual spreadsheets. ezREMS is Korea's leading financial-integrated Prop-FinTech platform, delivering automated, flawless asset management for REITs, AMCs, and professional PM firms.",
            hero_pill_1: "01 AX Asset Management",
            hero_title_2: "Tens of Billions in Rent & Maintenance,<br/>Completed with <span class=\"tech-gradient-text\">1-Sec Real-Time Auto Reconciliation</span>",
            hero_desc_2: "Seamless bank CMS and virtual account integration automates tens of thousands of monthly payment reconciliations in 1 second, while triggering instant delinquency notices.",
            hero_pill_2: "02 FinTech Automation",
            hero_title_3: "Certified CSAP Cloud Standard,<br/>The Flawless PMS <span class=\"tech-gradient-text\">Trusted by Financial Groups</span>",
            hero_desc_3: "Guaranteed enterprise-grade infrastructure that has rigorously passed strict security audits by 50+ leading Korean financial groups, conglomerates, and public institutions.",
            hero_pill_3: "03 Certified Security",
            hero_btn_inquire: "Enterprise Inquiry",
            hero_btn_demo: "Free Basic Trial",
            hero_stat_trans: "Real-time Financial Control",
            hero_stat_overdue: "Auto-Delinquency Tracking",
            hero_stat_security: "Bank-Grade Encryption",

            client_tag: "ENTERPRISE CLIENTS",
            trust_title: "Trusted by 50+ Leading Enterprises & Financial REITs in Korea",
            trust_csap: "CSAP Cloud Security Certified",
            trust_kaci: "Cloud Verification Certified",
            trust_nipa: "NIPA Quality & Performance Verified",

            asset_type_residential: "Residential",
            asset_type_office: "Office",
            asset_type_retail: "Retail",
            asset_type_senior: "Senior Living",

            landmark_tag: "MANAGED LANDMARKS",
            landmark_title: "Iconic Landmarks Managed by ezREMS",
            landmark_subtitle: "Korea's leading mega commercial facilities and prime mixed-use assets are powered by ezREMS Cloud.",

            bento_tag: "CORE CAPABILITIES",
            bento_title: "6 Key Technologies for Enterprise",
            bento_subtitle: "Unify diverse property types and complex billing operations into a single intelligent cloud engine.",

            b1_tag: "FinTech Automation",
            b1_title: "Financial-Integrated Automated Billing",
            b1_desc: "Direct integration with bank CMS (auto-debit) and virtual accounts automatically reconciles tens of billions of KRW in rents within seconds and auto-calculates overdue fees.",

            b2_tag: "Gov-Tech & E-Doc",
            b2_title: "E-Contract & Digital Document Support",
            b2_desc: "End-to-end digital documentation from official government e-contracts to lease agreements, e-bills, and official certificates with zero paperwork.",

            b3_tag: "Tax & Billing",
            b3_title: "1-Click Bulk Electronic Tax Invoices",
            b3_desc: "Directly connected with the National Tax Service (Hometax) to batch-issue thousands of electronic tax invoices and cash receipts in a single click.",

            b4_tag: "AI Intelligence",
            b4_title: "AI-Powered Building Value-Up Dashboard",
            b4_desc: "Predict vacancy risks, simulate optimal rental yields, and receive automated lease expiration alerts to maximize asset value and ROI.",

            b5_tag: "Enterprise ERP & API",
            b5_title: "Open API (Vacancy, Lease, Billing) & ERP Sync",
            b5_desc: "REST APIs to seamlessly synchronize vacancy, lease contracts, and billing data with major ERPs (SAP, Douzone) and enterprise systems.",

            b6_tag: "Bank-Grade Security",
            b6_title: "CSAP Bank-Grade Cloud Security",
            b6_desc: "Certified with KISA CSAP Standard grade, guaranteeing the highest defense standards, dual-site redundancy, and strict access controls.",

            persona_tag: "TAILORED SOLUTIONS",
            persona_title: "Customized Enterprise Workflows",
            persona_subtitle: "Tailored workflows optimized for each organizational hierarchy and decision-making role.",
            tab_amc: "REITs · AMC · Owners",
            tab_pm: "Property Managers · PM",
            tab_fm: "Facility Managers · FM",

            amc_h3: "Prevent Revenue Leaks & Maximize Asset Value",
            amc_p: "Automated delinquency tracking and legal integration reduce unpaid rents toward zero. Real-time visual dashboards generate investor and owner reports with a single click.",
            amc_feat1: "Automated delinquency calculation & instant billing",
            amc_feat2: "1-Click monthly owner settlement reports",
            amc_feat3: "Real-time portfolio asset valuation analytics",

            pm_h3: "Escape Excel Chaos: Automated Billing to Reconciliation",
            pm_p: "Automate hundreds of monthly spreadsheet comparisons, tax invoices, and contract renewals. Reduce administrative workload by over 80% with paperless digital contracts.",
            pm_feat1: "Real-time auto-reconciliation of CMS & virtual accounts",
            pm_feat2: "Official government electronic contracts without paper",
            pm_feat3: "Seamless integration with VAT and tax filing data",

            fm_h3: "Complete Digitization of Facility & Safety Management",
            fm_p: "Replace paper logs with mobile facility inspections and systematic compliance records for safety laws. Share tenant inquiries and maintenance status in real-time.",
            fm_feat1: "Mobile on-site inspection and defect reporting",
            fm_feat2: "Cloud archiving of statutory safety inspection logs",
            fm_feat3: "Integrated tenant mobile app (ezREMS Connect)",

            metric_clients: "Enterprise Clients",
            metric_units: "Units Managed Nationwide",
            metric_billing: "Monthly Billing Volume",
            metric_recovery: "Auto-Recovery Rate",

            preview_tag: "SYSTEM PREVIEW",
            preview_title: "Intuitive Integrated Control for Professionals",
            preview_subtitle: "Experience user-centric dashboards designed to visualize complex real estate portfolios at a glance.",

            faq_tag: "FAQ",
            faq_title: "Frequently Asked Questions",
            faq_subtitle: "Key questions asked by organizations considering ezREMS.",
            faq_q1: "How long does it take from application to actual use of ezREMS?",
            faq_a1: "As ezREMS is a cloud-based platform service, you can start using it immediately once basic data is configured. Typically, onboarding is completed within one week after application.",
            faq_q2: "Is ezREMS available as a customized enterprise deployment?",
            faq_a2: "Many leading enterprises, including KT, Lotte E&C, Lotte Property & Development, SK D&D, Woomi Construction, Parc1 Development, Likehome, and Happy Together House, have built their systems based on our enterprise solution. Custom enterprise deployment tailored to your business environment is available, typically taking about 6 months.",
            faq_q3: "Can ezREMS be applied to various property types such as offices and residential housing?",
            faq_a3: "Yes. In addition to residential properties that bill rent monthly, ezREMS is ideally suited for offices, commercial buildings, and shopping malls that bill rent on a quarterly or semi-annual basis.",
            faq_q4: "Are user manuals and training provided for ezREMS?",
            faq_a4: "We provide user manuals, initial data configuration support, and dedicated administrator training. Even during regular use, direct operational communication is supported via a dedicated hotline with our support team for VoC and inquiries.",
            faq_q5: "Can tenant convenience and lifestyle services also be integrated?",
            faq_a5: "Yes. ezREMS provides tenancy APIs for contracts, billing, and payment, enabling enterprises to deliver tailored tenant convenience services. Various partners utilize ezREMS APIs to operate their tenant mobile platforms.",
            faq_q6: "Is maintenance and utility fee billing also supported?",
            faq_a6: "Yes, monthly maintenance fee billing is fully automated through ezREMS. For commercial buildings such as offices, split or consolidated billing can also be handled according to specific contract terms.",
            faq_q7: "Can existing Excel data be migrated?",
            faq_a7: "Yes, our dedicated data engineering team securely migrates all lease histories, tenant profiles, and payment records into standard databases quickly.",
            faq_q8: "Can financial institutions or public agencies use ezREMS?",
            faq_a8: "Yes, ezREMS holds the KISA CSAP Standard certification, satisfying all strict security requirements for top financial holdings and public agencies.",

            cta_badge: "START YOUR DIGITAL TRANSFORMATION",
            cta_title: "Real Estate Asset Management is Now Driven by<br/><span style='color:#EC2527;'>'Enterprise Cloud Platforms'</span>",
            cta_desc: "Our senior consultants will deliver a tailored enterprise plan and demo access within 48 hours.",
            cta_btn: "Request 1:1 Enterprise Consultation",
            cta_phone: "Phone: +82-70-8811-8880",
            cta_email: "Email: sales@zeons.co.kr",

            foot_privacy: "Privacy Policy",
            foot_terms: "Terms of Service",
            foot_email_reject: "Anti-Spam Policy",
            foot_ceo: "CEO: Inseop Kim",
            foot_tel: "TEL: +82-70-8811-8881",
            foot_fax: "FAX: +82-70-4850-8848",
            foot_email: "EMAIL: support@zeons.co.kr",
            foot_biz: "Biz Reg No: 220-88-84510",
            foot_addr: "HQ: 40, Seolleung-ro 93-gil, Gangnam-gu, Seoul, Korea",
            foot_copy: "COPYRIGHT © 2018 ZEONS, Inc. All rights reserved.",

            // Modal Notice
            modal_notice_title: "ezREMS Announcement",
            modal_notice_today: "Do not show again today",

            // 3D Dashboard Mockup Elements
            dash_nav_dashboard: "Command Dashboard",
            dash_nav_portfolio: "Portfolio Assets",
            dash_nav_billing: "Virtual Account & CMS Billing",
            dash_nav_econtract: "E-Contracts & Digital Docs",
            dash_nav_tax: "Bulk Tax Invoices",
            dash_nav_erp: "Accounting ERP & Settlement Data",
            dash_nav_api: "Open APIs (Vacancy, Billing)",
            dash_nav_security: "Multi-Tier Security Audit",
            dash_kpi_billing_title: "Monthly Billing & Collection",
            dash_kpi_billing_trend: "<i class=\"fal fa-arrow-up\"></i> +14.8% MoM Normal Collection",
            dash_kpi_units_title: "Nationwide Managed Units",
            dash_kpi_units_unit: "Units",
            dash_kpi_units_trend: "<i class=\"fal fa-check-circle\"></i> Avg. Vacancy 2.1% (Ultra-stable)",
            dash_chart_title: "Monthly Collection & Recovery Trend",
            dash_chart_legend: "● Normal Collection  ● Auto-Recovery",
            dash_alert_title: "Anomaly & Delinquency Control",
            dash_alert_desc: "Auto-delinquency tracking: immediate e-notice dispatched upon occurrence (Recovery rate: 98.4%)",
            dash_sec_title: "CSAP Security Status: Flawless",
            dash_sec_desc: "Redundant cloud architecture achieving 99.99% uptime. Financial encryption protocols active.",

            // Clients
            client_more: "+ 50+ Enterprises",

            // Landmarks (18 Managed Landmarks)
            lm_starfield: "Starfield",
            lm_times_square: "Times Square",
            lm_pamiers_mall: "Pamiers Mall",
            lm_anyoung_insadong: "Anyoung Insadong",
            lm_alleyway: "Alleyway",
            lm_lake_como: "Lake Como",
            lm_lacmon: "Lacmon",
            lm_etland: "ETLAND",
            lm_lotte_tower: "Lotte World Tower",
            lm_parnas: "Parnas Tower & Mall",
            lm_parc1: "Parc.1",
            lm_one_grove: "One Grove",
            lm_josun_hotel: "Josun Hotel",
            lm_snuh: "Seoul Nat'l Univ. Hospital",
            lm_dcamp: "D.CAMP · FRONT1",
            lm_remarkville: "Remarkville",
            lm_mangrove: "Mangrove",
            lm_vl_lewest: "VL LE WEST",
            lm_baekun_morning: "Baekun Lake Forest Morning",

            // Bento Grid Details
            b1_metric_label: "Reconciliation Time",
            b1_metric_val: "3 Days → Instant (1 Sec)",
            b6_cta_btn: "Request Security Whitepaper & Guide",

            // Solutions KPI & Quotes
            amc_kpi_title: "AMC Core KPI",
            amc_kpi_label: "Overdue Recovery",
            amc_quote: "\"Without manual confrontation, the system manages receivables with official authority to maximize recovery without emotional burden.\"",
            pm_kpi_title: "PM Core KPI",
            pm_kpi_label: "Repetitive Task Time",
            pm_quote: "\"Eliminate repetitive overtime for monthly billing and tax receipts in 1-click, focusing on strategic portfolio analysis.\"",
            fm_kpi_title: "FM Core KPI",
            fm_kpi_label: "Inspection Log Cloud Sync",
            fm_quote: "\"Take photos on-site via mobile to instantly share status with HQ and tenants, securely archiving statutory records in the cloud.\"",

            // Metrics unit
            metric_billing_unit: "00M+ (KRW)",

            // System Preview Card
            preview_card_title: "All-in-One Asset Command Hub",
            preview_card_desc: "From occupancy and billing reconciliation to lease renewals, complaints, and facility inspections—unify all scattered tasks on a single screen with just a few clicks.",
            preview_demo_btn: "Explore Enterprise Demo",

            // Footer Certifications & Floating
            foot_cert_nipa: "Cloud Computing Service<br/>Quality & Performance Verified",
            foot_cert_kaci: "Cloud Service Verification<br/>Korea Cloud Industry Association",
            float_solution: "Tailored Solutions",
            float_kakao: "Kakao Talk",
            float_top: "Top"
        },
        ja: {
            lang_label: "日本語",
            nav_solution: "エンタープライズソリューション",
            nav_features: "主要機能",
            nav_preview: "システム画面",
            nav_clients: "導入企業",
            nav_faq: "よくある質問",
            nav_contact: "お問い合わせ",
            btn_basic: "スタンダード",
            btn_pms: "エンタープライズ",
            btn_counsel: "導入相談",

            hero_badge: "CSAPクラウドセキュリティ標準等級認証 | 次世代Prop-FinTech",
            hero_title: "数百億円規模の不動産資産、<br/>DXを超え<span class=\"tech-gradient-text\">AX基盤</span>で管理せよ",
            hero_desc: "エクセルと手作業の限界を超えましょう。韓国唯一の金融連携型プロップフィンテック(Prop-FinTech)プラットフォーム「ezREMS」が、資産運用会社・REIT・PM会社に完璧な資産管理を提供します。",
            hero_title_1: "数百億円規模の不動産資産、<br/>DXを超え<span class=\"tech-gradient-text\">AX基盤</span>で管理せよ",
            hero_desc_1: "エクセルと手作業の限界を超えましょう。韓国唯一の金融連携型プロップフィンテック(Prop-FinTech)プラットフォーム「ezREMS」が、資産運用会社・REIT・PM会社に完璧な資産管理を提供します。",
            hero_pill_1: "01 AX 資産管理",
            hero_title_2: "数百億ウォンの賃料と管理費、<br/><span class=\"tech-gradient-text\">1秒リアルタイム自動入金照合</span>で完結",
            hero_desc_2: "銀行CMS（自動振替）と仮想口座のリアルタイム連携により、月間数万件の入金を1秒で自動消込し、滞納発生時は即座に督促状を自動発行します。",
            hero_pill_2: "02 金融出納自動化",
            hero_title_3: "CSAPクラウド標準等級認証取得、<br/><span class=\"tech-gradient-text\">金融機関と大手企業が信頼</span>する無欠陥PMS",
            hero_desc_3: "韓国50社以上の代表的な金融グループ系列社、大手不動産管理会社、公共機関の厳格なセキュリティ監査を完璧にクリアした最高水準のインフラを保証します。",
            hero_pill_3: "03 公認セキュリティ",
            hero_btn_inquire: "エンタープライズ導入相談",
            hero_btn_demo: "無料体験版を開始",
            hero_stat_trans: "リアルタイム金融出納統制中",
            hero_stat_overdue: "滞納自動検知・回収連携",
            hero_stat_security: "金融機関級データ暗号化",

            client_tag: "ENTERPRISE CLIENTS",
            trust_title: "韓国50社以上の代表企業・金融REITが信頼するezREMS",
            trust_csap: "CSAPクラウドセキュリティ認証",
            trust_kaci: "クラウド確認制認証",
            trust_nipa: "品質・性能検証獲得",

            asset_type_residential: "賃貸住宅",
            asset_type_office: "オフィス",
            asset_type_retail: "リテール",
            asset_type_senior: "シニアレジデンス",

            landmark_tag: "MANAGED LANDMARKS",
            landmark_title: "ezREMSで管理されるランドマーク",
            landmark_subtitle: "韓国を代表する超大型商業施設とプレミアム複合資産がezREMSクラウドで運用されています。",

            bento_tag: "CORE CAPABILITIES",
            bento_title: "エンタープライズのための6大中核技術",
            bento_subtitle: "すべての不動産タイプと複雑な金融出納業務を単一のクラウドエンジンに統合します。",

            b1_tag: "FinTech Automation",
            b1_title: "金融連携型リアルタイム自動消込",
            b1_desc: "銀行CMS（口座振替）および仮想口座のリアルタイム連携により、数百億ウォンの賃料と管理費を瞬時に自動照合し、滞納金を自動計算します。",

            b2_tag: "Gov-Tech & E-Doc",
            b2_title: "電子契約・電子文書サポート",
            b2_desc: "公的電子契約連携から賃貸借契約書、電子請求書、各種証明書発行まで、全プロセスをペーパーレス電子文書で完結します。",

            b3_tag: "Tax & Billing",
            b3_title: "1クリック電子税金計算書一括発行",
            b3_desc: "国税庁システムと直結し、毎月数千件の税金計算書および現金領収書をワンクリックで一括送信します。",

            b4_tag: "AI Intelligence",
            b4_title: "AI基盤ビルバリューアップ(Value-Up)ダッシュボード",
            b4_desc: "空室率予測、適正賃料AIシミュレーション、契約満期アラートにより、資産価値と運用利回りを最大化します。",

            b5_tag: "Enterprise ERP & API",
            b5_title: "API提供（空室・契約・請求等）＆ ERP連携",
            b5_desc: "空室情報、契約データ、請求・入金履歴を自在に連携できる標準REST APIを提供し、SAPや企業ERPと双方向で自動同期します。",

            b6_tag: "Bank-Grade Security",
            b6_title: "CSAP金融機関級クラウドセキュリティ",
            b6_desc: "KISA CSAP標準等級を獲得し、金融機関や公共機関の厳しいセキュリティ監査をクリアする最高レベルの環境を保証します。",

            persona_tag: "TAILORED SOLUTIONS",
            persona_title: "職務別カスタマイズソリューション",
            persona_subtitle: "組織の役割や意思決定階層に最適化された専用ワークフローを提供します。",
            tab_amc: "REIT · AMC · オーナー",
            tab_pm: "資産管理会社 · PM",
            tab_fm: "施設管理会社 · FM",

            amc_h3: "未収金流出の遮断＆資産価値(Value-Up)の最大化",
            amc_p: "滞納自動検知と法的プロセス連携で未収率を0％に近づけます。空室率・収益率・支出現況を可視化し、オーナー報告書を1クリックで作成します。",
            amc_feat1: "延滞料の自動算出＆即時請求",
            amc_feat2: "月次オーナー精算レポートのワンクリック生成",
            amc_feat3: "リアルタイムのポートフォリオ資産価値分析",

            pm_h3: "エクセル手作業からの脱却、出納から契約まで自動化",
            pm_p: "毎月繰り返されていた数千行のエクセル照合や税金計算書発行をシステムが自動代行。ペーパーレス電子契約で事務時間を80％以上削減します。",
            pm_feat1: "CMSおよび仮想口座入金のリアルタイム自動消込",
            pm_feat2: "国土交通省公式電子契約の非対面締結",
            pm_feat3: "付加価値税・税務申告データの一括連携",

            fm_h3: "施設点検および安全管理業務の完全デジタル化",
            fm_p: "紙の台帳の代わりにモバイルで現場施設を点検し、安全管理書類を体系的にクラウド保存。テナントの苦情受付と対応状況をリアルタイム共有します。",
            fm_feat1: "モバイル現場点検＆不具合受付",
            fm_feat2: "法定安全点検日誌のクラウド自動保管",
            fm_feat3: "テナント専用モバイルアプリ（ezREMS Connect）連携",

            metric_clients: "導入エンタープライズ企業",
            metric_units: "全国管理戸数",
            metric_billing: "月間請求規模",
            metric_recovery: "自動回収率",

            preview_tag: "SYSTEM PREVIEW",
            preview_title: "専門家のための直感的な統合管理画面",
            preview_subtitle: "複雑な資産状況を一目で把握できるユーザー中心のダッシュボードをご体験ください。",

            faq_tag: "FAQ",
            faq_title: "よくあるご質問",
            faq_subtitle: "ezREMS導入に関する主なご質問にお答えします。",
            faq_q1: "ezREMSの利用申込から実際の運用開始までどのくらいかかりますか？",
            faq_a1: "ezREMSはクラウド基盤のプラットフォームサービスであるため、初期データの登録後すぐにご利用いただけます。通常、お申し込みから約1週間で運用開始が可能です。",
            faq_q2: "ezREMSを自社専用のエンタープライズ構築型で導入できますか？",
            faq_a2: "KT、ロッテ建設、ロッテ物産、SK D&D、ウミ建設、パークワン、ライクホームなど多くの大手企業がソリューションをベースに構築しています。貴社の業務環境に合わせた構築型導入が可能で、構築期間は通常約6ヶ月程度です。",
            faq_q3: "オフィスや住宅など、多様な不動産アセットの管理に適用できますか？",
            faq_a3: "はい。毎月賃料を請求する賃貸住宅だけでなく、四半期・半年ごとに請求するオフィス、中小型ビル、ショッピングモールなどの商業施設管理にも最適です。",
            faq_q4: "ezREMSのマニュアルや担当者向けトレーニングは提供されますか？",
            faq_a4: "ユーザーマニュアルと初期データセットアップに加え、専門担当者による研修を実施します。導入後も業務サポートチームとの直通ホットラインを通じて、VoCやご質問に迅速に対応いたします。",
            faq_q5: "入居者向け利便性サービスも連携して利用できますか？",
            faq_a5: "ezREMSは契約、請求、決済など入居関連のAPIを提供しているため、各企業の特性に合わせた入居者専用サービスの構築が可能です。多くのパートナー企業がezREMSのAPIを活用して入居者専用アプリ・プラットフォームを運営しています。",
            faq_q6: "管理費の請求業務も可能ですか？",
            faq_a6: "ezREMSを通じて毎月の管理費請求を自動化できます。オフィス等の商業物件における契約の特殊性に応じた分割・合算請求にも柔軟に対応しています。",
            faq_q7: "既存のエクセルデータ移行は可能ですか？",
            faq_a7: "はい、専門のデータコンサルティングチームが既存のエクセルデータを標準データベース形式に迅速かつ安全に移行いたします。",
            faq_q8: "金融機関や公共機関でも導入できますか？",
            faq_a8: "ezREMSはKISA CSAP標準等級クラウド認証を取得しており、大手金融グループや公共機関の厳格なセキュリティ審査をクリアしています。",

            cta_badge: "START YOUR DIGITAL TRANSFORMATION",
            cta_title: "不動産資産管理は今や、人ではなく<br/><span style='color:#EC2527;'>「エンタープライズクラウド」</span>の時代です",
            cta_desc: "専門コンサルタントがお客様の資産規模に最適な導入プランとデモアカウントを48時間以内にご案内いたします。",
            cta_btn: "1:1 エンタープライズ導入相談",
            cta_phone: "お電話: +82-70-8811-8880",
            cta_email: "メール: sales@zeons.co.kr",

            foot_privacy: "個人情報処理方針",
            foot_terms: "利用規約",
            foot_email_reject: "迷惑メール収集拒否",
            foot_ceo: "代表取締役 : 金仁燮",
            foot_tel: "TEL : +82-70-8811-8881",
            foot_fax: "FAX : +82-70-4850-8848",
            foot_email: "EMAIL : support@zeons.co.kr",
            foot_biz: "事業者登録番号 : 220-88-84510",
            foot_addr: "本社 : ソウル特別市江南区宣陵路93キル40",
            foot_copy: "COPYRIGHT © 2018 ZEONS, Inc. All rights reserved.",

            // Modal Notice
            modal_notice_title: "ezREMS お知らせ",
            modal_notice_today: "本日中は表示しない",

            // 3D Dashboard Mockup Elements
            dash_nav_dashboard: "統合管制ダッシュボード",
            dash_nav_portfolio: "ポートフォリオ資産管理",
            dash_nav_billing: "口座振替・仮想口座自動消込",
            dash_nav_econtract: "電子契約・電子文書サポート",
            dash_nav_tax: "税金計算書一括発行",
            dash_nav_erp: "会計ERP連携・決算資料支援",
            dash_nav_api: "API連携（空室・契約・請求等）",
            dash_nav_security: "多層権限セキュリティ監査",
            dash_kpi_billing_title: "月間請求・入金規模",
            dash_kpi_billing_trend: "<i class=\"fal fa-arrow-up\"></i> 前月比 +14.8% 正常入金",
            dash_kpi_units_title: "全国管理戸数",
            dash_kpi_units_unit: "戸",
            dash_kpi_units_trend: "<i class=\"fal fa-check-circle\"></i> 平均空室率 2.1%（超安定）",
            dash_chart_title: "月別入金および回収推移",
            dash_chart_legend: "● 正常入金  ● 自動回収",
            dash_alert_title: "異常兆候および滞納統制",
            dash_alert_desc: "滞納自動検知：発生直後に電子催告書を自動送付完了（回収率 98.4%）",
            dash_sec_title: "CSAPセキュリティ状態：無欠",
            dash_sec_desc: "冗長化クラウドで稼働率99.99％達成。金融暗号化プロトコル常時稼働中。",

            // Clients
            client_more: "+ 50社以上の企業",

            // Landmarks (18 Managed Landmarks)
            lm_starfield: "スターフィールド",
            lm_times_square: "タイムズスクエア",
            lm_pamiers_mall: "パミアスモール",
            lm_anyoung_insadong: "アンニョン仁寺洞",
            lm_alleyway: "アレイウェイ",
            lm_lake_como: "レイクコモ",
            lm_lacmon: "ラクモン",
            lm_etland: "電子ランド",
            lm_lotte_tower: "ロッテワールドタワー",
            lm_parnas: "パルナスタワー・モール",
            lm_parc1: "パークワン",
            lm_one_grove: "ワングローブ",
            lm_josun_hotel: "朝鮮ホテル",
            lm_snuh: "ソウル大学病院",
            lm_dcamp: "디캠프·FRONT1",
            lm_remarkville: "リマークビル",
            lm_mangrove: "マングローブ",
            lm_vl_lewest: "VLル・ウェスト",
            lm_baekun_morning: "白雲湖・森の朝",

            // Bento Grid Details
            b1_metric_label: "消込所要時間",
            b1_metric_val: "3日所要 → 即時(1秒)完了",
            b6_cta_btn: "セキュリティ白書・導入資料請求",

            // Solutions KPI & Quotes
            amc_kpi_title: "AMC主要成果指標",
            amc_kpi_label: "未収金回収率",
            amc_quote: "「人手による督促を不要にし、公的プロセスで債権を管理することで感情的負担なく回収率を最大化します」",
            pm_kpi_title: "PM主要成果指標",
            pm_kpi_label: "単純反復業務時間",
            pm_quote: "「月末月初に残業の原因となっていたエクセル確認や領収書発行をワンクリックで完了し、高付加価値な分析に集中できます」",
            fm_kpi_title: "FM主要成果指標",
            fm_kpi_label: "点検履歴電子化",
            fm_quote: "「スマホで現場写真を撮影・登録するだけで本部とテナントに即座に共有され、法定書類もクラウドへ安全に永久保存されます」",

            // Metrics unit
            metric_billing_unit: "億ウォン+",

            // System Preview Card
            preview_card_title: "一目で統制する資産管理ハブ",
            preview_card_desc: "入居現況、請求・入金消込、契約満期予告、苦情・施設点検まで、分散していた業務を単一の統合画面でマウス操作だけで完結できます。",
            preview_demo_btn: "エンタープライズデモ画面を見る",

            // Footer Certifications & Floating
            foot_cert_nipa: "クラウドコンピューティングサービス<br/>品質・性能検証獲得",
            foot_cert_kaci: "クラウドサービス確認制認証<br/>韓国クラウド産業協会",
            float_solution: "顧客別カスタムソリューション",
            float_kakao: "Kakao相談",
            float_top: "トップへ"
        },
        zh: {
            lang_label: "简体中文",
            nav_solution: "企业级解决方案",
            nav_features: "核心功能",
            nav_preview: "系统界面",
            nav_clients: "合作客户",
            nav_faq: "常见问题",
            nav_contact: "咨询洽谈",
            btn_basic: "简易版",
            btn_pms: "企业版",
            btn_counsel: "咨询洽谈",

            hero_badge: "获CSAP云安全标准级认证 | 新一代房产金融科技(Prop-FinTech)",
            hero_title: "千亿级房地产资产，<br/>跨越DX、基于<span class=\"tech-gradient-text\">AX智能管理</span>",
            hero_desc: "告别繁琐的Excel手工账目。韩国首屈一指的金融直连型房产科技平台ezREMS，为资产管理公司(AMC)、房地产信托基金(REITs)及专业物业管理(PM)企业提供无懈可击的一站式资产运营解决方案。",
            hero_title_1: "千亿级房地产资产，<br/>跨越DX、基于<span class=\"tech-gradient-text\">AX智能管理</span>",
            hero_desc_1: "告别繁琐的Excel手工账目。韩国首屈一指的金融直连型房产科技平台ezREMS，为资产管理公司(AMC)、房地产信托基金(REITs)及专业物业管理(PM)企业提供无懈可击的一站式资产运营解决方案。",
            hero_pill_1: "01 AX 资产管理",
            hero_title_2: "数百亿租金与物业管理费，<br/>通过<span class=\"tech-gradient-text\">1秒实时自动对账</span>轻松搞定",
            hero_desc_2: "实时对接银行CMS自动转账与虚拟账户，每月数万笔收支流水1秒全自动对账，出现欠费即刻自动触发催缴催告。",
            hero_pill_2: "02 金融收付自动化",
            hero_title_3: "荣获CSAP云安全标准级认证，<br/><span class=\"tech-gradient-text\">金融机构与龙头企业信赖</span>的高可用PMS",
            hero_desc_3: "完美通过韩国50多家头部金融控股集团、知名大型资产管理机构及公共事业部门严苛的安全审计，保障企业级云端基石。",
            hero_pill_3: "03 权威安全认证",
            hero_btn_inquire: "企业版合作咨询",
            hero_btn_demo: "简易版免费体验",
            hero_stat_trans: "实时金融出纳管控中",
            hero_stat_overdue: "欠款自动追踪与催收",
            hero_stat_security: "金融级数据加密保障",

            client_tag: "ENTERPRISE CLIENTS",
            trust_title: "深受韩国50多家领军企业与金融信托基金信赖的ezREMS",
            trust_csap: "CSAP云安全认证",
            trust_kaci: "云平台服务确认制认证",
            trust_nipa: "NIPA质量与性能认证",

            asset_type_residential: "租赁住宅",
            asset_type_office: "写字楼",
            asset_type_retail: "商业零售",
            asset_type_senior: "康养公寓",

            landmark_tag: "MANAGED LANDMARKS",
            landmark_title: "由ezREMS智慧运营的地标资产",
            landmark_subtitle: "代表韩国顶尖水准的超大型商业综合体与高端不动产资产全面运行于ezREMS云平台。",

            bento_tag: "CORE CAPABILITIES",
            bento_title: "专为大型企业打造的6大核心技术",
            bento_subtitle: "将多元化房产业态与复杂的金融财务出纳统一汇聚于智能云端引擎。",

            b1_tag: "FinTech Automation",
            b1_title: "直连金融系统的自动化出纳核算",
            b1_desc: "通过银行CMS自动转账与专属虚拟账户无缝直连，瞬间自动对账数百亿韩元租金及物业费，智能计算逾期滞纳金。",

            b2_tag: "Gov-Tech & E-Doc",
            b2_title: "电子合同与电子文档支持",
            b2_desc: "从官方电子合同直连，到租赁电子协议、电子账单及各类官方凭据出具，全程无纸化数字文档安全流转。",

            b3_tag: "Tax & Billing",
            b3_title: "一键批量开具电子税务发票",
            b3_desc: "与韩国国税厅Hometax系统无缝对接，仅需点击一次即可批量自动传输数千张电子税务发票与现金收据。",

            b4_tag: "AI Intelligence",
            b4_title: "基于AI的楼宇价值提升(Value-Up)看板",
            b4_desc: "提供空置率预测、合理租金AI模拟演算及租约到期智能预警，全面提高资产运营收益率与市场价值。",

            b5_tag: "Enterprise ERP & API",
            b5_title: "提供API接口（空置·合同·账单等）及ERP集成",
            b5_desc: "提供标准化REST API实时直连空置房源、租约合同及出纳账单数据，与SAP等主流企业级ERP全自动双向同步。",

            b6_tag: "Bank-Grade Security",
            b6_title: "CSAP金融级云安全保障体系",
            b6_desc: "获得韩国网络安全振兴院(KISA) CSAP标准级认证，满足金融机构及政府部门严苛的安全审计要求。",

            persona_tag: "TAILORED SOLUTIONS",
            persona_title: "按业务职能定制的专属解决方案",
            persona_subtitle: "针对企业各管理层级与决策部门量身定制的高效工作流。",
            tab_amc: "信托基金 · AMC · 业主",
            tab_pm: "物业资产管理 · PM",
            tab_fm: "设施工程管理 · FM",

            amc_h3: "阻断欠款漏洞，实现资产价值最大化",
            amc_p: "通过欠费自动预警与法律程序关联，将坏账率降至接近0%。通过实时动态看板直观呈现空置率、收益率与支出，一键生成投资者与业主报告。",
            amc_feat1: "滞纳金自动核算与即时催缴",
            amc_feat2: "一键生成月度业主结算明细报告",
            amc_feat3: "全周期资产投资组合估值分析",

            pm_h3: "告别Excel地狱：从收缴到对账全自动化",
            pm_p: "每月成百上千行繁重的Excel手工比对与开票全面由系统自动代劳。通过无纸化电子签约，节省80%以上的行政事务处理时间。",
            pm_feat1: "银行自动扣款与虚拟账户实时核销",
            pm_feat2: "国土交通部官方认可的非接触式电子签约",
            pm_feat3: "增值税及财务申报数据一键汇总",

            fm_h3: "设施巡检与安全工程管理的全面数字化",
            fm_p: "告别手工纸质登记本，通过移动端全面执行现场设施巡检，合规存档安全生产管理日志。实时同步租户报修投诉处理进度。",
            fm_feat1: "移动端巡检打卡与设备故障即时上报",
            fm_feat2: "法定安全生产点检日记云端永久归档",
            fm_feat3: "租户专属移动端APP(ezREMS Connect)联动",

            metric_clients: "合作企业客户",
            metric_units: "全国在管物业套数",
            metric_billing: "月度账单经办规模",
            metric_recovery: "欠款自动清缴率",

            preview_tag: "SYSTEM PREVIEW",
            preview_title: "专为行业专家打造的直观综合控制台",
            preview_subtitle: "亲身体验以用户为中心精心设计的数据看板，复杂资产状况一览无余。",

            faq_tag: "FAQ",
            faq_title: "常见问题解答",
            faq_subtitle: "关于ezREMS引入与实施的常见咨询。",
            faq_q1: "申请使用ezREMS后，到实际投入使用需要多长时间？",
            faq_a1: "ezREMS是基于云端的SaaS平台服务，只需完成基础数据配置即可立即启用。通常在提交申请后1周内即可正式投入使用。",
            faq_q2: "ezREMS支持针对企业的定制化专有部署吗？",
            faq_a2: "KT、乐天建设、乐天物产、SK D&D、尤美建设、Parc1开发、Likehome等多家大型企业均基于本系统完成了定制化部署。我们支持根据企业具体业务环境进行专属构建，构建周期通常约为6个月。",
            faq_q3: "ezREMS是否适用于写字楼、住宅等多元化不动产管理？",
            faq_a3: "是的。除按月收取租金的居住型物业外，还完全适用于按季度或半年度计费的写字楼、中小型商务楼宇及大型购物中心等商业不动产。",
            faq_q4: "是否提供ezREMS相关操作手册及专业培训？",
            faq_a4: "除提供用户操作手册和初始数据配置支持外，我们还会单独开展针对业务负责人的专业培训。日常使用中亦可通过业务支持专线热线与技术团队实时沟通解决问询及需求。",
            faq_q5: "是否支持配套接入租户便民服务平台？",
            faq_a5: "ezREMS向企业提供合同、账单、收款等完整的租务API接口，支持根据企业需求提供个性化租户服务。众多合作伙伴均在调用ezREMS API运营其专属租户服务平台。",
            faq_q6: "系统支持物业管理费的计费与收取吗？",
            faq_a6: "支持。通过ezREMS可实现每月物业管理费的全自动账单生成与出纳。针对写字楼等商业物业的特殊合同条款，还支持分拆或合并开票。",
            faq_q7: "能否将现有的Excel数据导入系统？",
            faq_a7: "完全可以。我们的专业数据团队会将您现有的租约信息、租户资料及缴费历史批量迁移至标准化数据库中，确保平稳过渡。",
            faq_q8: "金融机构或政府公共机构可以使用吗？",
            faq_a8: "ezREMS已获得KISA CSAP云安全标准级认证，顺利通过了各大金融控股集团及公共机构的严谨安全审查，值得托付。",

            cta_badge: "START YOUR DIGITAL TRANSFORMATION",
            cta_title: "房地产资产管理，现已全面进入<br/><span style='color:#EC2527;'>“企业级智能云平台”</span>时代",
            cta_desc: "ezREMS资深业务顾问将在48小时内为您提供量身定制的导入方案及演示测试账户。",
            cta_btn: "申请1对1企业顾问咨询",
            cta_phone: "电话咨询: +82-70-8811-8880",
            cta_email: "电子邮箱: sales@zeons.co.kr",

            foot_privacy: "隐私保护政策",
            foot_terms: "服务条款",
            foot_email_reject: "拒绝未经授权收集邮箱",
            foot_ceo: "代表理事 : 金仁燮",
            foot_tel: "TEL : +82-70-8811-8881",
            foot_fax: "FAX : +82-70-4850-8848",
            foot_email: "EMAIL : support@zeons.co.kr",
            foot_biz: "企业登记号 : 220-88-84510",
            foot_addr: "总部 : 首尔特别市江南区宣陵路93街40",
            foot_copy: "COPYRIGHT © 2018 ZEONS, Inc. All rights reserved.",

            // Modal Notice
            modal_notice_title: "ezREMS 官方公告",
            modal_notice_today: "今天不再显示",

            // 3D Dashboard Mockup Elements
            dash_nav_dashboard: "综合管控看板",
            dash_nav_portfolio: "资产组合管理",
            dash_nav_billing: "虚拟账户·CMS·在线收款",
            dash_nav_econtract: "电子合同·电子文档",
            dash_nav_tax: "批量开具税务发票",
            dash_nav_erp: "财务ERP对接与决算资料支持",
            dash_nav_api: "开放API（房源·合同·账单）",
            dash_nav_security: "多级权限安全审计",
            dash_kpi_billing_title: "月度账单经办规模",
            dash_kpi_billing_trend: "<i class=\"fal fa-arrow-up\"></i> 较上月 +14.8% 正常清缴",
            dash_kpi_units_title: "全国在管物业套数",
            dash_kpi_units_unit: "套",
            dash_kpi_units_trend: "<i class=\"fal fa-check-circle\"></i> 平均空置率 2.1%（极稳定）",
            dash_chart_title: "月度出纳与催收趋势",
            dash_chart_legend: "● 正常清缴  ● 自动清欠",
            dash_alert_title: "异常预警与欠费管控",
            dash_alert_desc: "欠款自动追踪：一旦发生即时发送电子催缴通知（回款率 98.4%）",
            dash_sec_title: "CSAP安全状态：无瑕疵",
            dash_sec_desc: "双重冗余云服务器实现99.99%高可用。金融级加密传输协议全时运行。",

            // Clients
            client_more: "+ 50多家领军企业",

            // Landmarks (18 Managed Landmarks)
            lm_starfield: "星空购物中心 (Starfield)",
            lm_times_square: "时代广场 (Times Square)",
            lm_pamiers_mall: "帕米尔斯广场",
            lm_anyoung_insadong: "安宁仁寺洞",
            lm_alleyway: "巷里 (Alleyway)",
            lm_lake_como: "科莫湖购物中心",
            lm_lacmon: "Lacmon商业街",
            lm_etland: "电子乐园 (ETLAND)",
            lm_lotte_tower: "乐天世界塔",
            lm_parnas: "帕纳斯大厦·购物中心",
            lm_parc1: "Parc.1综合体",
            lm_one_grove: "One Grove大厦",
            lm_josun_hotel: "朝鲜酒店",
            lm_snuh: "首尔大学医院",
            lm_dcamp: "디캠프·FRONT1",
            lm_remarkville: "Remarkville",
            lm_mangrove: "Mangrove",
            lm_vl_lewest: "VL LE WEST",
            lm_baekun_morning: "白云湖·森林之晨",

            // Bento Grid Details
            b1_metric_label: "对账耗时",
            b1_metric_val: "3天耗时 → 1秒即时对账",
            b6_cta_btn: "申请安全白皮书与方案资料",

            // Solutions KPI & Quotes
            amc_kpi_title: "AMC核心运营指标",
            amc_kpi_label: "欠款催缴回收率",
            amc_quote: "“无需人工上门催收，系统依托合规流程精准催缴，零摩擦实现清缴率最大化。”",
            pm_kpi_title: "PM核心运营指标",
            pm_kpi_label: "重复性事务时间",
            pm_quote: "“一键终结每月繁琐的Excel手工对账与开票加班，将精力全力聚焦于高价值资产分析。”",
            fm_kpi_title: "FM核心运营指标",
            fm_kpi_label: "巡检记录云端化",
            fm_quote: "“现场移动端拍照报修，总部与租户即时同步，法定档案云端永久合规留存。”",

            // Metrics unit
            metric_billing_unit: "亿韩元+",

            // System Preview Card
            preview_card_title: "一屏掌控的智能资产管理枢纽",
            preview_card_desc: "从入住现状、账单对账，到租约到期预警、工单与设施巡检，分散的各项业务只需在统一控制台上鼠标轻点即可轻松搞定。",
            preview_demo_btn: "体验企业版演示界面",

            // Footer Certifications & Floating
            foot_cert_nipa: "云计算服务<br/>质量与性能官方认证",
            foot_cert_kaci: "云服务确认制认证<br/>韩国云计算产业协会",
            float_solution: "量身定制方案",
            float_kakao: "Kakao在线咨询",
            float_top: "回到顶部"
        }
    };

    let currentLang = 'ko';

    function setLanguage(lang) {
        if (!translations[lang]) lang = 'ko';
        currentLang = lang;
        localStorage.setItem('ezrems_lang', lang);
        document.documentElement.lang = lang;

        // Update active class on dropdown items
        document.querySelectorAll('.lang-select-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update current language indicator in GNB
        const currentLangEl = document.getElementById('currentLangLabel');
        if (currentLangEl) {
            currentLangEl.textContent = translations[lang].lang_label;
        }

        // Replace all DOM text with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Trigger event for other components if needed
        document.dispatchEvent(new CustomEvent('ezrems_lang_changed', { detail: { lang: lang } }));
    }

    // Initialize on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function () {
        // Check URL parameter first (?lang=en)
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        const savedLang = localStorage.getItem('ezrems_lang');

        const initialLang = urlLang || savedLang || 'ko';
        setLanguage(initialLang);

        // Bind clicks on language selector buttons
        document.querySelectorAll('.lang-select-btn').forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                const selectedLang = this.getAttribute('data-lang');
                setLanguage(selectedLang);
                
                // Close language dropdown if open
                const dropdownMenu = document.querySelector('.lang-dropdown-menu');
                if (dropdownMenu) {
                    dropdownMenu.classList.remove('show');
                }
            });
        });

        // Toggle language dropdown
        const langToggle = document.getElementById('langDropdownToggle');
        if (langToggle) {
            langToggle.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                const menu = document.querySelector('.lang-dropdown-menu');
                if (menu) {
                    menu.classList.toggle('show');
                }
            });

            document.addEventListener('click', function () {
                const menu = document.querySelector('.lang-dropdown-menu');
                if (menu) menu.classList.remove('show');
            });
        }
    });

    // Expose global API
    window.ezremsI18n = {
        setLanguage: setLanguage,
        getCurrentLanguage: () => currentLang,
        t: (key) => (translations[currentLang] && translations[currentLang][key]) || key
    };
})();
