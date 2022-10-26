import { Box, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const State = () => {
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
        <Typography color={blue[500]} variant="h1"></Typography>
        <Box display="flex" gap={2} alignItems="center">
          <Button variant="contained">-</Button>
          <Button variant="contained">+</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default State;
