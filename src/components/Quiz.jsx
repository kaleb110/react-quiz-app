import Result from "./Result";
import MyContext from "../contexts/Context";
import { useContext } from "react";

const Quiz = () => {
  const { handleClick, handleSubmit, state } = useContext(MyContext);

  return (
    <div className="text-center py-8 items-center flex flex-col gap-4">
      {/* this is basically if index of the filtered question is not equals the currentQuestionIndex which means it is and ended, it renders the question else renders results page */}
      {state.currentQuestionIndex !== state.filteredQuestion.length ? (
        <div className="w-full h-full max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 flex flex-col">
            <p className="text-slate-500 text-3xl font-semibold text-left mb-4">
              Question {state.currentQuestionIndex + 1}
            </p>
            <span className="text-gray-700 text-2xl font-medium text-left block mb-6">
              {state.filteredQuestion[state.currentQuestionIndex].query}
            </span>
            <div className="flex flex-col gap-4 mb-6">
              {state.filteredQuestion[state.currentQuestionIndex].choices.map(
                (choice) => (
                  <button
                    key={choice.selected}
                    className="flex items-start gap-4 text-lg bg-red-100 hover:bg-red-300 focus:bg-red-300 text-gray-800 px-6 py-3 rounded-md shadow-sm transition-all text-left w-full"
                    value={choice.selected}
                    onClick={() => handleClick(choice.selected)}
                  >
                    <span className="font-semibold">
                      {choice.selected.toUpperCase()}.
                    </span>
                    <span className="flex-1">{choice.a}</span>
                  </button>
                )
              )}
            </div>
            <div className="mt-6 text-left">
              <button
                type="submit"
                onClick={handleSubmit}
                className="text-lg bg-lime-500 hover:bg-lime-400 focus:bg-lime-400 text-white px-8 py-2 rounded-md shadow-md transition-all"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Result />
      )}
    </div>
  );
};

export default Quiz;
