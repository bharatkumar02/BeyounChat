import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

function ConfettieAnimation() {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} />;
}

export default ConfettieAnimation;
