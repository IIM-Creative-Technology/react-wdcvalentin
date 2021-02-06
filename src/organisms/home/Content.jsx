import React from "react";
import "../../App.scss";
import flat_quizz from "../../img/flat_quizz.png";
import { ContentLeft } from "../../molecules/home/ContentLeft";
function Content() {
  return (
    <div>
      <section id="content">
        <ContentLeft />
        <img
          src={flat_quizz}
          className="content_img"
          alt="Flat Quizz"
        ></img>
      </section>
    </div>
  );
}

export default Content;
