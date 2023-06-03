import "./subscribeForm.css";

function SubscribeForm() {
  return (
    <form action="/" method="post">
      <label htmlFor="email">
        Email Address
        <input type="text" name="email"></input>
      </label>
      <input type="submit" value="Subscribe to monthly newsletter" />
    </form>
  );
}

export default SubscribeForm;
