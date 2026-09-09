import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import runningManData from "../../assets/lottie/running-man.json";

export default function LogoIcon() {
  return (
    <span className="inline-block h-[1em] w-[1em] shrink-0" aria-hidden="true">
      <DotLottieReact data={runningManData} loop autoplay />
    </span>
  );
}
