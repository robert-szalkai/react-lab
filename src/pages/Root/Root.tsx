import { Box } from "@mui/material";
import Sidebar from "pages/Root/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Box sx={{
        display: "flex",
        minHeight: "100%",
        width: "100%"
    }}>
      <Sidebar />

      <Box px={7} py={1.5}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Root;
