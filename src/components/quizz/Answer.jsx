export const Answer = ({ answer, index }) => {
  console.log('answer', answer);
  return <button key={index}>{answer.answer}</button>;
};
