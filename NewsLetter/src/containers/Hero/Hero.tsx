import "./hero.css";
import { ImageDisplay, Information, SubscribeForm } from "../../components";

function Hero() {
  return (
    <div className="div__hero">
      <div>
        <Information />
        <SubscribeForm />
      </div>
      <ImageDisplay />
    </div>
  );
}

export default Hero;
