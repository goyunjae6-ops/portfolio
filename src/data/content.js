import work1DesktopBase from "../assets/images/work1-desktop-base.png";
import work2Mockup from "../assets/images/work2-mockup.png";
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
    period: "4주",
    contribution: "20%",
    stack: ["Figma", "HTML5", "Tailwind CSS v4", "GSAP", "Swiper", "JavaScript"],
    overview:
      "ESG 경영으로 잘 알려진 이케아(IKEA) 공식 온라인몰을 모티브로, 5인 팀(Team_Synergos)이 UI/UX 구조와 장바구니·위시리스트 등 핵심 기능을 재현한 리디자인 프로젝트입니다. 벤치마킹 분석부터 페르소나 설계, 와이어프레임, 시안, 퍼블리싱까지 전 과정을 거쳐 25종의 페이지를 GitHub Pages로 배포했습니다.",
    problem:
      "이케아 코리아를 심층 분석하고 한샘몰·오늘의집·MUJI를 벤치마킹해 개선 포인트를 도출했습니다. 3종의 페르소나와 사용자 여정지도를 설계해 리디자인 방향을 구체화하고, 이를 바탕으로 반응형(1280/1024/640) 와이어프레임을 제작해 실제 구현의 기준을 마련했습니다.",
    mockup: work1DesktopBase,
    imageFit: "contain",
    siteUrl: "https://heebon00.github.io/Team_Synergos_esg/",
    githubUrl: "https://github.com/heebon00/Team_Synergos_esg",
  },
  {
    number: "02",
    title: "AI 영상 제작 프로젝트",
    period: "2주",
    contribution: "65%",
    stack: ["Python", "Premiere Pro", "After Effects", "Stable Diffusion", "RunwayML", "FFmpeg"],
    overview:
      "AI 기반 영상 자동 생성 및 편집 파이프라인을 구축한 프로젝트입니다. Stable Diffusion으로 이미지를 생성하고, RunwayML로 영상 변환 후 자동 편집하여 콘텐츠 제작 시간을 80% 단축했습니다.",
    problem:
      "기존 영상 제작 과정에서 소스 이미지 확보와 반복적인 편집 작업에 많은 시간이 소요되는 문제를 해결했습니다. AI 이미지 생성과 자동 컷 편집을 도입하고, FFmpeg 기반 배치 처리로 렌더링 속도를 60% 개선했습니다.",
    mockup: work2Mockup,
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

export const reviews = [
  {
    quote:
      "From concept to execution, 고윤재 demonstrated a level of expertise that is truly commendable. They were responsive, flexible, and delivered a design that truly speaks to our target audience.",
    author: "Sarah Johnson, Marketing Lead at Technlogia",
  },
  {
    quote:
      "From concept to execution, 고윤재 demonstrated a level of expertise that is truly commendable. They were responsive, flexible, and delivered a design that truly speaks to our target audience. The team's turned our vision into a reality, and we couldn't be happier.",
    author: "Frank Berry, Chief Creative Officer at Gomi",
  },
  {
    quote:
      "Working with 고윤재 was an absolute pleasure. Their attention to detail and creative flair truly set them apart. They took our vision and turned it into something beyond our expectations.",
    author: "Michael Brown, Founder at Fabriks",
  },
];

export const skillGroups = [
  {
    title: "Frontend Developer",
    description: "웹 UI를 구조화하고 반응형으로 구현합니다",
    items: [
      { name: "HTML / CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS v4", level: 85 },
    ],
  },
  {
    title: "Web Designer",
    description: "구조를 설계하고 움직임을 더합니다",
    items: [
      { name: "Figma", level: 90 },
      { name: "GSAP", level: 75 },
      { name: "Photoshop", level: 70 },
    ],
  },
  {
    title: "AI Developer",
    description: "AI 도구와 에이전트로 작업을 자동화합니다",
    items: [
      { name: "Claude", level: 90 },
      { name: "Antigravity", level: 70 },
      { name: "Python", level: 80 },
    ],
  },
  {
    title: "Motion Editor",
    description: "촬영본을 다듬고 모션그래픽으로 완성합니다",
    items: [
      { name: "Premiere Pro", level: 90 },
      { name: "After Effects", level: 85 },
    ],
  },
];

export const about = {
  name: "고윤재 , Ko Yoon Jae",
  tagline: "망설임 없이 'JUST GO', 모든 과정을 결과로 증명합니다.",
  roles: ["Frontend Developer", "Web Designer", "AI Video Creator", "Motion Editor"],
  birth: ["2004.02.17", "서울특별시 관악구 대학동", "010-5350-4654", "goyunjae6@gmail.com"],
  certificate: "1종보통 운전면허 (2024)",
  education: "MBC 아카데미 · 생성형 AI를 활용한 반응형 웹콘텐츠 개발기획자 양성과정 (26.04 - 26.10)",
};

export const footer = {
  name: "고윤재 (Ko Yoon Jae)",
  role: "Web Designer + Creative Frontend Developer",
  copyright: "ⓒ2026 고윤재. All rights reserved.",
  email: "goyunjae6@gmail.com",
  menu: [
    { label: "LinkedIn", url: "#" },
    { label: "Instagram", url: "#" },
    { label: "GitHub", url: "#" },
  ],
};
