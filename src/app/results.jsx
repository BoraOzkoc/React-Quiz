const Results = ({ correctNumber, handleClick }) => {
  const totalQuestionAmount = 10;
  let incorrectAmount = 0;
  const calculateResults = () => {
    console.log(correctNumber);
    incorrectAmount = totalQuestionAmount - correctNumber;
  };
  calculateResults();
  return (
    <div>
      <h2 className=" text-white rounded-lg flex justify-center text-3xl">
        Results
      </h2>
      <h3 className="p-6 flex justify-center text-lg">{correctNumber}/10</h3>
      <button
        onClick={handleClick}
        className={`px-4 py-2 m-2 min-w-[320px] font-bold rounded bg-[#F8773F] hover:bg-[#b2542c] text-white"
        `}
      >
        Play Again
      </button>
    </div>
  );
};

export default Results;
