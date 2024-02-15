import {
  ListItemAvatar,
  List,
  ListItem,
  ListItemText,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import userIcon from "../../../assets/man-user-circle-icon.svg";

function UserProfile() {
  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Box
              component="img"
              alt="user-image"
              src={userIcon}
              display="block"
              height={34}
            />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Mhmd Essam"
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
            >
              Beginner
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
}

export default UserProfile;
