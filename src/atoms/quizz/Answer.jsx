export const Answer = ({ answer, index, answering }) => {
  return <button className="btn_answer" key={index} onClick={() => answering(answer.isCorrect)}>{answer.answer}</button>;
};
