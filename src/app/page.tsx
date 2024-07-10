import { FloatingNavBar } from "../components/floating-navbar";
import { HeroScroll } from "../components/hero-scroll";
import { Lamp } from "../components/lamp";
import { AnimatedPin } from "../components/3d-pin";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div>
      <FloatingNavBar />
      <HeroScroll />
      <Lamp />
      <AnimatedPin />
      <Footer />
    </div>
  );
}
