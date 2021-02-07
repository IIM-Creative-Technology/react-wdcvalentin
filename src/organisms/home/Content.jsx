import React from "react";
import flat_quizz from "../../img/flat_quizz.png";
import { ContentLeft } from "../../molecules/home/ContentLeft";
import "../../sass/App.scss";
function Content() {
  return (
    <div>
      <section id="content">
        <ContentLeft />
        <img src={flat_quizz} className="content_img" alt="Flat Quizz"></img>
      </section>
    </div>
  );
}

export default Content;
