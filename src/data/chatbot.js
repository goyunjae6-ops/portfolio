import { about, works, skillGroups, process } from "./content";

const firstName = about.name.split(",")[0].trim();
const email = about.birth[3];
const phone = about.birth[2];

function formatWork(w) {
  return `[${w.number}] ${w.title} (${w.period} · 기여도 ${w.contribution})\n\n${w.overview}`;
}

const workSummary = works.map((w) => `${w.number}. ${w.title} — ${w.period}`).join("\n");
const skillSummary = skillGroups.map((g) => `· ${g.title}: ${g.items.map((i) => i.name).join(", ")}`).join("\n");
const processSummary = process.map((p) => `${p.number}. ${p.title} — ${p.summary}`).join("\n");

export const suggestedQuestions = [
  "어떤 프로젝트를 진행했나요?",
  "다룰 수 있는 기술 스택이 궁금해요!",
  "작업 방식이 궁금해요!",
  "연락처를 알려주세요!",
];

const intents = [
  {
    id: "greeting",
    keywords: ["안녕", "hi", "hello", "헬로", "반가"],
    reply: () =>
      `안녕하세요! 👋\n${firstName}의 포트폴리오 챗봇입니다.\n프로젝트, 기술 스택, 작업 방식, 연락처에 대해 물어보세요.`,
  },
  {
    id: "work-ikea",
    keywords: ["이케아", "ikea"],
    reply: () => formatWork(works[0]),
  },
  {
    id: "work-ai-video",
    keywords: ["ai 영상", "스테이블", "러너웨이", "runway", "stable diffusion", "영상 자동"],
    reply: () => formatWork(works[1]),
  },
  {
    id: "work-team-video",
    keywords: ["동아리", "브랜드 홍보", "영상 제작 팀", "팀 프로젝트"],
    reply: () => formatWork(works[2]),
  },
  {
    id: "works",
    keywords: ["프로젝트", "작업물", "포트폴리오", "works", "경력", "작품"],
    reply: () => `지금까지 진행한 프로젝트예요.\n\n${workSummary}\n\n궁금한 프로젝트 이름을 말씀해주시면 자세히 알려드릴게요!`,
  },
  {
    id: "skills",
    keywords: ["스킬", "기술", "스택", "할 줄", "능력", "skill", "다룰"],
    reply: () => `이런 기술들을 다루고 있어요.\n\n${skillSummary}`,
  },
  {
    id: "process",
    keywords: ["프로세스", "작업 방식", "어떻게 작업", "워크플로우", "작업 과정"],
    reply: () => `작업은 이런 순서로 진행해요.\n\n${processSummary}`,
  },
  {
    id: "education",
    keywords: ["학력", "교육", "아카데미", "전공"],
    reply: () => about.education,
  },
  {
    id: "about",
    keywords: ["누구", "소개", "자기소개", "who are you", "어떤 사람"],
    reply: () => `${about.tagline}\n\n${about.roles.join(" · ")}로 활동하고 있어요.`,
  },
  {
    id: "contact",
    keywords: ["연락처", "이메일", "메일", "전화", "번호", "contact", "email"],
    reply: () => `이메일: ${email}\n전화: ${phone}`,
  },
  {
    id: "thanks",
    keywords: ["고마워", "감사", "thanks", "thank you"],
    reply: () => "천만에요! 더 궁금한 점 있으면 언제든 물어보세요 😊",
  },
];

export function getBotReply(input) {
  const normalized = input.toLowerCase();
  const matched = intents.find((intent) => intent.keywords.some((kw) => normalized.includes(kw.toLowerCase())));
  if (matched) return matched.reply();

  return `죄송해요, 정확히 이해하지 못했어요 🙏\n프로젝트, 기술 스택, 작업 방식, 연락처에 대해 물어봐주시거나 아래 버튼을 눌러보세요.\n직접 연락은 ${email}로 부탁드려요!`;
}
