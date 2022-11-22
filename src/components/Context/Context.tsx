import { Box, Button, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { useState } from "react"

const ContextCounter = () => {
  const [count, setCount] = useState(0)

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
          {count}
        </Typography>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          increment
        </Button>
        <Button variant="contained" onClick={() => setCount(count - 1)}>
          decrement
        </Button>
        <Button variant="contained" onClick={() => setCount(count + 33)}>
          Increment by 33
        </Button>
      </Box>
    </Box>
  )
}

export default ContextCounter