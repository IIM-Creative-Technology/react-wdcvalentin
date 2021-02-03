export const Question = ({ Quizz }) => {
  const quizz = Quizz;
  return (
    <div>
      <h1>Question Component</h1>
      {quizz.map(element => (
        <ul key={element.id}>
          <div>
            <h3> {element.id}. {element.question}</h3>
            {Object.entries(element.answers)
                .filter(([_, value]) => value !== null)
                .map(([key, value]) => <li key={key}>{value}</li>)}
          </div>
        </ul>
      ))}
    </div>
  );
};
