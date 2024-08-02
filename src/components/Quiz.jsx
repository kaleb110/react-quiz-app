/* eslint-disable react/prop-types */
import Result from "./Result";

const Quiz = ({
  handleCheckBtn,
  handleRetryBtn,
  handleClick,
  handleSubmit,
  userAnswer,
  isCheck,
  currentQuestionIndex,
  filteredQuestion,
}) => {

  return (
    <div className="text-center py-8 items-center flex flex-col gap-4">
      {currentQuestionIndex !== filteredQuestion.length ? (
        <div className="w-full h-full max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 flex flex-col">
            <p className="text-slate-500 text-3xl font-semibold text-left mb-4">
              Question {currentQuestionIndex + 1}
            </p>
            <span className="text-gray-700 text-2xl font-medium text-left block mb-6">
              {filteredQuestion[currentQuestionIndex].query}
            </span>
            <div className="flex flex-col gap-4 mb-6">
              {filteredQuestion[currentQuestionIndex].choices.map((choice) => (
                <button
                  key={choice.selected}
                  className="flex items-start gap-4 text-lg bg-red-100 hover:bg-red-300 focus:bg-red-300 text-gray-800 px-6 py-3 rounded-md shadow-sm transition-all text-left w-full"
                  value={choice.selected}
                  onClick={() => handleSubmit(choice.selected)}
                >
                  <span className="font-semibold">
                    {choice.selected.toUpperCase()}.
                  </span>
                  <span className="flex-1">{choice.a}</span>
                </button>
              ))}
            </div>
            <div className="mt-6 text-left">
              <button
                type="submit"
                onClick={handleClick}
                className="text-lg bg-lime-500 hover:bg-lime-400 focus:bg-lime-400 text-white px-8 py-4 rounded-md shadow-md transition-all"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Result
          userAnswer={userAnswer}
          handleRetryBtn={handleRetryBtn}
          handleCheckBtn={handleCheckBtn}
          isCheck={isCheck}
          filteredQuestion={filteredQuestion}
        />
      )}
    </div>
  );
};

export default Quiz;
