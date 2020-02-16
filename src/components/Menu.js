import React from "react";

import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  menuList: {
    minWidth: 200,
    padding: "20px 10px"
  }
});

const Menu = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Drawer open={open} onClose={onClose}>
      <List className={classes.menuList}>
        <ListItem>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Contacts" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Menu;
