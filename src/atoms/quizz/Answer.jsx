export const Answer = ({ answer, index, answering }) => {
  return <button key={index} onClick={() => answering(answer.isCorrect)}>{answer.answer}</button>;
};
