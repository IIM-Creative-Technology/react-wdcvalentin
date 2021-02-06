import React from "react";
import style from "../../App.scss";

function Header() {
  return (
    <header className={style.header}>
      <h1 id="logo_title" onClick={() => (window.location = "/")}>Happy Quizz</h1>
    </header>
  );
}

export default Header;
