import { Grid, Box, AppBar, Toolbar, Drawer, styled } from "@mui/material";

import Navigation from "../components/Navigation";

const OPENED_DRAWER_WIDTH = 280;
const CLOSED_DRAWER_WIDTH = 96;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  position: "relative",
  flexGrow: 1,
  display: "flex",
  flexFlow: "column",
  margin: theme.spacing(3, 0, 3, 0),
  ...(open && {
    marginLeft: OPENED_DRAWER_WIDTH,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  }),
  ...(!open && {
    marginLeft: CLOSED_DRAWER_WIDTH,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  }),
}));

function AppContainer({ children }) {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <AppBar
        position="fixed"
        sx={{ color: "primary.main", backgroundColor: "white" }}
      >
        <Grid container direction="column">
          <Grid item>
            <Toolbar>{/* <Header /> */}</Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      <Toolbar />

      <Drawer variant="permanent" open={true}>
        <Navigation />
      </Drawer>
      <Main open={true}>
        <Box pr={3} m={2} flexGrow={1} display="flex" flexDirection="column">
          {children}
        </Box>
      </Main>
    </Box>
  );
}

export default AppContainer;
