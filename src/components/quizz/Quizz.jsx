import { useEffect, useState } from "react";
import { Answer } from "./Answer";
import { Question } from "./Question";

export const Quizz = ({ theme }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState([]);

  const answering = ({answer, isCorrect}) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      
    }
  }
  const getJson = async theme => {
    switch (theme) {
      case "history":
        return await import("../../quizz/quizz_history.json").then(quiz => {
          setQuizData(quiz.default);
        });
      case "insolite":
        return await import("../../quizz/quizz_insolite.json").then(quiz => {
          setQuizData(quiz.default);
        });
      case "manga":
        return await import("../../quizz/quizz_manga.json").then(quiz => {
          setQuizData(quiz.default);
        });
      case "geo":
        return await import("../../quizz/quizz_geo.json").then(quiz => {
          setQuizData(quiz.default);
        });
      default:
      break;
    }
  };
  useEffect(() => {
    getJson(theme);
  }, [quizData]);

  return (
    <div>
      Quizz Component
      {quizData &&
        quizData.map((element, index) => {
          return (
            <div key={index}>
              <Question question={element.question} />
              {element.answers.map((answer, index) => (
                <Answer answer={answer} index={index} />
              ))}
            </div>
          );
        })}
    </div>
  );
};
