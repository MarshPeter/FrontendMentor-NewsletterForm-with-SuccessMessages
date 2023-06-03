import "./imageDisplay.css";
import featureImage from "./../../../public/images/illustration-sign-up-desktop.svg";

function ImageDisplay() {
  return (
    <div className="div__image">
      <img src={featureImage} alt="cool picture" />
    </div>
  );
}

export default ImageDisplay;
