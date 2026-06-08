import React, { useState } from "react";
const App = () => {
  // usestate ka use ho rha ahi
  const [num, setNum] = useState(10);

  function increase() {
    setNum(num + 1);
  }
  function decrease() {
    setNum(num - 1);
  }
  function jumpBy10() {
    setNum(num + 10);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}> Decrease</button>
      <button onClick={jumpBy10}> jump by 10</button>
    </div>
  );
};
export default App;
