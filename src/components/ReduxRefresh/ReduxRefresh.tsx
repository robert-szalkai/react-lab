import { Box, Button, Typography } from "@mui/material"
import ReduxSolution from "components/Redux/Redux-solution"
import State from "components/State"

const ReduxRefresh = () => {
  return (
    <Box display="grid" gap={3}>
     <ReduxSolution />
     <State />
    </Box>
  )
}

export default ReduxRefresh
