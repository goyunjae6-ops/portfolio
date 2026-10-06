import work1Mockup from "../assets/images/work1-desktop-base.png";
import work1Screen from "../assets/images/work1-screen.png";
import work2Mockup from "../assets/images/work2-tablet-mockup.png";
import work3Mockup from "../assets/images/work3-mockup.png";

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
    title: "영상 제작 팀 프로젝트",
    period: "4주",
    contribution: "50%",
    stack: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Blender", "Cinema 4D"],
    overview:
      "대학 영상 동아리에서 진행한 팀 프로젝트로, 브랜드 홍보 영상을 기획부터 후반 작업까지 전 과정을 담당했습니다. 모션 그래픽과 컬러 그레이딩을 활용하여 시각적 완성도를 높이고, 팀 협업 워크플로우를 체계화했습니다.",
    problem:
      "팀원 간 영상 소스 공유와 버전 관리가 혼란스러운 문제를 해결하기 위해 클라우드 기반 협업 시스템을 구축했습니다. 프록시 편집 워크플로우를 도입하여 저사양 환경에서도 원활한 편집이 가능하게 했고, 최종 렌더링 시간을 45% 단축했습니다.",
    mockup: work3Mockup,
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
