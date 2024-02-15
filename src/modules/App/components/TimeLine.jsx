import { Box } from "@mui/material";
import { Navbar } from "./Navbar";
import { ListCardStocks } from "./ListCardStocks";
export const TimeLine = () => {
  return (
    <Box bgcolor="#222" flex={9}>
      <Navbar />

      <ListCardStocks />
    </Box>
  );
};
