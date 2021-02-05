import React from "react";
import Logo from "../../atoms/_header_logo";
import style from "../../App.scss";
import Nav from "../../atoms/_header_nav";

function Header() {
  return (
    <div>
      <section>
        <header className={style.header}>
          <Logo title="HAPPY QUIZZ" />
          <Nav />
        </header>
      </section>
      <section>
          
      </section>
    </div>
  );
}

export default Header;
