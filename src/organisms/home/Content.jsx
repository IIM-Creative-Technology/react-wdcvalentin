import React from "react";
import "../../App.scss";
import { Footer } from "../../atoms/quizz/Footer";
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
          alt="Flat image Quizz"
        ></img>
      </section>

      <Footer />
    </div>
  );
}

export default Content;
