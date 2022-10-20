import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ShowCount from "./ShowCount";

const wait = (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(true);
    }, ms);
  });
};

const State = () => {
  const [count, setCount] = useState(0);

  const onDecrement = () => {
    setCount(count - 1);
  };

  const onIncrement = async () => {
    await wait(1500);
    setCount((prevState) => prevState + 1);
  };

  return (
    <Box display="grid" gap={5}>
      <Typography variant="h3">Use state hook</Typography>

      <Box display="flex" gap={2} alignItems="center">
        <Button variant="contained" onClick={onDecrement}>
          -
        </Button>
        <Typography>{count}</Typography>
        <Button variant="contained" onClick={onIncrement}>
          +
        </Button>
      </Box>

      <ShowCount key={count} count={count} />
    </Box>
  );
};

export default State;
