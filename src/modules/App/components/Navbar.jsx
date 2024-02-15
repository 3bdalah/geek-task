import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Badge,
} from "@mui/material";
import { Notifications } from "@mui/icons-material";
import { styled } from "@mui/system";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#222",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#444",
  padding: "0 5px",
  borderRadius: theme.shape.borderRadius,
  width: "70%",
}));

const Icons = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

export const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "gray",
      }}
    >
      <StyledToolBar>
        <Typography>Lama Dev</Typography>
        <Search>
          <InputBase
            sx={{ "&::placeholder": { color: "white" }, width: "100%" }}
            placeholder="Search..."
          />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="success">
            <Notifications color="white" />
          </Badge>
        </Icons>
      </StyledToolBar>
    </AppBar>
  );
};
