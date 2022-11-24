import { Box, Button, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { MultipleCountersContext } from "contexts/contextMultipleCounters"
import { useContext } from "react"

const Counter2 = () => {
  const { counter1, setCounter1 } = useContext(MultipleCountersContext)

  console.log("counter1")

  return (
    <Box display="grid" gap={3}>
      <Box
        display="grid"
        justifyItems="center"
        gap={5}
        p={10}
        border="2px solid"
        borderColor={blue[500]}
        mb={5}
      >
        <Typography color={blue[500]} variant="h1">
          {counter1}
        </Typography>
        <Button variant="contained" onClick={() => setCounter1(counter1 + 1)}>
          increment
        </Button>
        <Button variant="contained" onClick={() => setCounter1(counter1 - 1)}>
          decrement
        </Button>
      </Box>
    </Box>
  )
}

export default Counter2
