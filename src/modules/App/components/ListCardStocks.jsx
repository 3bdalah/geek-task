import { CardStock } from "./CardStock";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export const ListCardStocks = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    import("./../data/DataStocks.json")
      .then((data) => {
        setStocks(data.default.stocks);
      })
      .catch((error) => {
        console.error("Error loading stocks data:", error);
      });
  }, []);

  return (
    <Box sx={{ margin: "20px 0", height: "85vh", overflowY: "scroll" }}>
      {stocks.map((stock, index) => (
        <CardStock key={index} {...stock} />
      ))}
    </Box>
  );
};
