import React, { useState } from "react";

type TShowCountProps = {
  count: number;
};

const ShowCount: React.FC<TShowCountProps> = ({ count }) => {
  const [counter, setCounter] = useState(count);

  return <div>The count is: {counter}</div>;
};

export default ShowCount;
