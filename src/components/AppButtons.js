import React from "react";

import { Button, Icon, Box, Popover } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/styles";
import { green, blueGrey } from "@material-ui/core/colors";

import Form from "../components/Form";

const useStyles = makeStyles({
  root: {
    marginBottom: 40
  },
  button: {
    marginRight: 20
  },
  plusButton: {
    position: "fixed",
    bottom: 40,
    right: 40
  }
});

const AddButton = withStyles({
  root: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  }
})(Button);

const RemoveButton = withStyles({
  root: {
    backgroundColor: blueGrey[500],
    "&:hover": {
      backgroundColor: blueGrey[700]
    }
  }
})(Button);

const AppButtons = ({ itemsChecked, onDeleteChecked, onAdd }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleOpen = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAdd = item => {
    handleClose();
    onAdd(item);
  };

  const open = Boolean(anchorEl);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AddButton
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={handleOpen}
        >
          Добавить элемент
        </AddButton>

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <Box p={2}>
            <Form onAdd={handleAdd} />
          </Box>
        </Popover>

        <RemoveButton
          className={classes.button}
          variant="contained"
          color="primary"
          disabled={itemsChecked.length === 0}
          onClick={onDeleteChecked}
        >
          Удалить выбранные элементы
        </RemoveButton>
        <Button
          variant="contained"
          startIcon={<Icon>fingerprint</Icon>}
          href="https://google.com"
          target="_blank"
        >
          Google
        </Button>
      </div>
    </React.Fragment>
  );
};

export default AppButtons;
