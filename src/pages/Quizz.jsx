import { useState } from "react";
import Quizz from "../components/quizz/Quizz";

export const QuizzPage = () => {
  const [isPicked, setIsPicked] = useState(false);
  const [theme, isTheme] = useState("");
  const themes = {
    a: "history",
    b: "insolite",
    c: "manga",
    d: "geo",
  };
  function onClick(themes, key) {
    isTheme(themes[key]);
    setIsPicked(true);
  }
  return (
    <div>
      <h1>Choisis ton Quizz !</h1>
      {isPicked ? (
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
