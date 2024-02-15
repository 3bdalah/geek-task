import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import {
  Home,
  NotificationsNone,
  School,
  Settings,
  FolderCopy,
} from "@mui/icons-material";

export const Sidebar = () => {
  return (
    <Box
      bgcolor="skyblue"
      p={2}
      sx={{
        height: "100vh",
        backgroundColor: "#111",
        color: "white",
        width: "200px",
        margin: 0,
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box
        sx={{
          position: "block  ",
          height: "100%",
          backgroundColor: "#111",
        }}
      >
        <List>
          <ListItem disabled padding="true">
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <NotificationsNone sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Alerts" />
            </ListItemButton>
          </ListItem>
          <ListItem disabled padding="true">
            <ListItemButton component="a" href="home">
              <ListItemIcon color="white">
                <School sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Training" />
            </ListItemButton>
          </ListItem>

          <ListItem disabled padding="true">
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Settings sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Automation" />
            </ListItemButton>
          </ListItem>

          <ListItem disabled padding="true">
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <FolderCopy sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Portfolio" />
            </ListItemButton>
          </ListItem>
          <ListItem disabled padding="true">
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Trading" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhuman&psig=AOvVaw1yOO98zamF8IB4L0LXXk82&ust=1708053386235000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLicq-ywrIQDFQAAAAAdAAAAABAE"
                  alt="test"
                />
                <Typography>name user </Typography>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
