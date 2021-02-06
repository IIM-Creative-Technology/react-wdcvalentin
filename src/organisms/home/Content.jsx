import React from "react";
import style from "../../App.scss";
import flat_quizz from '../../img/flat_quizz.png';
import ContentLeft from "../../molecules/home/_content_left";

function Content() {
  return (
    <div>
      <section>
        <ContentLeft className={style.content} />
        <img src={flat_quizz} alt="Flat image Quizz"></img>
      </section>
    </div>
  );
}

export default Content;
