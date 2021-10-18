import { useState } from "react";

function FlipIcon({ icon1, icon2 }) {
  const [valorationClick, setValorationClick] = useState(true);
  const thumbsUp = "fa " + icon1;
  const thumbsDown = "fa " + icon2;

  return (
    <i
      className={valorationClick ? thumbsUp : thumbsDown}
      onClick={() => {
        setValorationClick(!valorationClick);
      }}
    ></i>
  );
}

export default FlipIcon;
