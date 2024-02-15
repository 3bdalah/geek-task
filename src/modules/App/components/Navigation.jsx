import { Fragment } from "react";

import {
  Box,
  Grid,
  List,
  ListItem,
  Typography,
  Link,
  SvgIcon,
} from "@mui/material";

import { routingList } from "../../../helpers/routingList";

import UserProfile from "./UserProfile";

import companyLogo from "../../../assets/fix-fast-icon.svg";

function Navigation() {
  const routingItems = routingList();
  const renderListItemContent = (item) => (
    <Fragment>
      <Box
        sx={{
          p: "10px",
        }}
      >
        <SvgIcon>
          <path d={item.icon} />
        </SvgIcon>
      </Box>

      <Typography
        component="span"
        variant="body1"
        sx={{
          flexGrow: 1,
        }}
      >
        {item.navName}
      </Typography>
    </Fragment>
  );
  const renderListItem = (item, isSubItem) => (
    <ListItem
      key={item.navName}
      expanded={true}
      isSubItem={isSubItem}
      active={isSubItem && isRouteMatching(item)}
    >
      <Link
        href={item.navLink}
        underline="none"
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          color: "inherit",
        }}
      >
        {renderListItemContent(item, isSubItem)}
      </Link>
    </ListItem>
  );
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      gap={2}
      alignItems="center"
      bgcolor="skyblue"
      sx={{
        height: "100vh",
        backgroundColor: "#111",
        color: "white",
      }}
    >
      <Grid item xs={1}>
        <Box
          component="img"
          alt="companyLogo"
          src={companyLogo}
          display="block"
          height={60}
          mt={1}
        />
      </Grid>
      <Grid item container direction="column" sx={{ flexGrow: 1 }}>
        <Grid item component="nav" sx={{ px: 3 }}>
          <List disablePadding>
            {routingItems.map(
              (item) =>
                item.active && (
                  <Fragment key={item.navName}>
                    {renderListItem(item)}

                    {!!item.subItems && (
                      <Collapse
                        in={item.navName === openedItem}
                        sx={{ ml: 5, mt: -2, mb: 2 }}
                      >
                        <List>
                          {item.subItems.map(
                            (subItem) =>
                              subItem.active && renderListItem(subItem, true)
                          )}
                        </List>
                      </Collapse>
                    )}
                  </Fragment>
                )
            )}
          </List>
        </Grid>
      </Grid>
      <Grid item>
        <UserProfile />
      </Grid>
    </Grid>
  );
}

export default Navigation;
