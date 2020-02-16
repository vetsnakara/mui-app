import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem
} from "@material-ui/core";
import { Menu as MenuIcon, MoreVert as MoreVertIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },

  toolBar: {
    alignItems: "center"
  },

  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const Header = ({ onMenuOpen }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const handleMenu = e => {
    setOpen(true);
    setAnchorEl(e.target);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          onClick={onMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6">
          Material UI App
        </Typography>
        <div>
          <IconButton onClick={handleMenu} color="inherit">
            <MoreVertIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Update</MenuItem>
            <MenuItem onClick={handleClose}>Help</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
