import { questionsData } from ".";
import Quiz from "./Quiz";
import StartPage from "./StartPage";
import { Link } from "react-router-dom";
import MyContext from "../contexts/Context";
import { useReducer } from "react";
import { reducer, initialValue } from "../reducers/Reducer";

const Home = () => {
  // uses useReducer to manage state across the app
  const [state, dispatch] = useReducer(reducer, initialValue);

  // this function accepts the selected preferences
  const handleSelect = (key, e) => {
    const selected = e.target.value;
    dispatch({ type: "setoptions", key: key, selected: selected });
  };

  // this initiates quiz after selection of preferences
  const handleStart = () => {
    // sets the started value to true
    dispatch({ type: "isStarted" });
    // filters the questions based on users choices
    let filterData = questionsData.filter(
      (data) =>
        data.info.categorie === state.options.categorie &&
        data.info.mode === state.options.mode
    );
    // slices number of questions either to 5 or 10
    if (state.options.quantity === 5) filterData = filterData.slice(0, 5);
    else if (state.options.quantity === 10)
      filterData = filterData.slice(0, 10);
    // updates the default question data
    dispatch({ type: "filteredQuestion", filterData: filterData });
  };

  // this function handles single choice click
  const handleClick = (selected) => {
    // updates user choice on single question
    dispatch({ type: "userChoice", selected: selected });
  };

  // handles next question button click
  const handleSubmit = () => {
    // checks user's choice with the answer
    let res = false;
    if (
      state.userChoice ===
      state.filteredQuestion[state.currentQuestionIndex].answer
    ) {
      res = true;
    }
    // updates users answer
    dispatch({
      type: "userAnswer",
      answer: {
        id: state.currentQuestionIndex,
        answer: state.userChoice,
        result: res,
      },
    });

    // resets the previous question choice
    dispatch({ type: "resetChoice" });
    // updates the question index to go to the next
    dispatch({ type: "updatecurrentQuestionIndex" });
  };

  // resets the quiz to take again
  const handleRetryBtn = () => {
    dispatch({ type: "reset" });
  };

  // handles checking the answers
  const handleCheckBtn = () => {
    dispatch({ type: "checkBtn" });
  };

  return (
    <div>
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="font-bold text-3xl">Trivia</h1>
          <Link to="/about" className="font-bold text-xl">
            About
          </Link>
        </div>
      </header>

      {/* if start button is clicked render Quiz component else StartPage */}
      {state.isStarted ? (
        <MyContext.Provider
          value={{
            handleClick,
            handleSubmit,
            handleRetryBtn,
            handleCheckBtn,
            state,
          }}
        >
          <Quiz />
        </MyContext.Provider>
      ) : (
        <MyContext.Provider value={{ handleStart, handleSelect }}>
          <StartPage />
        </MyContext.Provider>
      )}
    </div>
  );
};

export default Home;
