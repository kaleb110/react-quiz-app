import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="font-bold text-3xl">
            Quiz App
          </Link>
          <Link to="/about" className="font-bold text-3xl">
            About
          </Link>
        </div>
      </header>
      <div className="w-full max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-left mb-6 text-slate-700">
          About
        </h1>
        <p className="text-lg text-gray-800 mb-4">
          Welcome to the Quiz App! This application is designed to provide an
          interactive platform for users to test their knowledge on various
          topics. Our aim is to make learning fun and engaging through quizzes
          that challenge and educate.
        </p>
        <h2 className="text-2xl font-semibold text-left mb-4 text-slate-700">
          Features
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li className="mb-2">Multiple choice questions on various topics.</li>
          <li className="mb-2">Immediate feedback on your answers.</li>
          <li className="mb-2">Track your progress and see your scores.</li>
          <li className="mb-2">Detailed explanations for each question.</li>
          <li className="mb-2">Easy navigation between questions.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-left mb-4 text-slate-700">
          Contact Us
        </h2>
        <p className="text-lg text-gray-800">
          If you have any questions or feedback, please feel free to reach out
          to us at{" "}
          <a href="mailto:kalisha123k@gmail.com" className="text-blue-500">
            kalisha123k@gmail.com
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default About;
