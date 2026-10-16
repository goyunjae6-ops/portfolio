import work1Mockup from "../assets/images/work1-desktop-base.png";
import work1Screen from "../assets/images/work1-screen.png";
import work2Mockup from "../assets/images/work2-tablet-mockup.png";
import work3Mockup from "../assets/images/work3-cu-desktop-balanced.png";
import work4Mockup from "../assets/images/work4-chatbot-phone-mockup.png";

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Skills & Tools", href: "#skills" },
];

export const works = [
  {
    number: "01",
    title: "IKEA 웹사이트 리디자인",
    period: "2026.07.21 ~ 2026.08.13",
    contribution: "20%",
    stack: [
      "HTML", "CSS3", "JavaScript", "Tailwind CSS v4",
      "GSAP", "Figma", "GitHub",
    ],
    overview:
      "이케아 웹사이트를 분석하고, 페르소나의 요구와 이용 흐름에 맞춰 화면 구성과 디자인을 개선한 리디자인 프로젝트입니다. HTML·CSS·JavaScript로 반응형 웹사이트와 주요 쇼핑 기능을 구현했습니다.",
    problem:
      "이케아와 경쟁 서비스를 분석하고, 페르소나와 사용자 시나리오·여정지도를 바탕으로 와이어프레임을 제작했습니다. AI 생성 결과를 검토·수정하며 세일 페이지를 구현하고 상품 카드 UI와 페이지 연결을 다듬었습니다. 배송·설치·쇼핑 관련 질문에 답하는 챗봇을 구현했으며, 이미지 최적화와 HTML·JavaScript 오류 수정으로 구현을 마무리했습니다.",
    compactDescription: true,
    mockup: work1Mockup,
    screen: work1Screen,
    imageFit: "contain",
    siteUrl: "https://heebon00.github.io/Team_Synergos_esg/",
    githubUrl: "https://github.com/heebon00/Team_Synergos_esg",
    docUrl: `${import.meta.env.BASE_URL}docs/ikea-project-presentation.pdf`,
    figmaUrl: "https://www.figma.com/design/dm1eu0wQIQEyIfd0UAHVeD/?node-id=3005-17166",
  },
  {
    number: "02",
    title: "더 단백 AI 광고 영상",
    period: "2026.06.18 ~ 2026.07.01",
    contribution: "100%",
    stack: ["Premiere Pro", "Google Flow", "Gemini", "Claude", "Figma", "Suno"],
    overview:
      "셀렉스 AI 광고 영상을 참고해 브랜드를 빙그레 ‘더 단백’으로 바꿔 제작한 개인 프로젝트입니다. 20~30대를 타깃으로 아침 일상과 제품 캐릭터를 연결하고, ‘이 맛에 더:한다’라는 슬로건을 담은 약 53초의 AI 광고 영상을 완성했습니다.",
    problem:
      "브랜드와 타깃을 분석해 기획서와 영상 콘셉트를 정리하고, AI로 제품 캐릭터와 일상 장면을 제작했습니다. 캐릭터 외형·인물 의상·화질을 다듬고, Premiere Pro에서 장면별 컷 편집과 내레이션·음악 구성을 진행했습니다. 영상·오디오 전환 효과를 적용해 기획부터 최종 편집까지 혼자 완성했습니다.",
    compactDescription: true,
    mockup: work2Mockup,
    mockupCanvas: true,
    videoProject: true,
    videoUrl: "https://drive.google.com/file/d/1RAC41HwwK470H59ofj2GYQCL0qVja1xm/view?usp=sharing",
    docUrl: `${import.meta.env.BASE_URL}docs/danbaek-project-plan.pdf`,
  },
  {
    number: "03",
    title: "CU 옴니버스 AI 광고",
    period: "2026.09.15 ~ 2026.10.08",
    contributionLabel: "기여도",
    contribution: "25%",
    stack: ["Higgsfield", "GPT", "Claude", "Premiere Pro", "After Effects", "Photoshop"],
    overview:
      "CU 편의점의 일상을 네 가지 이야기로 풀어낸 옴니버스 형식의 AI 광고 팀 프로젝트입니다. 30초 분량의 광고를 목표로 각 에피소드와 스토리보드를 기획했습니다. 제가 담당한 택배 로맨스 편에서는 알바생과 손님의 풋풋한 만남을 ‘Lovely to CU’라는 브랜드 메시지로 연결했습니다.",
    problem:
      "Higgsfield를 MCP로 GPT·Claude에 연결해 AI를 활용한 영상 제작을 진행했습니다. 공통 가이드와 컷별 프롬프트를 구성해 인물·매장·브랜드의 일관성을 유지했습니다. 택배 로맨스 편에서는 대사와 반응에 맞춰 컷을 편집하고, 강조 자막·하트·홍조 효과와 엔딩 로고 애니메이션을 더해 감정의 흐름을 표현했습니다.",
    compactDescription: true,
    workLabel: "제작 내용",
    mockup: work3Mockup,
    imageAlt: "CU 광고와 재생 바가 표시된 정면 모니터, 키보드와 마우스 목업",
    mockupCanvas: true,
    videoProject: true,
    videoUrl: "https://drive.google.com/file/d/1UVYCwiNafOE4tvkC7G-0Dh85GpZpUiTr/view?usp=sharing",
    videoOptions: [
      { label: "CU 옴니버스 팀 광고", description: "", url: "https://drive.google.com/file/d/1lvGoly6YWoaf-VrNr10QqYISNBtZBUep/view?usp=sharing" },
      { label: "개인 CU 광고", description: "택배 로맨스 편", url: "https://drive.google.com/file/d/1UVYCwiNafOE4tvkC7G-0Dh85GpZpUiTr/view?usp=sharing" },
    ],
    primaryLabel: "영상 보기",
    docUrl: "https://app.notion.com/p/volume1/3db725808c2680a8af06dd9f3a837d66",
    documentOptions: [
      { label: "팀 영상 PPT", description: "", url: null },
      { label: "개인 영상 PPT", description: "", url: null },
    ],
    docLabel: "기획서",
  },
  {
    number: "04",
    title: "윤재피티 AI Chatbot",
    matchCardHeight: true,
    period: "2026.09.01 ~ 2026.09.14",
    contribution: "100%",
    stack: ["Python", "FastAPI", "React", "JavaScript", "CSS3", "Claude", "Render", "GitHub"],
    overview:
      "Python·FastAPI와 React로 제작한 한국어 챗봇 웹 애플리케이션입니다. 대화 기록을 SQLite에 저장하고, 대화 검색·관리와 계산·날짜·텍스트 도구를 구현했습니다. 기본 모드는 외부 AI API 없이 규칙과 계산 코드로 답변하며, 설정에 따라 Hugging Face 모델을 연결할 수 있도록 구성했습니다.",
    problem:
      "Claude를 활용해 채팅 화면과 API를 개발하고, 대화 검색·제목 변경·삭제, 답변 복사·텍스트 내보내기와 모바일 반응형 화면을 구현했습니다. 응답 대기 표시와 오류 안내, 실패한 요청의 재시도를 적용하고, 요청 ID로 대화의 중복 저장을 방지했습니다. Render 배포 과정에서 API 주소와 CORS 설정을 조정해 프론트엔드와 백엔드를 연결했습니다.",
    compactDescription: true,
    mockup: work4Mockup,
    mockupCanvas: true,
    imageFit: "contain",
    imageScale: 1,
    imageAlt: "윤재피티 챗봇의 모바일 화면을 담은 휴대폰 목업",
    workLabel: "제작 내용",
    githubUrl: "https://github.com/goyunjae6-ops/chatbot-db",
    siteUrl: "https://chatbot-db-front-x8gl.onrender.com",
    docLabel: "기획서",
    directDocument: true,
    docUrl: `${import.meta.env.BASE_URL}docs/yoonjaept-project-introduction.pdf?v=20261016-visual3#view=Fit`,
  },
];

