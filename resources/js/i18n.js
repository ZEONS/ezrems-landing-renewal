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
            nav_ax: "AX 혁신 기능",
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

            metric_clients: "관리 자산",
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

            // Dashboard Concept Screens (8 Modules)
            dash_status_active: "정상 운영",
            dash_status_done: "완결",
            dash_status_secure: "안전",

            // 1. Portfolio
            dash_port_kpi1_title: "운용 자산 규모 (AUM)",
            dash_port_kpi1_trend: "<i class=\"fal fa-arrow-up\"></i> 전년 대비 +8.4% 성장",
            dash_port_kpi2_title: "총 운용 복합 부동산",
            dash_port_kpi2_val: "84개 자산",
            dash_port_kpi2_trend: "<i class=\"fal fa-check-circle\"></i> 오피스·물류·리테일·주거",
            dash_port_list_title: "주요 랜드마크 실시간 가동 현황",
            dash_port_row1_name: "백운호수 푸르지오 숲속의아침",
            dash_port_row1_sub: "시니어 레지던스 | 점유율 99.4%",
            dash_port_row2_name: "센터포인트 광화문",
            dash_port_row2_sub: "프라임 오피스 | 점유율 98.8%",
            dash_port_row3_name: "전자랜드 용산 본관",
            dash_port_row3_sub: "복합 리테일 | 점유율 97.5%",
            dash_port_w1_title: "자산 가치평가 및 배당 수익률",
            dash_port_w1_desc: "연간 환산 배당 수익률 6.8% 달성. 리츠 공시 기준 자산 재평가 완료.",
            dash_port_w2_title: "임대차 만기 사전 통제",
            dash_port_w2_desc: "D-60일 이내 만기 14건 사전 갱신 협의 진행 중 (공실 위험 사전 차단)",

            // 2. Billing
            dash_bill_kpi1_title: "실시간 수납 대사 완료율",
            dash_bill_kpi1_trend: "<i class=\"fal fa-check-circle\"></i> 당월 38,420건 중 38,340건 완료",
            dash_bill_kpi2_title: "대사 처리 평균 속도",
            dash_bill_kpi2_val: "0.8초",
            dash_bill_kpi2_trend: "<i class=\"fal fa-bolt\"></i> 금융결제원 펌뱅킹 직결",
            dash_bill_log_title: "실시간 가상계좌 / CMS 수납 스트림",
            dash_bill_log1: "[가상계좌] 102동 1403호 임대료 ₩1,850,000 즉시 대사 완결 (국민은행)",
            dash_bill_log2: "[CMS 자동이체] 센트럴타워 8F 관리비 ₩4,200,000 출금 성공 (신한은행)",
            dash_bill_log3: "[온라인 PG] 상가 A-102호 관리비 ₩890,000 카드 수납 완결",
            dash_bill_w1_title: "연체료 자동 산정 엔진",
            dash_bill_w1_desc: "미납 1건 발생 시 즉시 법정 연체 이율 자동 합산 청구 및 모바일 알림톡 발송",
            dash_bill_w2_title: "다중 계좌 실시간 감시",
            dash_bill_w2_desc: "신한·국민·하나·우리 등 12개 시중은행 펌뱅킹 정상 가동 (오류율 0.00%)",

            // 3. E-Contract
            dash_cntr_kpi1_title: "비대면 전자계약 체결율",
            dash_cntr_kpi1_trend: "<i class=\"fal fa-arrow-up\"></i> 평균 체결 소요시간 4.2시간",
            dash_cntr_kpi2_title: "누적 체결 전자계약 건수",
            dash_cntr_kpi2_val: "28,450건",
            dash_cntr_kpi2_trend: "<i class=\"fal fa-leaf\"></i> 종이·인쇄 비용 100% 절감",
            dash_cntr_pipe_title: "실시간 전자계약 진행 단계",
            dash_cntr_s1_label: "계약서 생성",
            dash_cntr_s2_label: "본인인증 완료",
            dash_cntr_s3_label: "모바일 서명",
            dash_cntr_s4_label: "국토부 등록",
            dash_cntr_w1_title: "타임스탬프 TSA 위변조 방지",
            dash_cntr_w1_desc: "공인인증기관 타임스탬프 토큰 발급 및 법적 효력 100% 보장",
            dash_cntr_w2_title: "증명서 및 고지서 발급",
            dash_cntr_w2_desc: "입주확인서, 납부영수증, 거주증명서 모바일 비대면 1초 즉시 발급",

            // 4. Tax
            dash_tax_kpi1_title: "당월 전자세금계산서 발행",
            dash_tax_kpi1_val: "12,850건",
            dash_tax_kpi1_trend: "<i class=\"fal fa-check-circle\"></i> 단 1클릭 일괄 전송 완료",
            dash_tax_kpi2_title: "국세청 홈택스 전송 성공률",
            dash_tax_kpi2_trend: "<i class=\"fal fa-shield-check\"></i> 전송 오류 제로 (0건)",
            dash_tax_batch_title: "국세청 홈택스(Hometax) 대량 전송 현황",
            dash_tax_bar1_label: "임대료 세금계산서 (8,420건)",
            dash_tax_bar2_label: "공용 관리비 세금계산서 (4,430건)",
            dash_tax_w1_title: "현금영수증 실시간 자동 발행",
            dash_tax_w1_desc: "자진발급 및 소득공제용 현금영수증 국세청 동시 통보 및 고객 알림",
            dash_tax_w2_title: "부가세 매입매출 자동 집계",
            dash_tax_w2_desc: "분기별 부가세 신고용 합계표 엑셀/PDF 원클릭 다운로드 지원",

            // 5. ERP
            dash_erp_kpi1_title: "월 결산 마감 소요 기간",
            dash_erp_kpi1_val: "0.5일",
            dash_erp_kpi1_trend: "<i class=\"fal fa-bolt\"></i> 기존 7영업일에서 93% 단축",
            dash_erp_kpi2_title: "ERP 전표 자동 생성율",
            dash_erp_kpi2_trend: "<i class=\"fal fa-check-circle\"></i> 수기 입력 오류 0건 실현",
            dash_erp_flow_title: "SAP / 더존 / 영림원 ERP 인터페이스 매핑",
            dash_erp_row1: "임대수익 발생 ➔ [ERP 수익 계정 전표] 자동 기표 완료",
            dash_erp_row2: "관리비 실비 정산 ➔ [ERP 비용/선급금 정산] 자동 분개 완료",
            dash_erp_row3: "보증금 입출금 ➔ [ERP 예수보증금 계정] 자동 정합성 검증 완료",
            dash_erp_w1_title: "결산용 감사 증빙 자동 패키징",
            dash_erp_w1_desc: "외부 회계감사용 임대차 원장 및 수지명세서 완벽 패키징 지원",
            dash_erp_w2_title: "다중 법인/SPC 통합 결산",
            dash_erp_w2_desc: "리츠 및 PFV 산하 복수 시행사·자회사 별도 결산 완벽 대응",

            // 6. API
            dash_api_kpi1_title: "일일 RESTful API 호출량",
            dash_api_kpi1_val: "1,420,800 req",
            dash_api_kpi1_trend: "<i class=\"fal fa-bolt\"></i> 평균 응답 속도 16ms 초고속",
            dash_api_kpi2_title: "연동 엔터프라이즈 시스템",
            dash_api_kpi2_val: "32개 시스템",
            dash_api_kpi2_trend: "<i class=\"fal fa-plug\"></i> 그룹웨어, 사내포털, 모바일 앱",
            dash_api_end_title: "표준 REST API 인터페이스 상태",
            dash_api_w1_title: "OAuth 2.0 / JWT 토큰 보안",
            dash_api_w1_desc: "금융기관급 기밀 토큰 만료 관리 및 IP 화이트리스트 접근 통제",
            dash_api_w2_title: "웹훅(Webhook) 실시간 이벤트",
            dash_api_w2_desc: "입금 완료, 계약 체결 시 고객사 시스템으로 즉시 자동 Push",

            // 7. Security
            dash_sec_kpi1_title: "CSAP 클라우드 표준 보안",
            dash_sec_kpi1_val: "STANDARD",
            dash_sec_kpi1_trend: "<i class=\"fal fa-shield-check\"></i> 국가 공인 보안 인증 획득",
            dash_sec_kpi2_title: "비인가 접근 차단 이력",
            dash_sec_kpi2_val: "0건 침해",
            dash_sec_kpi2_trend: "<i class=\"fal fa-lock\"></i> 금융보안원 가이드라인 100% 준수",
            dash_sec_audit_title: "실시간 관리자 접속 및 데이터 조작 감사 로그",
            dash_sec_log1: "[인증] 자산운용 본부장 계정 2차 OTP 로그인 성공 (IP: 10.20.*.*)",
            dash_sec_log2: "[권한] 수납 담당자 권한 (임대료 수납 전표 승인 완료)",
            dash_sec_log3: "[보안] 비정상 다중 접속 시도 사전 차단 및 세션 강제 종료",
            dash_sec_w1_title: "AES-256 데이터 암호화",
            dash_sec_w1_desc: "주민번호, 계좌번호 등 고객 개인정보 완전 암호화 저장 및 전송",
            dash_sec_w2_title: "역할 기반 접근 제어(RBAC)",
            dash_sec_w2_desc: "오너, PM, 회계담당, 현장관리자 4단계 권한 철저 분리",

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
            b5_metric_label: "표준 Open API & 시스템 연계",
            b5_metric_val: "SAP · 더존 ERP 실시간 양방향 연동",
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
            nav_ax: "AX Features",
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

            metric_clients: "Managed Assets",
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

            // Dashboard Concept Screens (8 Modules)
            dash_status_active: "Active",
            dash_status_done: "Done",
            dash_status_secure: "Secure",

            // 1. Portfolio
            dash_port_kpi1_title: "Assets Under Management (AUM)",
            dash_port_kpi1_trend: "<i class=\"fal fa-arrow-up\"></i> +8.4% YoY Growth",
            dash_port_kpi2_title: "Total Managed Properties",
            dash_port_kpi2_val: "84 Assets",
            dash_port_kpi2_trend: "<i class=\"fal fa-check-circle\"></i> Office, Retail, Senior, Res.",
            dash_port_list_title: "Landmark Real-Time Operational Status",
            dash_port_row1_name: "Baegun Lake Prugio Morning Forest",
            dash_port_row1_sub: "Senior Residence | Occupancy 99.4%",
            dash_port_row2_name: "Centerpoint Gwanghwamun",
            dash_port_row2_sub: "Prime Office | Occupancy 98.8%",
            dash_port_row3_name: "ETLAND Yongsan Main",
            dash_port_row3_sub: "Complex Retail | Occupancy 97.5%",
            dash_port_w1_title: "Valuation & Dividend Yield",
            dash_port_w1_desc: "Annualized dividend yield 6.8% achieved. REIT statutory reappraisal completed.",
            dash_port_w2_title: "Lease Expiry Control",
            dash_port_w2_desc: "14 leases expiring within D-60 actively in renewal negotiations (Preemptive vacancy mitigation)",

            // 2. Billing
            dash_bill_kpi1_title: "Reconciliation Rate",
            dash_bill_kpi1_trend: "<i class=\"fal fa-check-circle\"></i> 38,340 of 38,420 completed this month",
            dash_bill_kpi2_title: "Avg. Match Speed",
            dash_bill_kpi2_val: "0.8s",
            dash_bill_kpi2_trend: "<i class=\"fal fa-bolt\"></i> Bank direct firm-banking link",
            dash_bill_log_title: "Live Virtual Account & CMS Feed",
            dash_bill_log1: "[VA] Unit 1403 Rent ₩1,850,000 auto-reconciled (KB Bank)",
            dash_bill_log2: "[CMS Auto-Debit] Central Tower 8F CAM ₩4,200,000 debit cleared (Shinhan)",
            dash_bill_log3: "[Online PG] Retail A-102 CAM ₩890,000 card payment settled",
            dash_bill_w1_title: "Automated Late Fee Engine",
            dash_bill_w1_desc: "Statutory overdue interest computed automatically and notice sent upon single default",
            dash_bill_w2_title: "Multi-Bank Real-Time Monitoring",
            dash_bill_w2_desc: "12 major commercial banks direct firm-banking operational (0.00% error rate)",

            // 3. E-Contract
            dash_cntr_kpi1_title: "Digital Contract Adoption",
            dash_cntr_kpi1_trend: "<i class=\"fal fa-arrow-up\"></i> Avg. execution time 4.2 hours",
            dash_cntr_kpi2_title: "Cumulative E-Contracts",
            dash_cntr_kpi2_val: "28,450 docs",
            dash_cntr_kpi2_trend: "<i class=\"fal fa-leaf\"></i> 100% paperless administration",
            dash_cntr_pipe_title: "Real-Time Contract Pipeline",
            dash_cntr_s1_label: "Drafting",
            dash_cntr_s2_label: "ID Verified",
            dash_cntr_s3_label: "Signed",
            dash_cntr_s4_label: "Gov Registry",
            dash_cntr_w1_title: "TSA Time-Stamp Certification",
            dash_cntr_w1_desc: "Certified time-stamp authority tokens issued for full statutory legal validity",
            dash_cntr_w2_title: "Digital Certificate Issuance",
            dash_cntr_w2_desc: "Move-in confirmation, payment receipt, occupancy certificates issued in 1 second",

            // 4. Tax
            dash_tax_kpi1_title: "Monthly Tax Invoices",
            dash_tax_kpi1_val: "12,850 docs",
            dash_tax_kpi1_trend: "<i class=\"fal fa-check-circle\"></i> Dispatched in 1-Click bulk",
            dash_tax_kpi2_title: "National Tax Service Delivery",
            dash_tax_kpi2_trend: "<i class=\"fal fa-shield-check\"></i> Zero transmission errors (0 errors)",
            dash_tax_batch_title: "Hometax Direct Batch Transmission",
            dash_tax_bar1_label: "Rent Tax Invoices (8,420 docs)",
            dash_tax_bar2_label: "CAM Tax Invoices (4,430 docs)",
            dash_tax_w1_title: "Real-Time Cash Receipt Automation",
            dash_tax_w1_desc: "Voluntary & deduction cash receipts simultaneously transmitted to tax authority",
            dash_tax_w2_title: "VAT Purchase & Sale Consolidation",
            dash_tax_w2_desc: "Quarterly VAT reporting schedules available for 1-click Excel/PDF export",

            // 5. ERP
            dash_erp_kpi1_title: "Monthly Settlement Closing",
            dash_erp_kpi1_val: "0.5 Days",
            dash_erp_kpi1_trend: "<i class=\"fal fa-bolt\"></i> 93% faster than traditional 7 days",
            dash_erp_kpi2_title: "ERP Voucher Auto-Generation",
            dash_erp_kpi2_trend: "<i class=\"fal fa-check-circle\"></i> Zero manual input discrepancy",
            dash_erp_flow_title: "SAP / Douzone / YoungLimWon ERP Mapping",
            dash_erp_row1: "Rental revenue recognized ➔ [ERP Revenue Voucher] auto-posted",
            dash_erp_row2: "CAM actual reconciliation ➔ [ERP Expense Clearing] auto-journalized",
            dash_erp_row3: "Deposit in/outflows ➔ [ERP Security Deposit] verified",
            dash_erp_w1_title: "Audit Trail Auto-Packaging",
            dash_erp_w1_desc: "Lease ledgers and income statements fully formatted for external auditor compliance",
            dash_erp_w2_title: "Multi-Entity / SPC Consolidation",
            dash_erp_w2_desc: "Separate ledger accounting fully compliant for REITs and PFV subsidiary SPCs",

            // 6. API
            dash_api_kpi1_title: "Daily RESTful API Volume",
            dash_api_kpi1_val: "1,420,800 req",
            dash_api_kpi1_trend: "<i class=\"fal fa-bolt\"></i> 16ms ultra-fast average response",
            dash_api_kpi2_title: "Connected Enterprise Systems",
            dash_api_kpi2_val: "32 Systems",
            dash_api_kpi2_trend: "<i class=\"fal fa-plug\"></i> Groupware, internal portals, apps",
            dash_api_end_title: "Standard REST API Health Status",
            dash_api_w1_title: "OAuth 2.0 / JWT Security",
            dash_api_w1_desc: "Financial-tier token lifecycle management & IP whitelist access control",
            dash_api_w2_title: "Real-Time Webhook Push",
            dash_api_w2_desc: "Instant automated webhook push to client systems on payment & contract events",

            // 7. Security
            dash_sec_kpi1_title: "CSAP Cloud Security Standard",
            dash_sec_kpi1_val: "STANDARD",
            dash_sec_kpi1_trend: "<i class=\"fal fa-shield-check\"></i> Certified by national authorities",
            dash_sec_kpi2_title: "Unauthorized Access Incidents",
            dash_sec_kpi2_val: "0 Breaches",
            dash_sec_kpi2_trend: "<i class=\"fal fa-lock\"></i> 100% compliant with financial guidelines",
            dash_sec_audit_title: "Live Operator Access & Data Modification Log",
            dash_sec_log1: "[Auth] Asset Management Director 2FA OTP login success (IP: 10.20.*.*)",
            dash_sec_log2: "[Permission] Billing manager voucher approval confirmed",
            dash_sec_log3: "[Security] Abnormal concurrent session intercepted and terminated",
            dash_sec_w1_title: "AES-256 Data Encryption",
            dash_sec_w1_desc: "Resident IDs, bank accounts, and personal data fully encrypted at rest & transit",
            dash_sec_w2_title: "Role-Based Access Control (RBAC)",
            dash_sec_w2_desc: "Strict 4-tier separation: Owner, PM, Accounting, and On-Site Facility Manager",

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
            b5_metric_label: "Standard Open API & Integration",
            b5_metric_val: "Real-time Bi-directional ERP Sync",
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
            nav_ax: "AX機能",
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

            metric_clients: "管理資産",
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

            // Dashboard Concept Screens (8 Modules)
            dash_status_active: "正常稼働",
            dash_status_done: "完了",
            dash_status_secure: "安全",

            // 1. Portfolio
            dash_port_kpi1_title: "運用資産規模 (AUM)",
            dash_port_kpi1_trend: "<i class=\"fal fa-arrow-up\"></i> 前年比 +8.4% 成長",
            dash_port_kpi2_title: "総運用複合不動産",
            dash_port_kpi2_val: "84資産",
            dash_port_kpi2_trend: "<i class=\"fal fa-check-circle\"></i> オフィス・物流・商業・住宅",
            dash_port_list_title: "主要ランドマークのリアルタイム稼働状況",
            dash_port_row1_name: "白雲湖プルジオ 森の朝",
            dash_port_row1_sub: "シニアレジデンス | 入居率 99.4%",
            dash_port_row2_name: "センターポイント光化門",
            dash_port_row2_sub: "プライムオフィス | 入居率 98.8%",
            dash_port_row3_name: "電子ランド龍山 本館",
            dash_port_row3_sub: "複合リテール | 入居率 97.5%",
            dash_port_w1_title: "資産評価及び配当利回り",
            dash_port_w1_desc: "年換算配当利回り6.8%達成。REIT法定開示基準の資産再評価完了。",
            dash_port_w2_title: "賃貸借満期の事前統制",
            dash_port_w2_desc: "D-60日以内満期の14件について事前更新交渉中（空室リスク未然防止）",

            // 2. Billing
            dash_bill_kpi1_title: "リアルタイム消込完了率",
            dash_bill_kpi1_trend: "<i class=\"fal fa-check-circle\"></i> 今月 38,420件中 38,340件完了",
            dash_bill_kpi2_title: "消込平均処理速度",
            dash_bill_kpi2_val: "0.8秒",
            dash_bill_kpi2_trend: "<i class=\"fal fa-bolt\"></i> 金融決済院ファームバンキング直結",
            dash_bill_log_title: "リアルタイム仮想口座 / 口座振替出納ストリーム",
            dash_bill_log1: "[仮想口座] 102棟1403号 賃料 ₩1,850,000 即時消込完結（KB国民銀行）",
            dash_bill_log2: "[口座振替] セントラルタワー8F 管理費 ₩4,200,000 引落成功（新韓銀行）",
            dash_bill_log3: "[オンラインPG] 商業棟A-102号 管理費 ₩890,000 カード決済完結",
            dash_bill_w1_title: "延滞利息自動算定エンジン",
            dash_bill_w1_desc: "未払1件発生時に法定延滞利息を自動合算請求し、モバイル通知を即時送信",
            dash_bill_w2_title: "マルチバンクリアルタイム監視",
            dash_bill_w2_desc: "新韓・国民・ハナ・ウリ等主要12行のファームバンキング正常稼働（エラー率0.00%）",

            // 3. E-Contract
            dash_cntr_kpi1_title: "非対面電子契約締結率",
            dash_cntr_kpi1_trend: "<i class=\"fal fa-arrow-up\"></i> 平均締結所要時間 4.2時間",
            dash_cntr_kpi2_title: "累計電子契約締結数",
            dash_cntr_kpi2_val: "28,450件",
            dash_cntr_kpi2_trend: "<i class=\"fal fa-leaf\"></i> 紙・印刷コストを100%削減",
            dash_cntr_pipe_title: "リアルタイム電子契約進捗フェーズ",
            dash_cntr_s1_label: "契約書作成",
            dash_cntr_s2_label: "本人認証済",
            dash_cntr_s3_label: "電子署名",
            dash_cntr_s4_label: "国土交通部登録",
            dash_cntr_w1_title: "TSAタイムスタンプ改ざん防止",
            dash_cntr_w1_desc: "公認認証機関のタイムスタンプトークン発行による法的効力の完全保証",
            dash_cntr_w2_title: "証明書および通知書即時発行",
            dash_cntr_w2_desc: "入居確認書、納付領収証、居住証明書をモバイル非対面で1秒即時発行",

            // 4. Tax
            dash_tax_kpi1_title: "当月電子税金計算書発行",
            dash_tax_kpi1_val: "12,850件",
            dash_tax_kpi1_trend: "<i class=\"fal fa-check-circle\"></i> ワンクリック一括送信完了",
            dash_tax_kpi2_title: "国税庁ホームタックス送信成功率",
            dash_tax_kpi2_trend: "<i class=\"fal fa-shield-check\"></i> 送信エラーゼロ（0件）",
            dash_tax_batch_title: "国税庁ホームタックス(Hometax)大量送信現況",
            dash_tax_bar1_label: "賃料税金計算書 (8,420件)",
            dash_tax_bar2_label: "共益費計算書 (4,430件)",
            dash_tax_w1_title: "現金領収証リアルタイム自動発行",
            dash_tax_w1_desc: "自発的発行および控除用現金領収証の国税庁同時通知と顧客自動案内",
            dash_tax_w2_title: "消費税・仕入売上自動集計",
            dash_tax_w2_desc: "四半期別申告用合計表のエクセル/PDFワンクリック出力に対応",

            // 5. ERP
            dash_erp_kpi1_title: "月次決算締め所要期間",
            dash_erp_kpi1_val: "0.5日",
            dash_erp_kpi1_trend: "<i class=\"fal fa-bolt\"></i> 従来の7営業日から93%短縮",
            dash_erp_kpi2_title: "ERP伝票自動生成率",
            dash_erp_kpi2_trend: "<i class=\"fal fa-check-circle\"></i> 手作業入力ミス0件を実現",
            dash_erp_flow_title: "SAP / Douzone / YoungLimWon ERP連携マッピング",
            dash_erp_row1: "賃貸収益の発生 ➔ [ERP収益計上伝票] 自動起票完了",
            dash_erp_row2: "管理費実費精算 ➔ [ERP費用・仮払金精算] 自動仕訳完了",
            dash_erp_row3: "敷金・保証金出納 ➔ [ERP預り保証金勘定] 自動整合性検証完了",
            dash_erp_w1_title: "決算監査用証憑自動パッケージング",
            dash_erp_w1_desc: "外部公認会計士監査用の賃貸借元帳および収支明細書を完全支援",
            dash_erp_w2_title: "複数法人・SPC統合決算",
            dash_erp_w2_desc: "REITおよびPFV傘下の複数施行社・子会社別決算に完全対応",

            // 6. API
            dash_api_kpi1_title: "日次RESTful APIコール数",
            dash_api_kpi1_val: "1,420,800 req",
            dash_api_kpi1_trend: "<i class=\"fal fa-bolt\"></i> 平均応答速度16msの超高速処理",
            dash_api_kpi2_title: "連携中エンタープライズシステム",
            dash_api_kpi2_val: "32システム",
            dash_api_kpi2_trend: "<i class=\"fal fa-plug\"></i> グループウェア・社内ポータル・アプリ",
            dash_api_end_title: "標準REST APIインターフェース稼働状況",
            dash_api_w1_title: "OAuth 2.0 / JWTトークンセキュリティ",
            dash_api_w1_desc: "金融機関級トークン有効期限管理およびIPホワイトリストアクセス制御",
            dash_api_w2_title: "Webhookリアルタイムイベント",
            dash_api_w2_desc: "入金完了・契約締結時に顧客先基幹システムへ即座に自動Push配信",

            // 7. Security
            dash_sec_kpi1_title: "CSAPクラウド標準セキュリティ",
            dash_sec_kpi1_val: "STANDARD",
            dash_sec_kpi1_trend: "<i class=\"fal fa-shield-check\"></i> 国家公認セキュリティ認証獲得",
            dash_sec_kpi2_title: "不正アクセス遮断履歴",
            dash_sec_kpi2_val: "0件侵害",
            dash_sec_kpi2_trend: "<i class=\"fal fa-lock\"></i> 金融保安院ガイドライン100%準拠",
            dash_sec_audit_title: "管理者アクセスおよびデータ操作監査ログ",
            dash_sec_log1: "[認証] 資産運用本部長アカウント 2次OTPログイン成功 (IP: 10.20.*.*)",
            dash_sec_log2: "[権限] 出納担当者権限（賃料入金伝票の承認完了）",
            dash_sec_log3: "[セキュリティ] 異常重複セッション試行を事前遮断・強制終了",
            dash_sec_w1_title: "AES-256データ暗号化",
            dash_sec_w1_desc: "マイナンバー・口座番号等のお客様個人情報を完全暗号化して保存",
            dash_sec_w2_title: "役割ベースアクセス制御 (RBAC)",
            dash_sec_w2_desc: "オーナー・PM・会計担当・現場管理者 4段階の権限厳格分離",

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
            b5_metric_label: "標準Open API & システム連携",
            b5_metric_val: "SAP·企業ERPリアルタイム双方向同期",
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
            nav_ax: "AX功能",
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

            metric_clients: "管理资产",
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

            // Dashboard Concept Screens (8 Modules)
            dash_status_active: "正常运行",
            dash_status_done: "完成",
            dash_status_secure: "安全",

            // 1. Portfolio
            dash_port_kpi1_title: "在管资产规模 (AUM)",
            dash_port_kpi1_trend: "<i class=\"fal fa-arrow-up\"></i> 同比增长 +8.4%",
            dash_port_kpi2_title: "在管复合型物业总数",
            dash_port_kpi2_val: "84个项目",
            dash_port_kpi2_trend: "<i class=\"fal fa-check-circle\"></i> 写字楼·物流·商业·住宅",
            dash_port_list_title: "核心地标资产实时运营状况",
            dash_port_row1_name: "白云湖普乐吉奥 清晨之森",
            dash_port_row1_sub: "康养公寓 | 入住率 99.4%",
            dash_port_row2_name: "光化门中心点大厦",
            dash_port_row2_sub: "甲级写字楼 | 入驻率 98.8%",
            dash_port_row3_name: "电子乐园龙山本馆",
            dash_port_row3_sub: "复合零售商业 | 入驻率 97.5%",
            dash_port_w1_title: "资产估值与分红收益率",
            dash_port_w1_desc: "年化分红收益率达6.8%，完成REIT法定信息披露资产重估。",
            dash_port_w2_title: "租约到期提前管控",
            dash_port_w2_desc: "D-60天内即将到期的14份租约正推进提前续签谈判（防范空置风险）",

            // 2. Billing
            dash_bill_kpi1_title: "实时出纳对账达成率",
            dash_bill_kpi1_trend: "<i class=\"fal fa-check-circle\"></i> 本月 38,420笔中 38,340笔已销账",
            dash_bill_kpi2_title: "对账平均耗时",
            dash_bill_kpi2_val: "0.8秒",
            dash_bill_kpi2_trend: "<i class=\"fal fa-bolt\"></i> 直连金融结算院银企互联",
            dash_bill_log_title: "实时虚拟账户 / CMS代扣数据流",
            dash_bill_log1: "[虚拟账户] 102栋1403室 租金 ₩1,850,000 即时对账销账 (国民银行)",
            dash_bill_log2: "[CMS自动扣款] 中心大厦8F 物业费 ₩4,200,000 成功划扣 (新韩银行)",
            dash_bill_log3: "[在线网关] 商业街A-102 物业费 ₩890,000 刷卡支付结清",
            dash_bill_w1_title: "滞纳金自动清算引擎",
            dash_bill_w1_desc: "一旦发生1笔欠费即刻自动按法定利率计收并推送移动催缴通知",
            dash_bill_w2_title: "多银行直连全时监控",
            dash_bill_w2_desc: "直连新韩、国民、韩亚、友利等12家主流银行银企直联系统（错误率 0.00%）",

            // 3. E-Contract
            dash_cntr_kpi1_title: "非接触式电子合同签约率",
            dash_cntr_kpi1_trend: "<i class=\"fal fa-arrow-up\"></i> 平均签约耗时 4.2小时",
            dash_cntr_kpi2_title: "累计签署电子合同数",
            dash_cntr_kpi2_val: "28,450份",
            dash_cntr_kpi2_trend: "<i class=\"fal fa-leaf\"></i> 100%节省纸质打印与人工邮寄成本",
            dash_cntr_pipe_title: "实时电子合同签署流程管线",
            dash_cntr_s1_label: "合同拟定",
            dash_cntr_s2_label: "实名认证",
            dash_cntr_s3_label: "移动签署",
            dash_cntr_s4_label: "国土部备案",
            dash_cntr_w1_title: "TSA时间戳防篡改认证",
            dash_cntr_w1_desc: "由权威认证机构签发时间戳Token，具备完全法定证据效力",
            dash_cntr_w2_title: "证明书与缴费通知即时开具",
            dash_cntr_w2_desc: "入住确认书、交费收据、居住证明通过移动端1秒线上开具",

            // 4. Tax
            dash_tax_kpi1_title: "当月电子税务发票开具",
            dash_tax_kpi1_val: "12,850份",
            dash_tax_kpi1_trend: "<i class=\"fal fa-check-circle\"></i> 一键批量上传国税系统",
            dash_tax_kpi2_title: "国税厅Hometax传输成功率",
            dash_tax_kpi2_trend: "<i class=\"fal fa-shield-check\"></i> 传输零差错 (0件)",
            dash_tax_batch_title: "国税厅Hometax直连批量开票状态",
            dash_tax_bar1_label: "租金发票 (8,420份)",
            dash_tax_bar2_label: "公用物业费发票 (4,430份)",
            dash_tax_w1_title: "现金发票实时自动开具",
            dash_tax_w1_desc: "自发开具与个税抵扣现金发票同步报送国税厅并触达租户",
            dash_tax_w2_title: "增值税进销项全自动汇总",
            dash_tax_w2_desc: "季度增值税纳税申报汇总表支持一键导出Excel/PDF",

            // 5. ERP
            dash_erp_kpi1_title: "月度结账关账所需周期",
            dash_erp_kpi1_val: "0.5天",
            dash_erp_kpi1_trend: "<i class=\"fal fa-bolt\"></i> 较传统7个工作日缩短93%",
            dash_erp_kpi2_title: "ERP凭证自动生成率",
            dash_erp_kpi2_trend: "<i class=\"fal fa-check-circle\"></i> 实现手工录入零误差",
            dash_erp_flow_title: "SAP / 兜全(Douzone) / 永林院 ERP接口映射",
            dash_erp_row1: "租金收入确认 ➔ [ERP收入科目凭证] 自动记账",
            dash_erp_row2: "物业费实耗分摊 ➔ [ERP成本/预付款分摊] 自动转账",
            dash_erp_row3: "保证金收付 ➔ [ERP押金应付款科目] 自动核对一致",
            dash_erp_w1_title: "决算审计底稿自动打包",
            dash_erp_w1_desc: "一键生成供外部会计师事务所审计使用的租赁总账与收支明细",
            dash_erp_w2_title: "多法人/SPC合并决算",
            dash_erp_w2_desc: "全面兼容REITs及PFV旗下多家开发主体与独立SPC财务核算",

            // 6. API
            dash_api_kpi1_title: "每日RESTful API调用量",
            dash_api_kpi1_val: "1,420,800次",
            dash_api_kpi1_trend: "<i class=\"fal fa-bolt\"></i> 平均响应时间仅16ms",
            dash_api_kpi2_title: "已对接企业级内部系统",
            dash_api_kpi2_val: "32套系统",
            dash_api_kpi2_trend: "<i class=\"fal fa-plug\"></i> 协同办公OA、内部门户、移动App",
            dash_api_end_title: "标准REST API接口健康度监控",
            dash_api_w1_title: "OAuth 2.0 / JWT安全鉴权",
            dash_api_w1_desc: "金融级高保密令牌生命周期管理与IP白名单严格访问限制",
            dash_api_w2_title: "Webhook实时业务事件推送",
            dash_api_w2_desc: "入账对账完成或租约签署时即刻自动向客户业务系统推送事件",

            // 7. Security
            dash_sec_kpi1_title: "CSAP云安全认证标准",
            dash_sec_kpi1_val: "STANDARD",
            dash_sec_kpi1_trend: "<i class=\"fal fa-shield-check\"></i> 荣获国家法定权威云安全认证",
            dash_sec_kpi2_title: "非法侵入拦截记录",
            dash_sec_kpi2_val: "0起侵害",
            dash_sec_kpi2_trend: "<i class=\"fal fa-lock\"></i> 100%严格遵守金融监督机构安全规范",
            dash_sec_audit_title: "管理员登录与关键数据变更实时审计日志",
            dash_sec_log1: "[认证] 资产管理本部总监账号 二次OTP认证登录成功 (IP: 10.20.*.*)",
            dash_sec_log2: "[权限] 出纳主管权限 (租金到账记账凭证复核通过)",
            dash_sec_log3: "[安全] 侦测到异常重复并发会话，已自动拦截并强制注销",
            dash_sec_w1_title: "AES-256全量数据加密",
            dash_sec_w1_desc: "身份证号、银行账号等租户敏感隐私全面实施国密级静态与传输加密",
            dash_sec_w2_title: "基于角色的权限访问控制(RBAC)",
            dash_sec_w2_desc: "业主方、物业PM、财务专员、现场工程人员4级权限严格隔离",

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
            b5_metric_label: "标准Open API与系统集成",
            b5_metric_val: "SAP等企业级ERP实时双向同步",
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

    // =========================================================================
    // [설정] 다국어 자동 치환 일시 정지 스위치
    // 사용자가 index.html을 직접 수정하는 동안 브라우저에서 원래 텍스트가 덮어씌워지지 않도록 정지합니다.
    // 최종 컨텐츠 수정 완료 후 다국어를 다시 켜려면 아래 값을 false로 변경하십시오.
    // =========================================================================
    const IS_I18N_PAUSED = true;

    let currentLang = 'ko';

    function setLanguage(lang) {
        if (IS_I18N_PAUSED) {
            console.log('[i18n] 다국어 엔진이 일시 정지(PAUSED) 상태입니다. (HTML 직접 수정 모드)');
            return;
        }

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
        if (IS_I18N_PAUSED) {
            return;
        }
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
