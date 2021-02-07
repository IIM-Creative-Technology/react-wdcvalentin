import React, { useEffect, useState } from "react";
import { Answer } from "../../atoms/quizz/Answer";
import { Question } from "../../atoms/quizz/Question";
import { EndQuiz } from "../../molecules/EndQuiz";

export const Quizz = ({ theme, themeTitle }) => {
  const [quizData, setQuizData] = useState(null);
  const [score, setScore] = useState(0);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [end, setEnd] = useState(false);
  const [endComment, setEndComment] = useState("");

  useEffect(() => {
    const getJson = async theme => {
      try {
        switch (theme) {
          case "history":
            return await import("../../quizz/quizz_history.json").then(quiz => {
              setQuizData(quiz.default);
            });
          case "insolite":
            return await import("../../quizz/quizz_insolite.json").then(
              quiz => {
                setQuizData(quiz.default);
              }
            );
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
      } catch (error) {
        console.error(error);
      }
    };
    getJson(theme);
  }, [theme]);

  const answering = isCorrect => {
    nextQuestion(score);
    incrementScore(isCorrect);
  };

  const incrementScore = isCorrect =>
    isCorrect && setScore(prevScore => prevScore + 1);

  const nextQuestion = score => {
    if (indexQuestion + 1 < quizData.length) {
      setIndexQuestion(prevIndex => prevIndex + 1);
    } else if (indexQuestion + 1 === quizData.length) {
      isFinish(score);
    }
  };

  const isFinish = score => {
    if (score === 10) {
      setEndComment("Parfait 🔥!");
    } else if (score >= 5) {
      setEndComment("Super mais tu peux mieux faire 💪");
    } else if (score < 5) {
      setEndComment("Retourne réviser... 😿");
    }
    setEnd(true);
    localStorage.setItem("score", score);
  };

  return (
    <div className="quizzBlock">
      {end ? (
        <EndQuiz endComment={endComment} score={score} />
      ) : (
        <div className="block_quizz">
          <h1>{themeTitle(theme)}</h1>
          <h4>Question {indexQuestion + 1}</h4>
          <div>
            {quizData && (
              <Question question={quizData[indexQuestion].question} />
            )}
            {quizData &&
              quizData[indexQuestion].answers
                .sort(() => 0.5 - Math.random())
                .map((answer, index) => (
                  <Answer answer={answer} index={index} answering={answering} />
                ))}
          </div>
        </div>
      )}
    </div>
  );
};
