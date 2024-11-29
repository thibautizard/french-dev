import React from 'react';

const Test = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <p>{count}</p>
    </>
  );
};

export default Test;
