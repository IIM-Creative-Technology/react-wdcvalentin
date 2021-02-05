import React, { useEffect, useState } from "react";
import { Answer } from "./Answer";
import { Question } from "./Question";

const Quizz = ({ theme }) => {
  const [endComment, setEndComment] = useState('');
  const [end, setEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [quizData, setQuizData] = useState([]);

  const answering = isCorrect => {
    setAnsweredCount(prevAnswer => prevAnswer + 1);
    incrementScore(isCorrect);
  };

  const isFinish = score => {
    setEnd(true);
    switch (score) {
      case 10:
        return setEndComment("Parfait");
      case score < 10:
        return setEndComment("Super mais tu peux mieux faire !");
      case score < 5:
        return setEndComment("Retourne réviser");
      default:
        return setEndComment("Fini !");
    }
  };

  useEffect(() => {
    if (answeredCount === 10) {
      isFinish(score);
    }
  }, [answeredCount]);

  const incrementScore = isCorrect =>
    isCorrect && setScore(prevScore => prevScore + 1);

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
      {end === true ? (
        <div>
          <h1>{endComment}</h1>
          <h4> score : {score} / 10 </h4>
          <button onClick={() => window.location='/quizz'}>Retour au Menu</button>
        </div>
      ) : (
        <div>
          <h4>{score} / 10</h4>
          {quizData &&
            quizData.map((element, index) => {
              return (
                <div key={index}>
                  <Question question={element.question} />
                  {element.answers.map((answer, index) => (
                    <Answer
                      answer={answer}
                      index={index}
                      answering={answering}
                    />
                  ))}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default React.memo(Quizz);
