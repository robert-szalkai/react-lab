import React from "react";
import { Box, Button, Typography } from "@mui/material";
import * as THREE from "three";

const Threejs = () => {
  console.log(THREE);

  const onClickHandler = () => {};

  return (
    <Box display="grid" gap={3} justifyItems="start">
      <Typography>
        The aim of the project is to create an easy to use, lightweight,
        cross-browser, general purpose 3D library. The current builds only
        include a WebGL renderer but WebGPU (experimental), SVG and CSS3D
        renderers are also available in the examples.
      </Typography>
      <Button onClick={onClickHandler}>Load async</Button>
    </Box>
  );
};

export default Threejs;
