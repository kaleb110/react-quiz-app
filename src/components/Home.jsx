import { useState } from "react";
import { questionsData } from ".";
import Quiz from "./Quiz";
import StartPage from "./StartPage";
import { Link } from "react-router-dom";

const Home = () => {
  const [userChoice, setUserChoice] = useState("");
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [isCheck, setisCheck] = useState(false);
  const [isStarted, setisStarted] = useState(false);
  const [options, setoptions] = useState({
    categorie: "javascript",
    quantity: 5,
    mode: "easy",
  });
  const [filteredQuestion, setfilteredQuestion] = useState(questionsData);
  console.log(userChoice);
  console.log(userAnswer);
  const handleSubmit = (selected) => {
    setUserChoice(selected);
  };
  const handleClick = () => {
    let res = false;
    if (userChoice === filteredQuestion[currentQuestionIndex].answer) {
      res = true;
    }
    setUserAnswer([
      ...userAnswer,
      {
        id: currentQuestionIndex,
        answer: userChoice,
        result: res,
      },
    ]);

    setUserChoice("");
    setcurrentQuestionIndex((prevState) => prevState + 1);
  };

  const handleRetryBtn = () => {
    setUserChoice("");
    setUserAnswer([]);
    setcurrentQuestionIndex(0);
    setisStarted(false)
    setisCheck(false)
    setoptions({
      categorie: "javascript",
      quantity: 5,
      mode: "easy",
    });
  };

  const handleCheckBtn = () => {
    setisCheck(true);
  };

  const handleStart = () => {
    setisStarted(true);

    let filterData = questionsData.filter(
      (data) =>
        data.info.categorie === options.categorie &&
        data.info.mode === options.mode
    );
    if (options.quantity === 5) filterData = filterData.slice(0, 5);
    else if (options.quantity === 10) filterData = filterData.slice(0, 10);

    setfilteredQuestion(filterData);
  };

  const handleSelect = (key, e) => {
    const selected = e.target.value;

    setoptions((prevState) => ({
      ...prevState,
      [key]: selected,
    }));
  };
  return (
    <div>
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="font-bold text-3xl">
            Trivia
          </h1>
          <Link to="/about" className="font-bold text-3xl  ">
            About
          </Link>
        </div>
      </header>

      {isStarted ? (
        <Quiz
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          handleRetryBtn={handleRetryBtn}
          handleCheckBtn={handleCheckBtn}
          currentQuestionIndex={currentQuestionIndex}
          userAnswer={userAnswer}
          isCheck={isCheck}
          filteredQuestion={filteredQuestion}
        />
      ) : (
        <StartPage handleStart={handleStart} handleSelect={handleSelect} />
      )}
    </div>
  );
};

export default Home;
