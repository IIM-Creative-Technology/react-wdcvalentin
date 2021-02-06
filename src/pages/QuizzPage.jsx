import { useState } from "react";
import Quizz from "../organisms/Quizz";

export const QuizzPage = () => {
  const [isThemePicked, setIsThemePicked] = useState(false);
  const [theme, isTheme] = useState('');
  const themes = {
    a: "history",
    b: "insolite",
    c: "manga",
    d: "geo"
  };
  function onClick(themes, key) {
    isTheme(themes[key]);
    setIsThemePicked(true);
  }
  return (
    <div>
      <h1>Choisis ton Quizz !</h1>
      {isThemePicked ? (
        <Quizz theme={theme} />
      ) : (
        <div>
          {Object.keys(themes).map((key, i) => (
            <button key={i} onClick={() => onClick(themes, key)}>
              {themes[key]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
