import { Box, Button, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { CounterContext } from "contexts/contextSolution"
import { useContext, useState } from "react"

const ContextCounterSolution = () => {
  const { counter, setCounter } = useContext(CounterContext)

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
          {counter}
        </Typography>
        <Button variant="contained" onClick={() => setCounter(counter + 1)}>
          increment
        </Button>
        <Button variant="contained" onClick={() => setCounter(counter - 1)}>
          decrement
        </Button>
        <Button variant="contained" onClick={() => setCounter(counter + 33)}>
          Increment by 33
        </Button>
      </Box>
    </Box>
  )
}

export default ContextCounterSolution