export const process = [
  {
    number: "01",
    title: "리서치 & 기획",
    summary: "벤치마킹과 페르소나 설계로 방향을 구체화합니다",
    detail: "경쟁 서비스를 벤치마킹하고 페르소나와 사용자 여정지도를 설계해, 리디자인의 근거를 마련합니다.",
  },
  {
    number: "02",
    title: "디자인 & 설계",
    summary: "반응형 와이어프레임으로 구현 기준을 세웁니다",
    detail: "1280 / 1024 / 640 기준 반응형 와이어프레임과 Figma 시안을 제작해, 실제 퍼블리싱의 기준으로 삼습니다.",
  },
  {
    number: "03",
    title: "개발 & 제작",
    summary: "코드와 AI 툴로 결과물을 직접 구현합니다",
    detail: "React·Tailwind·GSAP로 인터랙션을 구현하고, 디자인 시안을 실제 웹 화면으로 완성합니다.",
  },
  {
    number: "04",
    title: "검증 & 배포",
    summary: "테스트와 최적화 후 결과물을 완성합니다",
    detail: "코드 검사와 빌드로 오류를 점검하고, 화면과 주요 기능을 확인합니다. Lighthouse로 성능과 접근성을 살펴 개선한 뒤 웹사이트를 배포합니다.",
  },
];

export const skillGroups = [
  {
    title: "Frontend Developer",
    description: "웹 UI를 구조화하고 반응형으로 구현합니다",
    items: [
      { name: "HTML / CSS3", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS v4", level: 70 },
    ],
  },
  {
    title: "Web Designer",
    description: "구조를 설계하고 움직임을 더합니다",
    items: [
      { name: "Figma", level: 90 },
      { name: "GSAP", level: 70 },
      { name: "Photoshop", level: 70 },
      { name: "Illustrator", level: 70 },
    ],
  },
  {
    title: "AI Developer",
    description: "AI 도구와 에이전트로 작업을 자동화합니다",
    items: [
      { name: "Claude", level: 90 },
      { name: "Antigravity", level: 80 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "Motion Editor",
    description: "촬영본을 다듬고 모션그래픽으로 완성합니다",
    items: [
      { name: "Premiere Pro", level: 80 },
      { name: "After Effects", level: 75 },
    ],
  },
];

export const about = {
  name: "고윤재 , Ko Yoon Jae",
  tagline: "망설임 없이 'JUST GO', 모든 과정을 결과로 증명합니다.",
  roles: ["Frontend Developer", "Web Designer", "AI Video Creator", "Motion Editor"],
  birth: ["2004.02.17", "서울특별시 관악구 대학동", "010-5350-4654", "goyunjae6@gmail.com"],
  certificate: "1종보통 운전면허 (2023)",
  education: [
    "삼성고등학교 (2023)",
    "MBC 아카데미 · 생성형 AI를 활용한 반응형 웹콘텐츠 개발기획자 양성과정 (26.04 - 26.10 수료예정)",
  ],
};

export const footer = {
  name: "고윤재 (Ko Yoon Jae)",
  role: "Web Designer + Creative Frontend Developer",
  copyright: "ⓒ2026 고윤재. All rights reserved.",
  email: "goyunjae6@gmail.com",
  menu: [
    { label: "KakaoTalk", url: "https://open.kakao.com/o/sgUIw0Ni" },
    { label: "Instagram", url: "https://www.instagram.com/rhdbswohyxn_/" },
    { label: "GitHub", url: "https://github.com/goyunjae6-ops" },
  ],
};
