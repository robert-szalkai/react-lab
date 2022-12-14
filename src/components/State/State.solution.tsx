import { Box, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
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
    <Box display="grid" gap={3}>
      <Typography variant="h6">useState exercise</Typography>

      <Box
        display="grid"
        justifyItems="center"
        gap={5}
        p={10}
        border="2px solid"
        borderColor={blue[500]}
        mb={5}
      >
        <Typography color={blue[500]} variant="h1">
          {count}
        </Typography>
        <Box display="flex" gap={2} alignItems="center">
          <Button variant="contained" onClick={onDecrement}>
            -
          </Button>
          <Button variant="contained" onClick={onIncrement}>
            +
          </Button>
        </Box>
      </Box>

      <ShowCount key={count} count={count} />
    </Box>
  );
};

export default State;
