import React from "react";

export function ContentLeft(props) {
  return (
    <section>
      <p className="content_text">
        ENVIE DE <br /> VOUS DÉTENDRE ? <br />
        HAPPY QUIZZ EST LÀ <br />
        POUR VOUS !
      </p>
      <input
        type="button"
        className="btn_start_quizz"
        value="Accéder aux quizz"
        onClick={() => (window.location = "/quizz")}
      />
    </section>
  );
}
