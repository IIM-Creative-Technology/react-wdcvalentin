import { useEffect, useState } from "react";
import style from "../../App.scss";

function Header() {
  const [score, setScore] = useState(null);
  useEffect(() => {
    setScore(localStorage.getItem("score"));
  }, [score]);
  return (
    <header className={style.header}>
      <h1 id="logo_title" onClick={() => (window.location = "/")}>
        Happy Quizz
      </h1>
      {score ? <h3> Dernier score : {score} </h3> : null}
    </header>
  );
}

export default Header;
