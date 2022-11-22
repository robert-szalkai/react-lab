import { Box, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { NavLink } from "react-router-dom"
import logo from "logo.svg"
import "./Sidebar.css"

const pages = [
  {
    title: "useState",
    path: "useState",
  },
  {
    title: "useEffect",
    path: "useEffect",
  },
  {
    title: "context",
    path: "context",
  },
  {
    title: "contextCounters",
    path: "contextCounters",
  },
]

const Sidebar = () => {
  return (
    <Box
      sx={{
        display: "grid",
        alignContent: "start",
        backgroundColor: grey[100],
      }}
    >
      <Box
        display="flex"
        gap={0.5}
        alignItems="center"
        px={2.5}
        py={1}
        borderBottom="1px solid"
        borderColor={grey[300]}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h6">Doctari React Labs</Typography>
      </Box>

      <Box p={2.5} display="grid" gap={0.5}>
        {pages.map((page) => {
          return (
            <NavLink
              key={page.path}
              to={page.path}
              className={({ isActive }) => {
                return ["nav-link", isActive ? "active" : ""].join(" ")
              }}
            >
              {page.title}
            </NavLink>
          )
        })}
      </Box>
    </Box>
  )
}

export default Sidebar
