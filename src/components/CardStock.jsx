import { Box, Paper, Typography, styled } from "@mui/material";
import { Money, LocalOffer, Article, ShowChart } from "@mui/icons-material";

const StyledPaper = styled(Paper)({
  background: "#333",
  color: "white",
  display: "flex",
  padding: "10px 10px",
  flexDirection: "row",
  alignItems: "center",
  borderRight: "1px solid #444",
  justifyContent: "flex-start",
});

// eslint-disable-next-line react/prop-types
export const CardStock = ({ title, counter, percentage, status }) => {
  return (
    <Box
      sx={{
        background: "#333",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        alignContent: "space-evenly",
        justifyContent: "space-around",
        gap: 2,
        margin: "10px 0",
      }}
    >
      <StyledPaper>
        <LocalOffer sx={{ paddingRight: "50px" }} />
        <Typography variant="p" component="p">
          {title}
        </Typography>
      </StyledPaper>
      <StyledPaper>
        <Article sx={{ paddingRight: "50px" }} />
        <Typography variant="p" component="p">
          {counter}
        </Typography>
      </StyledPaper>
      <StyledPaper>
        <ShowChart sx={{ paddingRight: "50px" }} />
        <Typography variant="p" component="p">
          {percentage}
        </Typography>
      </StyledPaper>
      <StyledPaper>
        <Money sx={{ paddingRight: "50px" }} />
        <Typography variant="p" component="p">
          {status}
        </Typography>
      </StyledPaper>
    </Box>
  );
};
