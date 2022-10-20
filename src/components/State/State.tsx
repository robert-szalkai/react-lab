import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  return (
    <Box display="grid" gap={5}>
      <Typography variant="h3">Use state hook</Typography>

      <Box display="flex" gap={2} alignItems="center">
        <Button variant="contained">-</Button>
        <Typography>{count}</Typography>
        <Button variant="contained">+</Button>
      </Box>
    </Box>
  );
};

export default State;
