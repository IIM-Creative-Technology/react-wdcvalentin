import React, { useEffect, useState } from "react";
import { Answer } from "../atoms/quizz/Answer";
import { Question } from "../atoms/quizz/Question";

export const Quizz = ({ theme, themeTitle }) => {
  const [quizData, setQuizData] = useState(null);
  const [score, setScore] = useState(0);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [end, setEnd] = useState(false);
  const [endComment, setEndComment] = useState("");

  useEffect(() => {
    getJson(theme);
  }, [quizData]);

  const answering = isCorrect => {
    nextQuestion(score);
    incrementScore(isCorrect);
  };

  const incrementScore = isCorrect =>
    isCorrect && setScore(prevScore => prevScore + 1);

  const nextQuestion = () => {
    if (indexQuestion + 1 < quizData.length) {
      setIndexQuestion(prevIndex => prevIndex + 1);
    } else {
      isFinish(score);
    }
  };

  const isFinish = score => {
    setEnd(true);
    localStorage.setItem("score", score);
    if (score === 10) {
      return setEndComment("Parfait !");
    } else if (score >= 5) {
      return setEndComment("Super mais tu peux mieux faire !");
    } else if (score < 5) {
      return setEndComment("Retourne réviser...");
    }
  };

  const getJson = async theme => {
    try {
      switch (theme) {
        case "history":
          return await import("../quizz/quizz_history.json").then(quiz => {
            setQuizData(quiz.default);
          });
        case "insolite":
          return await import("../quizz/quizz_insolite.json").then(quiz => {
            setQuizData(quiz.default);
          });
        case "manga":
          return await import("../quizz/quizz_manga.json").then(quiz => {
            setQuizData(quiz.default);
          });
        case "geo":
          return await import("../quizz/quizz_geo.json").then(quiz => {
            setQuizData(quiz.default);
          });
        default:
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="quizzBlock">
      {end ? (
        <div className="block_result">
          <h1>{endComment}</h1>
          <h2> Ton score : {score} / 10 </h2>
          <button
            className="btn_return"
            onClick={() => (window.location = "/quizz")}
          >
            Retour au menu
          </button>
        </div>
      ) : (
        <div className="block_quizz">
          <h1>{themeTitle(theme)}</h1>
          <h4>Question {indexQuestion + 1}</h4>
          <div>
            {quizData && (
              <Question question={quizData[indexQuestion].question} />
            )}
            {quizData &&
              quizData[indexQuestion].answers.map((answer, index) => (
                <Answer answer={answer} index={index} answering={answering} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
