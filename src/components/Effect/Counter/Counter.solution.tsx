import { Box, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(`Count is: ${count}`);
    }, 2000);

    return () => clearInterval(id);
  }, [count]);

  return (
    <Box display="grid" gap={3}>
      <Typography variant="h6">setInterval exercise</Typography>
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
          <Button variant="contained" onClick={() => setCount(count - 1)}>
            -
          </Button>
          <Button variant="contained" onClick={() => setCount(count + 1)}>
            +
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Counter;
