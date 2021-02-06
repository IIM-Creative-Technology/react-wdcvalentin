import React from "react";
import ContentLeft from "../../molecule/_content_left";
import flat_question from "../../img/flat_quizz.png";
import svg_waves from "../../img/fond_content.svg";


function Content() {
  return (
    <div>
      <section id="content">
        <div>
          <ContentLeft />
        </div>
        <img
          className="content_img"
          src={flat_question}
          alt="Flat image Quizz"
        ></img>
      </section>
      <section>
        <img
          className="content_wave"
          src={svg_waves}
          alt="Wave style"
        ></img>
      </section>
    </div>
  );
}

export default Content;
