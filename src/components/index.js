export const quizOptions = [
  {
    type: "categorie",
    title: "Choose a Catagorie of Questions:",
    options: ["javascript", "nodejs", "reactjs"],
  },
  {
    type: "quantity",
    title: "Number of Questions:",
    options: [5, 10],
  },
  {
    type: "mode",
    title: "Difficulty modes of Questions:",
    options: ["easy", "medium", "hard"],
  },
];

export const questionsData = [
  {
    id: 1,
    title: "question 1",
    query: "What is the purpose of the 'this' keyword in JavaScript?",
    explanation:
      "The 'this' keyword refers to the object that is currently executing the code. In a method, it refers to the owner object; in a function, it refers to the global object.",
    answer: "a",
    choices: [
      { a: "Refers to the object executing the code", selected: "a" },
      { a: "Refers to the global object", selected: "b" },
      { a: "Refers to the function that called it", selected: "c" },
      { a: "Refers to the last object created", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 2,
    title: "question 2",
    query: "How do you declare a variable in JavaScript?",
    explanation:
      "Variables in JavaScript can be declared using 'var', 'let', or 'const'. 'var' is function-scoped, while 'let' and 'const' are block-scoped.",
    answer: "b",
    choices: [
      { a: "Using 'variable'", selected: "a" },
      { a: "Using 'let'", selected: "b" },
      { a: "Using 'define'", selected: "c" },
      { a: "Using 'const'", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 3,
    title: "question 3",
    query: "What does the 'typeof' operator do in JavaScript?",
    explanation:
      "The 'typeof' operator returns a string indicating the type of the unevaluated operand.",
    answer: "c",
    choices: [
      { a: "Converts a value to a string", selected: "a" },
      { a: "Checks if a value is null", selected: "b" },
      { a: "Returns the type of the operand", selected: "c" },
      { a: "Assigns a type to a variable", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 4,
    title: "question 4",
    query: "How do you create a function in JavaScript?",
    explanation:
      "Functions in JavaScript can be created using function declarations, function expressions, or arrow functions.",
    answer: "d",
    choices: [
      { a: "Using 'function create()'", selected: "a" },
      { a: "Using 'var create = function()'", selected: "b" },
      { a: "Using 'function create() = () =>'", selected: "c" },
      { a: "Using 'const create = () =>'", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 5,
    title: "question 5",
    query: "What is the difference between '==' and '===' in JavaScript?",
    explanation:
      "'==' performs type coercion while comparing values, whereas '===' checks for both value and type equality.",
    answer: "b",
    choices: [
      { a: "Both check for value only", selected: "a" },
      { a: "'===' checks for both value and type", selected: "b" },
      { a: "'==' is stricter than '==='", selected: "c" },
      { a: "'===' performs type coercion", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 6,
    title: "question 6",
    query: "What is a closure in JavaScript?",
    explanation:
      "A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.",
    answer: "a",
    choices: [
      {
        a: "A function with access to its own scope and outer scopes",
        selected: "a",
      },
      { a: "A function that calls itself", selected: "b" },
      { a: "A function without parameters", selected: "c" },
      { a: "A function used to create classes", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 7,
    title: "question 7",
    query: "What is the difference between 'null' and 'undefined'?",
    explanation:
      "'null' is an assignment value that represents no value, while 'undefined' means a variable has been declared but not assigned a value.",
    answer: "c",
    choices: [
      { a: "'null' is used for uninitialized variables", selected: "a" },
      { a: "'undefined' is used for deliberate null values", selected: "b" },
      {
        a: "'null' represents no value, 'undefined' is uninitialized",
        selected: "c",
      },
      { a: "'null' and 'undefined' are the same", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 8,
    title: "question 8",
    query: "How do you create an object in JavaScript?",
    explanation:
      "Objects in JavaScript can be created using object literals, constructor functions, or the 'Object.create()' method.",
    answer: "a",
    choices: [
      { a: "Using object literals", selected: "a" },
      { a: "Using 'new Object()'", selected: "b" },
      { a: "Using 'Object.create()'", selected: "c" },
      { a: "Using 'function Object()'", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 9,
    title: "question 9",
    query: "What is the 'for...of' loop used for?",
    explanation:
      "The 'for...of' loop is used to iterate over iterable objects such as arrays, strings, and maps, providing a simple way to access elements.",
    answer: "b",
    choices: [
      { a: "To iterate over object keys", selected: "a" },
      { a: "To iterate over iterable objects", selected: "b" },
      { a: "To iterate over array indices", selected: "c" },
      { a: "To iterate over function properties", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 10,
    title: "question 10",
    query: "What is event delegation in JavaScript?",
    explanation:
      "Event delegation involves attaching a single event listener to a parent element to handle events for its child elements, improving performance and code maintainability.",
    answer: "d",
    choices: [
      {
        a: "Attaching event listeners directly to child elements",
        selected: "a",
      },
      { a: "Creating event handlers for each element", selected: "b" },
      { a: "Using multiple event listeners for efficiency", selected: "c" },
      {
        a: "Attaching a single event listener to a parent element",
        selected: "d",
      },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },

  // javascript medium

  {
    id: 11,
    title: "question 11",
    query: "What is the output of 'console.log(typeof NaN)'?",
    explanation:
      "The output is 'number' because NaN stands for 'Not-a-Number', but its type is still 'number'.",
    answer: "a",
    choices: [
      { a: "'number'", selected: "a" },
      { a: "'NaN'", selected: "b" },
      { a: "'undefined'", selected: "c" },
      { a: "'object'", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 12,
    title: "question 12",
    query: "What does 'Array.isArray()' method do?",
    explanation:
      "'Array.isArray()' determines whether the provided value is an array.",
    answer: "b",
    choices: [
      { a: "Checks if a value is an object", selected: "a" },
      { a: "Checks if a value is an array", selected: "b" },
      { a: "Checks if a value is a string", selected: "c" },
      { a: "Checks if a value is a number", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 13,
    title: "question 13",
    query: "How do you handle errors in JavaScript?",
    explanation:
      "Errors can be handled using 'try...catch' blocks, allowing you to catch and handle exceptions.",
    answer: "c",
    choices: [
      { a: "Using 'if...else' statements", selected: "a" },
      { a: "Using 'switch...case'", selected: "b" },
      { a: "'try...catch' blocks", selected: "c" },
      { a: "Using 'throw' statements", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 14,
    title: "question 14",
    query: "What is a JavaScript promise?",
    explanation:
      "A promise is an object representing the eventual completion or failure of an asynchronous operation.",
    answer: "d",
    choices: [
      { a: "A synchronous operation", selected: "a" },
      { a: "A function that returns a value", selected: "b" },
      { a: "An object with a static value", selected: "c" },
      {
        a: "An object representing an asynchronous operation",
        selected: "d",
      },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 15,
    title: "question 15",
    query: "What is 'setTimeout()' used for in JavaScript?",
    explanation:
      "'setTimeout()' is used to execute a function after a specified number of milliseconds.",
    answer: "a",
    choices: [
      { a: "To delay the execution of a function", selected: "a" },
      { a: "To repeatedly execute a function", selected: "b" },
      { a: "To pause code execution", selected: "c" },
      { a: "To execute code immediately", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 16,
    title: "question 16",
    query: "How do you create a promise in JavaScript?",
    explanation:
      "A promise is created using the 'Promise' constructor which takes a function with 'resolve' and 'reject' parameters.",
    answer: "d",
    choices: [
      { a: "Using 'new Async()'", selected: "a" },
      { a: "Using 'Promise.resolve()'", selected: "b" },
      { a: "Using 'new Promise()' without parameters", selected: "c" },
      { a: "Using 'new Promise(executor)'", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 17,
    title: "question 17",
    query: "What is 'localStorage' used for?",
    explanation:
      "'localStorage' is used to store data in the browser persistently across sessions.",
    answer: "b",
    choices: [
      { a: "To store data temporarily", selected: "a" },
      { a: "To store data persistently", selected: "b" },
      { a: "To manage cookies", selected: "c" },
      { a: "To store session-specific data", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 18,
    title: "question 18",
    query: "What is 'async/await' used for in JavaScript?",
    explanation:
      "'async/await' is used to work with asynchronous code, making it easier to read and write by handling promises.",
    answer: "c",
    choices: [
      { a: "To handle synchronous code", selected: "a" },
      { a: "To handle event listeners", selected: "b" },
      { a: "To work with asynchronous code", selected: "c" },
      { a: "To create new promises", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 19,
    title: "question 19",
    query: "How do you clone an object in JavaScript?",
    explanation:
      "You can clone an object using methods like 'Object.assign()' or the spread operator.",
    answer: "a",
    choices: [
      { a: "Using 'Object.assign()' or spread operator", selected: "a" },
      { a: "Using 'JSON.parse()' and 'JSON.stringify()'", selected: "b" },
      { a: "Using 'Array.slice()'", selected: "c" },
      { a: "Using 'Object.create()'", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 20,
    title: "question 20",
    query: "What is 'eval()' function used for?",
    explanation:
      "'eval()' executes a string of code as JavaScript, which can be risky and is generally discouraged due to security concerns.",
    answer: "d",
    choices: [
      { a: "To execute code from an external file", selected: "a" },
      { a: "To parse JSON strings", selected: "b" },
      { a: "To create a new function", selected: "c" },
      { a: "To execute a string of code", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },

  // Javscript hard

  {
    id: 21,
    title: "question 21",
    query: "What does 'Function.prototype.call()' do?",
    explanation:
      "'Function.prototype.call()' calls a function with a specified 'this' value and arguments provided individually.",
    answer: "a",
    choices: [
      {
        a: "Calls a function with a specified 'this' value and arguments",
        selected: "a",
      },
      { a: "Creates a new function with the same body", selected: "b" },
      { a: "Sets the prototype of a function", selected: "c" },
      { a: "Binds a function to a new object", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 22,
    title: "question 22",
    query: "What is the purpose of 'Object.freeze()'?",
    explanation:
      "'Object.freeze()' prevents modifications to an object, making it immutable.",
    answer: "b",
    choices: [
      { a: "Allows modifications to an object", selected: "a" },
      { a: "Prevents modifications to an object", selected: "b" },
      { a: "Clones an object", selected: "c" },
      { a: "Merges two objects", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 23,
    title: "question 23",
    query: "What does 'Object.defineProperty()' do?",
    explanation:
      "'Object.defineProperty()' defines a new property or modifies an existing property on an object.",
    answer: "c",
    choices: [
      { a: "Deletes a property from an object", selected: "a" },
      { a: "Returns the property descriptor", selected: "b" },
      { a: "Defines or modifies a property", selected: "c" },
      { a: "Lists all properties of an object", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 24,
    title: "question 24",
    query: "What does 'Object.getPrototypeOf()' return?",
    explanation:
      "'Object.getPrototypeOf()' returns the prototype of a specified object.",
    answer: "d",
    choices: [
      { a: "The constructor function of an object", selected: "a" },
      { a: "The prototype chain length", selected: "b" },
      { a: "The properties of an object", selected: "c" },
      { a: "The prototype of an object", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 25,
    title: "question 25",
    query: "What is the purpose of 'Object.create()'?",
    explanation:
      "'Object.create()' creates a new object with the specified prototype object and properties.",
    answer: "a",
    choices: [
      { a: "Creates a new object with a specified prototype", selected: "a" },
      { a: "Assigns properties to an existing object", selected: "b" },
      { a: "Merges multiple objects", selected: "c" },
      { a: "Defines a new class", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 26,
    title: "question 26",
    query: "What does 'Function.prototype.bind()' do?",
    explanation:
      "'Function.prototype.bind()' creates a new function that, when called, has its 'this' keyword set to the provided value.",
    answer: "b",
    choices: [
      { a: "Binds a function to a new context", selected: "a" },
      {
        a: "Creates a new function with a bound 'this' value",
        selected: "b",
      },
      { a: "Modifies the function's prototype", selected: "c" },
      { a: "Sets a default argument for the function", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 27,
    title: "question 27",
    query: "What is the purpose of 'Symbol()' in JavaScript?",
    explanation:
      "'Symbol()' creates a unique and immutable value that can be used as a unique property key.",
    answer: "c",
    choices: [
      { a: "Creates a new object", selected: "a" },
      { a: "Generates a random number", selected: "b" },
      { a: "Creates a unique property key", selected: "c" },
      { a: "Defines a new constructor function", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 28,
    title: "question 28",
    query: "What is 'Reflect.construct()' used for?",
    explanation:
      "'Reflect.construct()' allows you to call a constructor function with a specified 'this' value and arguments, similar to the 'new' operator.",
    answer: "a",
    choices: [
      { a: "Calls a constructor function with 'new'", selected: "a" },
      { a: "Modifies the constructor function", selected: "b" },
      { a: "Creates a new class", selected: "c" },
      { a: "Returns the prototype of a constructor", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 29,
    title: "question 29",
    query: "What does 'Proxy' do in JavaScript?",
    explanation:
      "'Proxy' allows you to create a handler object that defines custom behavior for fundamental operations (e.g., property lookup).",
    answer: "b",
    choices: [
      { a: "Creates a new function", selected: "a" },
      { a: "Defines custom behavior for operations", selected: "b" },
      { a: "Handles asynchronous operations", selected: "c" },
      { a: "Creates a new object", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 30,
    title: "question 30",
    query: "How do you use 'WeakMap' in JavaScript?",
    explanation:
      "'WeakMap' is a collection of key-value pairs where keys are objects and values can be any value. It allows for garbage collection of keys when they are no longer referenced elsewhere.",
    answer: "d",
    choices: [
      { a: "To store any data type as keys", selected: "a" },
      { a: "To handle asynchronous data", selected: "b" },
      { a: "To create a new object with weak references", selected: "c" },
      { a: "To store key-value pairs with weak references", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },

  // react easy

  {
    id: 1,
    title: "question 1",
    query: "What is ReactJS?",
    explanation:
      "ReactJS is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive user experience.",
    answer: "a",
    choices: [
      {
        a: "A JavaScript library for building user interfaces",
        selected: "a",
      },
      { a: "A CSS framework for styling", selected: "b" },
      { a: "A server-side framework", selected: "c" },
      { a: "A database management system", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 2,
    title: "question 2",
    query: "What does JSX stand for?",
    explanation:
      "JSX stands for JavaScript XML. It is a syntax extension that allows mixing HTML with JavaScript in React components.",
    answer: "b",
    choices: [
      { a: "JavaScript eXtension", selected: "a" },
      { a: "JavaScript XML", selected: "b" },
      { a: "JavaScript Execution", selected: "c" },
      { a: "JavaScript XQuery", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 3,
    title: "question 3",
    query: "How do you create a functional component in React?",
    explanation:
      "Functional components are created using JavaScript functions that return JSX. They can be simple and are used for components that don't require state management.",
    answer: "c",
    choices: [
      { a: "By using class syntax", selected: "a" },
      { a: "By extending React.Component", selected: "b" },
      { a: "By creating a function that returns JSX", selected: "c" },
      { a: "By using the 'createComponent' method", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 4,
    title: "question 4",
    query: "What is the purpose of 'useState' in React?",
    explanation:
      "'useState' is a Hook that allows you to add state management to functional components.",
    answer: "a",
    choices: [
      { a: "To add state to functional components", selected: "a" },
      { a: "To handle side effects", selected: "b" },
      { a: "To manage routing", selected: "c" },
      { a: "To access context", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 5,
    title: "question 5",
    query: "How do you pass data between components in React?",
    explanation:
      "Data is passed between components in React using props. Props are attributes you add to a component to pass data down to child components.",
    answer: "b",
    choices: [
      { a: "Using global variables", selected: "a" },
      { a: "Using props", selected: "b" },
      { a: "Using state", selected: "c" },
      { a: "Using context", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 6,
    title: "question 6",
    query: "What is 'useEffect' used for in React?",
    explanation:
      "'useEffect' is a Hook that lets you perform side effects in function components, such as data fetching or updating the DOM.",
    answer: "d",
    choices: [
      { a: "To manage state", selected: "a" },
      { a: "To handle routing", selected: "b" },
      { a: "To manage context", selected: "c" },
      { a: "To perform side effects", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 7,
    title: "question 7",
    query: "What is a React Hook?",
    explanation:
      "React Hooks are functions that let you use state and other React features without writing a class. Examples include useState and useEffect.",
    answer: "a",
    choices: [
      { a: "A function that uses React features", selected: "a" },
      { a: "A method of a React class", selected: "b" },
      { a: "A type of React component", selected: "c" },
      { a: "A special prop for components", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 8,
    title: "question 8",
    query: "How do you conditionally render a component in React?",
    explanation:
      "You can conditionally render components using JavaScript operators like 'if' statements or conditional (ternary) operators directly in the JSX.",
    answer: "b",
    choices: [
      { a: "Using 'if' statements in JSX", selected: "a" },
      { a: "Using conditional operators in JSX", selected: "b" },
      { a: "Using a separate component", selected: "c" },
      { a: "Using the 'render' method", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 9,
    title: "question 9",
    query: "What is the purpose of 'React.Fragment'?",
    explanation:
      "'React.Fragment' is used to group a list of children without adding extra nodes to the DOM.",
    answer: "c",
    choices: [
      { a: "To create a new component", selected: "a" },
      { a: "To manage state", selected: "b" },
      { a: "To group elements without adding extra nodes", selected: "c" },
      { a: "To handle events", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 10,
    title: "question 10",
    query: "How do you create a React context?",
    explanation:
      "You create a React context using React.createContext() and then provide values using a Context.Provider.",
    answer: "d",
    choices: [
      { a: "Using 'createContext' and 'Provider'", selected: "a" },
      { a: "Using 'useContext' Hook", selected: "b" },
      { a: "Using 'ReactDOM.render()'", selected: "c" },
      { a: "Using 'React.createContext()' and 'Provider'", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },

  // react medium

  {
    id: 11,
    title: "question 11",
    query: "What is 'useMemo' used for in React?",
    explanation:
      "'useMemo' is a Hook that returns a memoized value, which helps in optimizing performance by avoiding expensive calculations on every render.",
    answer: "a",
    choices: [
      { a: "To memoize expensive calculations", selected: "a" },
      { a: "To manage component state", selected: "b" },
      { a: "To handle side effects", selected: "c" },
      { a: "To create context values", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 12,
    title: "question 12",
    query: "How does React handle updates to state?",
    explanation:
      "React schedules updates to state asynchronously and re-renders the component when the state is updated, ensuring efficient and predictable updates.",
    answer: "b",
    choices: [
      { a: "Synchronously and immediately", selected: "a" },
      { a: "Asynchronously and batched", selected: "b" },
      { a: "Manually triggered", selected: "c" },
      { a: "By directly manipulating the DOM", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 13,
    title: "question 13",
    query: "What is 'React.memo()' used for?",
    explanation:
      "'React.memo()' is a higher-order component that memoizes a component to prevent unnecessary re-renders when the props haven't changed.",
    answer: "c",
    choices: [
      { a: "To memoize state", selected: "a" },
      { a: "To cache component methods", selected: "b" },
      { a: "To prevent unnecessary re-renders", selected: "c" },
      { a: "To handle side effects", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 14,
    title: "question 14",
    query: "What does 'useReducer' do in React?",
    explanation:
      "'useReducer' is a Hook that manages more complex state logic in functional components, similar to 'useState' but with a reducer function.",
    answer: "a",
    choices: [
      { a: "Manages complex state logic", selected: "a" },
      { a: "Handles side effects", selected: "b" },
      { a: "Provides context", selected: "c" },
      { a: "Renders a list of elements", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 15,
    title: "question 15",
    query: "What is the purpose of 'React.StrictMode'?",
    explanation:
      "'React.StrictMode' helps to identify potential problems in an application by activating additional checks and warnings for its descendants.",
    answer: "b",
    choices: [
      { a: "To optimize performance", selected: "a" },
      { a: "To identify potential problems", selected: "b" },
      { a: "To manage global state", selected: "c" },
      { a: "To handle routing", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 16,
    title: "question 16",
    query: "What does 'React.lazy()' do?",
    explanation:
      "'React.lazy()' enables dynamic import of components, which allows you to split code and load components only when they are needed.",
    answer: "d",
    choices: [
      { a: "Eagerly loads all components", selected: "a" },
      { a: "Immediately renders components", selected: "b" },
      { a: "Manages component state", selected: "c" },
      { a: "Dynamically imports components", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 17,
    title: "question 17",
    query: "How do you use 'useCallback' in React?",
    explanation:
      "'useCallback' is a Hook that returns a memoized callback function, which helps to avoid unnecessary re-creations of functions on every render.",
    answer: "a",
    choices: [
      { a: "To memoize callback functions", selected: "a" },
      { a: "To manage state", selected: "b" },
      { a: "To handle side effects", selected: "c" },
      { a: "To create a new component", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 18,
    title: "question 18",
    query: "What is 'useContext' used for?",
    explanation:
      "'useContext' is a Hook that allows you to access the value of a React context directly in functional components.",
    answer: "b",
    choices: [
      { a: "To create a new context", selected: "a" },
      { a: "To access context values", selected: "b" },
      { a: "To manage state", selected: "c" },
      { a: "To perform side effects", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 19,
    title: "question 19",
    query: "How do you update context values in React?",
    explanation:
      "Context values are updated by providing a new value to the Context.Provider component, which then propagates the change to all consuming components.",
    answer: "c",
    choices: [
      { a: "Using 'setContext' method", selected: "a" },
      { a: "Using 'updateContext' method", selected: "b" },
      { a: "By updating the value of Context.Provider", selected: "c" },
      { a: "Directly modifying context", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 20,
    title: "question 20",
    query: "What does 'React.Fragment' allow you to do?",
    explanation:
      "'React.Fragment' allows you to group multiple elements without adding extra nodes to the DOM.",
    answer: "d",
    choices: [
      { a: "Add extra nodes to the DOM", selected: "a" },
      { a: "Create a new component", selected: "b" },
      { a: "Manage component state", selected: "c" },
      { a: "Group elements without extra nodes", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },

  // react hard

  {
    id: 21,
    title: "question 21",
    query: "What is the purpose of 'React.createElement()'?",
    explanation:
      "'React.createElement()' is used to create React elements that can be rendered to the DOM, representing the virtual DOM.",
    answer: "b",
    choices: [
      { a: "To create new components", selected: "a" },
      { a: "To create React elements for rendering", selected: "b" },
      { a: "To manage state", selected: "c" },
      { a: "To handle side effects", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 22,
    title: "question 22",
    query: "How does React use the virtual DOM?",
    explanation:
      "React uses the virtual DOM to optimize rendering by keeping a lightweight copy of the actual DOM and only updating the parts that have changed.",
    answer: "d",
    choices: [
      { a: "To replace the actual DOM", selected: "a" },
      { a: "To manage state more efficiently", selected: "b" },
      { a: "To handle side effects", selected: "c" },
      { a: "To optimize rendering by minimizing updates", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 23,
    title: "question 23",
    query: "What is 'React.PureComponent' used for?",
    explanation:
      "'React.PureComponent' is a base class for components that only re-render when their props or state change, providing a shallow comparison for optimization.",
    answer: "c",
    choices: [
      { a: "To create new context", selected: "a" },
      { a: "To manage component state", selected: "b" },
      { a: "To optimize re-rendering by shallow comparison", selected: "c" },
      { a: "To handle asynchronous operations", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 24,
    title: "question 24",
    query: "How does 'React.forwardRef()' work?",
    explanation:
      "'React.forwardRef()' allows you to forward refs to a child component, enabling the parent component to directly access the child's DOM node.",
    answer: "b",
    choices: [
      { a: "It creates a new context", selected: "a" },
      { a: "It forwards refs to child components", selected: "b" },
      { a: "It manages component lifecycle", selected: "c" },
      { a: "It handles side effects", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 25,
    title: "question 25",
    query: "What is the role of 'shouldComponentUpdate' in React?",
    explanation:
      "'shouldComponentUpdate' is a lifecycle method that determines whether a component should re-render or not, allowing for performance optimization.",
    answer: "a",
    choices: [
      { a: "To control re-rendering", selected: "a" },
      { a: "To manage component state", selected: "b" },
      { a: "To handle context changes", selected: "c" },
      { a: "To create new elements", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 26,
    title: "question 26",
    query: "What does 'React.Suspense' allow you to do?",
    explanation:
      "'React.Suspense' lets you handle loading states for components that are dynamically imported or have async data, providing a fallback UI while loading.",
    answer: "d",
    choices: [
      { a: "To manage component state", selected: "a" },
      { a: "To optimize rendering performance", selected: "b" },
      { a: "To handle context updates", selected: "c" },
      { a: "To handle loading states and fallback UI", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 27,
    title: "question 27",
    query: "What is the purpose of 'React.StrictMode' in development?",
    explanation:
      "'React.StrictMode' helps to identify potential problems and warnings in the application during development, ensuring better practices and code quality.",
    answer: "b",
    choices: [
      { a: "To improve production performance", selected: "a" },
      { a: "To identify potential problems and warnings", selected: "b" },
      { a: "To handle component state", selected: "c" },
      { a: "To manage routing", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 28,
    title: "question 28",
    query: "What is 'ReactDOM.hydrate()' used for?",
    explanation:
      "'ReactDOM.hydrate()' is used to attach event handlers to server-rendered HTML, allowing React to manage the existing content effectively.",
    answer: "c",
    choices: [
      { a: "To replace server-rendered content", selected: "a" },
      { a: "To manage component state", selected: "b" },
      {
        a: "To attach event handlers to server-rendered HTML",
        selected: "c",
      },
      { a: "To handle context updates", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 29,
    title: "question 29",
    query: "How does 'React.StrictMode' affect class components?",
    explanation:
      "'React.StrictMode' applies additional checks and warnings to class components in development mode, helping identify potential issues and enforce best practices.",
    answer: "a",
    choices: [
      { a: "Applies additional checks and warnings", selected: "a" },
      { a: "Optimizes rendering performance", selected: "b" },
      { a: "Manages state efficiently", selected: "c" },
      { a: "Handles asynchronous operations", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 30,
    title: "question 30",
    query: "What does 'React.createContext()' provide?",
    explanation:
      "'React.createContext()' provides a Context object that can be used to share values between components without having to pass props explicitly through every level of the component tree.",
    answer: "b",
    choices: [
      { a: "A method for state management", selected: "a" },
      { a: "A Context object for prop drilling", selected: "b" },
      { a: "A utility for handling side effects", selected: "c" },
      { a: "A tool for managing component lifecycle", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },

  // nodejs easy

  {
    id: 1,
    title: "question 1",
    query: "What is Node.js?",
    explanation:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to execute JavaScript code server-side.",
    answer: "a",
    choices: [
      { a: "A JavaScript runtime for server-side scripting", selected: "a" },
      { a: "A CSS preprocessor", selected: "b" },
      { a: "A database management system", selected: "c" },
      { a: "A JavaScript library for the frontend", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 2,
    title: "question 2",
    query: "Which command initializes a new Node.js project?",
    explanation:
      "The command 'npm init' initializes a new Node.js project by creating a package.json file where project metadata and dependencies are listed.",
    answer: "b",
    choices: [
      { a: "npm start", selected: "a" },
      { a: "npm init", selected: "b" },
      { a: "npm install", selected: "c" },
      { a: "npm create", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 3,
    title: "question 3",
    query: "How do you include external modules in Node.js?",
    explanation:
      "In Node.js, you use the 'require()' function to include external modules and access their functionalities.",
    answer: "c",
    choices: [
      { a: "import()", selected: "a" },
      { a: "include()", selected: "b" },
      { a: "require()", selected: "c" },
      { a: "load()", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 4,
    title: "question 4",
    query: "What is the purpose of the 'fs' module in Node.js?",
    explanation:
      "The 'fs' (file system) module provides an API for interacting with the file system, allowing you to read and write files.",
    answer: "d",
    choices: [
      { a: "To handle HTTP requests", selected: "a" },
      { a: "To manage databases", selected: "b" },
      { a: "To handle streams", selected: "c" },
      { a: "To interact with the file system", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 5,
    title: "question 5",
    query: "Which method is used to start a Node.js HTTP server?",
    explanation:
      "The 'http.createServer()' method is used to create an HTTP server in Node.js, which can listen to incoming requests and send responses.",
    answer: "a",
    choices: [
      { a: "http.createServer()", selected: "a" },
      { a: "http.listen()", selected: "b" },
      { a: "http.startServer()", selected: "c" },
      { a: "http.run()", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 6,
    title: "question 6",
    query: "What is 'npm'?",
    explanation:
      "'npm' (Node Package Manager) is a package manager for JavaScript, used to manage project dependencies and install packages.",
    answer: "b",
    choices: [
      { a: "A JavaScript framework", selected: "a" },
      { a: "A package manager for JavaScript", selected: "b" },
      { a: "A database engine", selected: "c" },
      { a: "A task runner", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 7,
    title: "question 7",
    query: "What does the 'process.env' object contain?",
    explanation:
      "'process.env' contains environment variables available to the Node.js process, such as configuration settings and credentials.",
    answer: "c",
    choices: [
      { a: "User session data", selected: "a" },
      { a: "Local file system paths", selected: "b" },
      { a: "Environment variables", selected: "c" },
      { a: "Network configurations", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 8,
    title: "question 8",
    query: "What does the 'path' module in Node.js do?",
    explanation:
      "The 'path' module provides utilities for working with file and directory paths, such as joining and resolving paths.",
    answer: "a",
    choices: [
      { a: "Provides utilities for working with paths", selected: "a" },
      { a: "Handles network requests", selected: "b" },
      { a: "Manages database connections", selected: "c" },
      { a: "Parses incoming HTTP requests", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 9,
    title: "question 9",
    query: "What is 'async/await' in Node.js?",
    explanation:
      "'async/await' is a syntax for working with asynchronous code in a more synchronous-like manner, making it easier to write and understand.",
    answer: "d",
    choices: [
      { a: "A database management system", selected: "a" },
      { a: "A new JavaScript framework", selected: "b" },
      { a: "A command-line tool", selected: "c" },
      { a: "Syntax for working with asynchronous code", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 10,
    title: "question 10",
    query: "Which method is used to read a file asynchronously in Node.js?",
    explanation:
      "The 'fs.readFile()' method is used to read the contents of a file asynchronously, allowing you to handle file operations without blocking the event loop.",
    answer: "a",
    choices: [
      { a: "fs.readFile()", selected: "a" },
      { a: "fs.read()", selected: "b" },
      { a: "fs.open()", selected: "c" },
      { a: "fs.readSync()", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },

  // nodejs medium

  {
    id: 11,
    title: "question 11",
    query: "What is the purpose of the 'events' module in Node.js?",
    explanation:
      "The 'events' module provides a way to work with events and listeners in Node.js, allowing for event-driven programming.",
    answer: "b",
    choices: [
      { a: "To handle HTTP requests", selected: "a" },
      { a: "To work with events and listeners", selected: "b" },
      { a: "To manage file system operations", selected: "c" },
      { a: "To handle asynchronous operations", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 12,
    title: "question 12",
    query: "How do you handle errors in Node.js asynchronous code?",
    explanation:
      "Errors in asynchronous Node.js code are typically handled using error-first callbacks or by catching exceptions in promises using 'catch()' or 'try/catch' with 'async/await'.",
    answer: "a",
    choices: [
      { a: "Using error-first callbacks or try/catch", selected: "a" },
      { a: "Ignoring errors", selected: "b" },
      { a: "Logging errors to the console", selected: "c" },
      { a: "Using synchronous error handling", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 13,
    title: "question 13",
    query: "What is the purpose of the 'http' module in Node.js?",
    explanation:
      "The 'http' module provides utilities for creating HTTP servers and making HTTP requests, enabling communication between the server and clients.",
    answer: "c",
    choices: [
      { a: "To manage file system operations", selected: "a" },
      { a: "To handle asynchronous operations", selected: "b" },
      { a: "To create HTTP servers and requests", selected: "c" },
      { a: "To work with environment variables", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 14,
    title: "question 14",
    query: "How does Node.js handle concurrency?",
    explanation:
      "Node.js handles concurrency using a single-threaded event loop and non-blocking I/O operations, which allows it to handle many connections simultaneously without creating new threads for each one.",
    answer: "d",
    choices: [
      { a: "Using multi-threading", selected: "a" },
      { a: "By creating new processes for each request", selected: "b" },
      { a: "Using synchronous I/O operations", selected: "c" },
      { a: "Using an event loop and non-blocking I/O", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 15,
    title: "question 15",
    query: "What is 'npm install' used for?",
    explanation:
      "'npm install' is used to install dependencies listed in the package.json file or to install specific packages from the npm registry.",
    answer: "a",
    choices: [
      { a: "To install dependencies and packages", selected: "a" },
      { a: "To start the Node.js server", selected: "b" },
      { a: "To update the package.json file", selected: "c" },
      { a: "To create a new Node.js project", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 16,
    title: "question 16",
    query: "What does 'module.exports' do in Node.js?",
    explanation:
      "'module.exports' is used to export functions, objects, or values from a module so that they can be required and used in other files.",
    answer: "c",
    choices: [
      { a: "Imports modules into the current file", selected: "a" },
      { a: "Manages file system operations", selected: "b" },
      { a: "Exports functions and values from a module", selected: "c" },
      { a: "Handles asynchronous tasks", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 17,
    title: "question 17",
    query: "How can you make an HTTP request in Node.js?",
    explanation:
      "You can make HTTP requests in Node.js using the 'http' or 'https' modules, or by using third-party libraries like 'axios' or 'node-fetch'.",
    answer: "b",
    choices: [
      { a: "Using the 'fs' module", selected: "a" },
      { a: "Using 'http' or third-party libraries", selected: "b" },
      { a: "Using 'path' module", selected: "c" },
      { a: "Using 'events' module", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 18,
    title: "question 18",
    query: "What is the 'cluster' module used for in Node.js?",
    explanation:
      "The 'cluster' module allows you to create child processes that share the same server port, enabling you to utilize multiple CPU cores for better performance.",
    answer: "a",
    choices: [
      { a: "To create child processes for load balancing", selected: "a" },
      { a: "To manage file system operations", selected: "b" },
      { a: "To handle database operations", selected: "c" },
      { a: "To manage HTTP requests", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 19,
    title: "question 19",
    query: "What is the purpose of 'process.nextTick()' in Node.js?",
    explanation:
      "'process.nextTick()' allows you to schedule a callback to be invoked in the next iteration of the event loop, before any I/O operations.",
    answer: "d",
    choices: [
      { a: "To delay the execution of a callback", selected: "a" },
      { a: "To manage file system operations", selected: "b" },
      { a: "To handle HTTP requests", selected: "c" },
      {
        a: "To schedule a callback for the next iteration of the event loop",
        selected: "d",
      },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 20,
    title: "question 20",
    query: "What does 'npm update' do?",
    explanation:
      "'npm update' updates the dependencies listed in the package.json file to their latest versions according to the version ranges specified.",
    answer: "b",
    choices: [
      { a: "Installs new dependencies", selected: "a" },
      {
        a: "Updates existing dependencies to latest versions",
        selected: "b",
      },
      { a: "Uninstalls packages", selected: "c" },
      { a: "Initializes a new project", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },

  // nodejs hard

  {
    id: 21,
    title: "question 21",
    query: "What is the purpose of 'Node.js streams'?",
    explanation:
      "Node.js streams are used to handle large amounts of data efficiently by processing chunks of data as they are read or written, without loading the entire data into memory.",
    answer: "b",
    choices: [
      { a: "To handle HTTP requests", selected: "a" },
      { a: "To handle large amounts of data efficiently", selected: "b" },
      { a: "To manage file system operations", selected: "c" },
      { a: "To interact with databases", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 22,
    title: "question 22",
    query: "How does Node.js handle asynchronous operations?",
    explanation:
      "Node.js handles asynchronous operations using an event-driven, non-blocking I/O model, where operations are executed in the background and callbacks or promises are used to handle results.",
    answer: "d",
    choices: [
      { a: "Using multi-threading", selected: "a" },
      { a: "By blocking the event loop", selected: "b" },
      { a: "Using synchronous I/O operations", selected: "c" },
      { a: "Using event-driven, non-blocking I/O model", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 23,
    title: "question 23",
    query: "What is 'EventEmitter' in Node.js?",
    explanation:
      "'EventEmitter' is a class in Node.js that allows you to handle events and listeners, enabling custom event-driven programming.",
    answer: "a",
    choices: [
      { a: "A class for handling events and listeners", selected: "a" },
      { a: "A method for file operations", selected: "b" },
      { a: "A module for managing HTTP requests", selected: "c" },
      { a: "A tool for process management", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 24,
    title: "question 24",
    query: "How does 'process.env.NODE_ENV' help in Node.js applications?",
    explanation:
      "'process.env.NODE_ENV' is used to determine the current environment (e.g., development, production) and can be used to conditionally run code or set configurations based on the environment.",
    answer: "c",
    choices: [
      { a: "To manage database connections", selected: "a" },
      { a: "To handle file operations", selected: "b" },
      { a: "To set and check the current environment", selected: "c" },
      { a: "To process HTTP requests", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 25,
    title: "question 25",
    query: "What does 'node --inspect' do?",
    explanation:
      "'node --inspect' starts a Node.js application with the inspector enabled, allowing you to debug your code using tools like Chrome DevTools.",
    answer: "b",
    choices: [
      { a: "Starts the application in production mode", selected: "a" },
      { a: "Enables debugging with inspector tools", selected: "b" },
      { a: "Installs dependencies", selected: "c" },
      { a: "Manages environment variables", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 26,
    title: "question 26",
    query: "How do you handle uncaught exceptions in Node.js?",
    explanation:
      "Uncaught exceptions can be handled by listening to the 'uncaughtException' event on the process object, though it is generally recommended to handle errors gracefully in callbacks and promises.",
    answer: "d",
    choices: [
      { a: "By restarting the application", selected: "a" },
      { a: "By logging the exception", selected: "b" },
      { a: "By ignoring the exception", selected: "c" },
      { a: "By listening to 'uncaughtException' event", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 27,
    title: "question 27",
    query: "What is 'child_process.exec()' used for in Node.js?",
    explanation:
      "'child_process.exec()' is used to execute a shell command from within a Node.js script and obtain the output.",
    answer: "a",
    choices: [
      { a: "To execute shell commands", selected: "a" },
      { a: "To manage network connections", selected: "b" },
      { a: "To handle file operations", selected: "c" },
      { a: "To work with HTTP requests", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 28,
    title: "question 28",
    query: "What does 'async_hooks' module do in Node.js?",
    explanation:
      "'async_hooks' provides an API to track asynchronous resources and their lifecycle in Node.js, useful for debugging and monitoring asynchronous operations.",
    answer: "b",
    choices: [
      { a: "Tracks file system changes", selected: "a" },
      {
        a: "Tracks asynchronous operations and their lifecycle",
        selected: "b",
      },
      { a: "Manages network connections", selected: "c" },
      { a: "Handles process management", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 29,
    title: "question 29",
    query: "What is the 'vm' module used for in Node.js?",
    explanation:
      "'vm' (Virtual Machine) module allows you to compile and run code within a V8 virtual machine context, providing a way to execute code within Node.js safely.",
    answer: "a",
    choices: [
      {
        a: "To compile and run code in a virtual machine context",
        selected: "a",
      },
      { a: "To handle file operations", selected: "b" },
      { a: "To manage network connections", selected: "c" },
      { a: "To debug Node.js processes", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 30,
    title: "question 30",
    query: "What is 'libuv' in Node.js?",
    explanation:
      "'libuv' is a C library that provides asynchronous I/O operations and event handling in Node.js, enabling its non-blocking architecture.",
    answer: "c",
    choices: [
      { a: "A Node.js module for file operations", selected: "a" },
      { a: "A tool for managing packages", selected: "b" },
      {
        a: "A C library for asynchronous I/O and event handling",
        selected: "c",
      },
      { a: "A JavaScript runtime environment", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
];
