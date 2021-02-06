import React from "react";
import "../../App.scss";
import flat_quizz from '../../img/flat_quizz.png';
import content_wave from '../../img/waves.png';
import {ContentLeft} from "../../molecules/home/ContentLeft";

function Content() {
  return (
    <div>
      <section id="content">
        <ContentLeft/>
        <img src={flat_quizz} className="content_img" alt="Flat image Quizz"></img>
      </section>
      
        <img src={content_wave} className="content_wave" alt="Wave image Quizz"></img>
      
    </div>
  );
}

export default Content;
