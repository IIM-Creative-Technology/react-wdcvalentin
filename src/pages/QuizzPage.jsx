import { useState } from "react";
import Quizz from "../organisms/Quizz";
import Header from "../organisms/home/Header";
import { Footer } from "../atoms/quizz/Footer";
import "../App.scss";

export const QuizzPage = () => {
  const [isThemePicked, setIsThemePicked] = useState(false);
  const [theme, isTheme] = useState("");
  const themes = {
    a: "history",
    b: "insolite",
    c: "manga",
    d: "geo",
  };

  function onClick(themes, key) {
    isTheme(themes[key]);
    setIsThemePicked(true);
  }

  function themeTitle(theme) {
    switch (theme) {
      case "history":
        return "Histoire";
      case "insolite":
        return "Insolite";
      case "manga":
        return "Manga";
      case "geo":
        return "Géographie";
    }
  }

  return (
    <div>
      <Header />
      {isThemePicked ? (
        <Quizz theme={theme} themeTitle={themeTitle} />
        
      ) : (
        <div className="btn_themes">
          <h1 className="choiceTitle">Choisis ton Quizz !</h1>
          {Object.keys(themes).map((key, i) => (
            <button
              className="btn_choice"
              key={i}
              onClick={() => onClick(themes, key)}
            >
              {themeTitle(themes[key])}
            </button>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};
