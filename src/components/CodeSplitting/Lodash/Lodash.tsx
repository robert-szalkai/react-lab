import React from "react";
import * as _ from "lodash";
import { Box, Typography } from "@mui/material";

const Lodash = () => {
  console.log(_);
  return (
    <Box>
      <Typography>
        Lodash makes JavaScript easier by taking the hassle out of working with
        arrays, numbers, objects, strings, etc.
      </Typography>
    </Box>
  );
};

export default Lodash;
