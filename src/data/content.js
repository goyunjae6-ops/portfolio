import work1Mockup from "../assets/images/work1-mockup.png";
import work2Mockup from "../assets/images/work2-mockup.png";
import work3Mockup from "../assets/images/work3-mockup.png";

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export const works = [
  {
    number: "01",
    title: "이케아 리디자인 웹사이트",
    period: "3주",
    contribution: "70%",
    stack: ["Figma", "React 19", "Next.js", "TypeScript", "Three.js", "Tailwind CSS", "Supabase"],
    overview:
      "이케아 공식 웹사이트의 UX/UI를 분석하고 사용자 중심으로 리디자인한 프로젝트입니다. 가구 탐색부터 구매까지의 여정을 개선하고, 3D 가구 미리보기와 공간 배치 시뮬레이션 기능을 추가하여 온라인 가구 쇼핑 경험을 혁신했습니다.",
    problem:
      "기존 이케아 웹사이트에서 카테고리 탐색이 복잡하고 가구의 실제 크기감을 파악하기 어려운 문제를 발견했습니다. 직관적인 필터링 시스템과 Three.js 기반 3D 뷰어를 도입하여 사용자가 실제 공간에 가구를 배치해볼 수 있게 했고, 페이지 로딩 속도를 35% 개선했습니다.",
    mockup: work1Mockup,
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

export const about = {
  name: "고윤재 , Ko Yoon Jae",
  tagline: "망설임 없이 'JUST GO', 모든 과정을 결과로 증명합니다.",
  roles: ["Frontend Developer", "Web Designer", "AI Video Creator", "Motion Editor"],
  birth: ["2004.02.17", "서울특별시 관악구 대학동", "010-5350-4654", "goyunjae6@gmail.com"],
  certificate: "1종보통 운전면허 (2024)",
  education: "MBC 아카데미 · 생성형 AI를 활용한 반응형 웹콘텐츠 개발기획자 양성과정 (26.04 - 26.10)",
};

export const footer = {
  name: "Andréw Kaplan",
  role: "Digital designer + Crative Frontend Developer",
  copyright: "ⓒ2026 고윤재. All rights reserved.",
  email: "yoonjae.ko@gmail.com",
  menu: ["LinkedIn", "Medium", "Instagram", "X", "Behance"],
};
