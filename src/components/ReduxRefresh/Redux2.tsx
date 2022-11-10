import { Box, Button, Typography } from "@mui/material"
import { blue } from "@mui/material/colors"
import { useEffect } from "react"
import { incrementSecond } from "redux/counter-refresh"
import { decrement, incrementByAmount } from "redux/counter-solution"
import { useAppSelector, useAppDispatch } from "redux/hooks"

const Redux2 = () => {
  const secondCount = useAppSelector(
    (state) => state.counterRefresh.secondCount
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log("redux2")
  })
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
          {secondCount}
        </Typography>
        <Button variant="contained" onClick={() => dispatch(incrementSecond())}>
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

export default Redux2
