import { Box, Button, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { increment, decrement, incrementByAmount } from "redux/counter-solution"
import { useAppSelector, useAppDispatch } from "redux/hooks"

const Redux = () => {
  const { count } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
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
        <Button variant="contained" onClick={() => dispatch(increment())}>
          increment
        </Button>
        <Button variant="contained" onClick={() => dispatch(decrement())}>
          decrement
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(incrementByAmount(33))}
        >
          Increment by 33
        </Button>
      </Box>
    </Box>
  )
}

export default Redux
