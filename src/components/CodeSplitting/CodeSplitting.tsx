import { Box, Tab, Tabs, Typography } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const CodeSplitting = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname.split("codeSplitting/")[1] || "";
  return (
    <Box display="grid">
      <Typography variant="h6">Code splitting exercise</Typography>

      <Box mb={5}>
        <Tabs value={pathname}>
          <Tab value="" label="Home" onClick={() => navigate("")} />
          <Tab
            value="threejs"
            label="threejs"
            onClick={() => navigate("threejs")}
          />
          <Tab
            value="lodash"
            label="Lodash"
            onClick={() => navigate("lodash")}
          />
        </Tabs>
      </Box>

      <Outlet />
    </Box>
  );
};

export default CodeSplitting;
