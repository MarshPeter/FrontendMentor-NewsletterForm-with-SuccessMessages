import "./information.css";
import checkMark from "./../../../public/images/icon-list.svg";

function Information() {
  return (
    <>
      <h1>Stay Updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>
          <img src={checkMark} alt="tick-mark" />
          <p>Product discovery and building what matters</p>
        </li>
        <li>
          <img src={checkMark} alt="" />
          <p>Measuring to ensure updates are a success</p>
        </li>
        <li>
          <img src={checkMark} alt="" />
          <p>And much more!</p>
        </li>
      </ul>
    </>
  );
}

export default Information;
