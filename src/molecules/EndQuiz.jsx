export const EndQuiz = ({ endComment, score }) => {
  return (
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
  );
};
