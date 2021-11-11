import { useEffect, useState } from "react";
import style from "../../sass/App.scss";

function Header({ temp, city, country }) {
  const [score, setScore] = useState(null);
  useEffect(() => {
    setScore(localStorage.getItem("score"));
  }, [score]);
  return (
    <header className={style.header}>
      <h1 id="logo_title" onClick={() => (window.location = "/")}>
        Happy Quizz
      </h1>
      {temp ? (
        <h3>
          Température à {city},{country} : {temp}°C{" "}
        </h3>
      ) : null}
      {score && <h3> Dernier score : {score} </h3>}
    </header>
  );
}

export default Header;
