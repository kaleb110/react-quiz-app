/* eslint-disable react/prop-types */
const CheckResult = ({ filteredQuestion, handleRetryBtn }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-4xl font-bold text-left mb-6 text-slate-700">
        Results
      </h1>
      <ul className="flex flex-col gap-4">
        {filteredQuestion.map((question) => (
          <div
            key={question.id}
            className="flex flex-col items-start p-4 bg-gray-100 rounded-md shadow-sm"
          >
            <li className="text-xl font-semibold text-gray-800 mb-2 text-left">
              Q{question.id}: {question.query}
            </li>
            <span className="text-lg text-green-700 font-medium mb-1 text-left">
              Answer: {question.answer.toUpperCase()}
            </span>
            <span className="text-md text-gray-700 text-left">
              {question.explanation}
            </span>
          </div>
        ))}
        <button
          type="submit"
          onClick={handleRetryBtn}
          className="w-32 bg-lime-500 hover:bg-lime-400 focus:bg-lime-400 text-white text-lg px-4 py-2 rounded-md shadow-md transition-all"
        >
          Retry
        </button>
      </ul>
    </div>
  );
};

export default CheckResult;
