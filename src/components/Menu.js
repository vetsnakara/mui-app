import React from "react";

import {
  Drawer,
  MenuList,
  MenuItem,
  ListItemIcon,
  Typography
} from "@material-ui/core";

import { green } from "@material-ui/core/colors";

import {
  Home as HomeIcon,
  ContactMail as ContactMailIcon
} from "@material-ui/icons";

import Icon from "@material-ui/core/Icon";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  menuList: {
    minWidth: 200,
    padding: "20px 0"
  },
  menuItem: {
    marginBottom: 10
  },
  iconLeft: {}
});

const menuItems = [
  { title: "Home", icon: HomeIcon },
  { title: "Contact", icon: ContactMailIcon }
];

const Menu = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Drawer open={open} onClose={onClose}>
      <MenuList className={classes.menuList}>
        {menuItems.map(({ title, icon: Icon }) => (
          <MenuItem className={classes.menuItem} key={title}>
            <ListItemIcon>
              <Icon color="primary" />
            </ListItemIcon>
            <Typography variant="body1">{title}</Typography>
          </MenuItem>
        ))}
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <Icon color="primary">star</Icon>
          </ListItemIcon>
          <Typography variant="body1">Favorites</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon>
            <Icon className="fa fa-plus-circle" style={{ color: green[500] }} />
          </ListItemIcon>
          <Typography variant="body1">Bookmarks</Typography>
        </MenuItem>
      </MenuList>
    </Drawer>
  );
};

export default Menu;
