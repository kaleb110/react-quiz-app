/* eslint-disable react/prop-types */
import { quizOptions } from ".";

const StartPage = ({ handleStart, handleSelect }) => {
  return (
    <div className="relative px-8 py-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Quiz App
      </h1>
      <ul className="space-y-4">
        {quizOptions.map((quiz) => (
          <li key={quiz.title} className="flex flex-col gap-2">
            <label
              htmlFor={`dropdown-${quiz.title}`}
              className="text-lg font-medium text-gray-700"
            >
              {quiz.title}
            </label>
            <div className="relative">
              <select
                id={`dropdown-${quiz.title}`}
                name="dropdown"
                onChange={(e) => handleSelect(quiz.type, e)}
                defaultValue={quiz.options[0]}
                className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none w-full"
              >
                {quiz.options.map((option) => (
                  <option
                    key={option}
                    value={option}
                    className="bg-white hover:bg-gray-200 focus:bg-gray-200 transition-colors py-3"
                  >
                    {option}
                  </option>
                ))}
              </select>

              <svg
                className="absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <button
          onClick={handleStart}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:bg-blue-600 transition-all"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default StartPage;
