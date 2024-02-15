// import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Box, Stack } from "@mui/material";
import { TimeLine } from "./components/TimeLine";
import { Filter } from "./components/Filter";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Box margin={0} sx={{ background: "#222" }}>
        <Stack
          flex={12}
          direction="row"
          spacing={1}
          justifyContent="space-between"
        >
          <Sidebar />
          <TimeLine />
          <Filter />
        </Stack>
      </Box>
      {/* <div></div> */}
    </>
  );
}

export default App;
