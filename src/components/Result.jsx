import { useContext } from "react";
import CheckResult from "./CheckResult";
import MyContext from "../contexts/Context";
const Result = () => {
  const { handleRetryBtn, handleCheckBtn, state } = useContext(MyContext);

  // filters the correct answers
  const right = state.userAnswer.filter((i) => i.result === true);
  const scorePercent = (right.length / state.filteredQuestion.length) * 100;
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
      {/* if check button is not clicked  render results page else render Checkresult page*/}
      {!state.isCheck && (
        <div className="w-full max-w-4xl mx-auto mt-8 bg-white p-6">
          <h1 className="text-4xl font-bold text-center mb-4 text-slate-700">
            Score: {scorePercent}%
          </h1>
          <p className="text-xl font-medium text-center mb-2 text-gray-600">
            Total Questions: {state.filteredQuestion.length}
          </p>
          <p className="text-xl font-medium text-center mb-6 text-gray-600">
            Correct: {right.length}
          </p>
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              onClick={handleRetryBtn}
              className="bg-lime-500 hover:bg-lime-400 focus:bg-lime-400 text-white text-lg px-6 py-3 rounded-md shadow-md transition-all"
            >
              Retry
            </button>
            <button
              type="submit"
              onClick={handleCheckBtn}
              className="bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white text-lg px-6 py-3 rounded-md shadow-md transition-all"
            >
              Check
            </button>
          </div>{" "}
        </div>
      )}
      {state.isCheck && <CheckResult />}
    </div>
  );
};

export default Result;
