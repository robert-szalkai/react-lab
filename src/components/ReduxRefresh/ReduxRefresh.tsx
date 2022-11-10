import { Box, Button, Typography } from "@mui/material"
import ReduxSolution from "components/Redux/Redux-solution"
import Redux2 from "./Redux2"

const ReduxRefresh = () => {
  return (
    <Box display="grid" gap={3}>
      <ReduxSolution />
      <Redux2 />
    </Box>
  )
}

export default ReduxRefresh
