import { Box, Button, Typography } from "@mui/material"
import Counter1 from "./ContextCounter1"
import Counter2 from "./ContextCounter2"

const ContextMultipleCounters = () => {
  return (
    <Box display="grid" gap={3}>
      <Counter1 />
      <Counter2 />
    </Box>
  )
}

export default ContextMultipleCounters