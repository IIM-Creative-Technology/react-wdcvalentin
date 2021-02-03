import QuizzAPI from '../../quizz/quizz.json';
import { Question } from "./Question";

export const Quizz = () => {
  return (
    <div>
      <Question Quizz={QuizzAPI}/>
    </div>
  );
};
