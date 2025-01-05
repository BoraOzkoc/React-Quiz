const Results = ({ correctNumber, handleClick }) => {
  const totalQuestionAmount = 10;
  let incorrectAmount = 0;
  const calculateResults = () => {
    console.log(correctNumber);
    incorrectAmount = totalQuestionAmount - correctNumber;
  };
  calculateResults();
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className=" w-fit text-white rounded-lg font-bold flex justify-center text-3xl">
        Results
      </h2>
      <h3 className="p-6 font-bold flex justify-center text-lg">{correctNumber}/10</h3>
      <button
        onClick={handleClick}
        className={`px-4 py-2 m-2 min-w-[320px] w-fit font-bold rounded bg-[#46A57D] hover:bg-[#46cd95] text-white"
        `}
      >
        Play Again
      </button>
    </div>
  );
};

export default Results;
