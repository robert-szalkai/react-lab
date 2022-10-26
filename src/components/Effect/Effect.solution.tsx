import { Box } from "@mui/material";
import Counter from "components/Effect/Counter";
import Search from "components/Effect/Search";

const Effect = () => {
  return (
    <Box display="grid" gap={5}>
      <Counter />

      <Search />
    </Box>
  );
};

export default Effect;
