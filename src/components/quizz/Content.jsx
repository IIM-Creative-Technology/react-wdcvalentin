import React from "react";
import ContentLeft from "../../molecule/_content_left";
import ContentRight from "../../atoms/_content_right_img";
import style from "../../App.scss";


function Content() {
  return (
    <div >
        <section>
        <ContentLeft className={style.content}/>
        <ContentRight />
    </section>
    
    </div>
    
  );
}

export default Content;
