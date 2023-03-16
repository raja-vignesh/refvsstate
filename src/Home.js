import React, { useRef, useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  const handleRef = () => {
    counterRef.current++;
  };
  console.log("re-rendering");
  return (
    <div className="container space-y-5 my-20">
      <h1 className="font-bold text-lg">{`Counter[useState] is ${counter}`}</h1>
      <h1 className="font-bold text-lg">{`Ref[useRef] is ${counterRef.current}`}</h1>

      <button
        className="bg-blue-500 py-2 px-4 rounded text-white"
        onClick={handleClick}
      >
        Increment Counter
      </button>
      <button
        className="bg-blue-500 py-2 px-4 rounded text-white mx-5"
        onClick={handleRef}
      >
        Increment Ref
      </button>
    </div>
  );
};

export default Home;
