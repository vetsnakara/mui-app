import React from "react";

import { Button, Icon, Fab } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/styles";
import { green, blueGrey } from "@material-ui/core/colors";
import { Add as AddIcon } from "@material-ui/icons";

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

const AppButtons = ({ itemsChecked, onDeleteChecked }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AddButton
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          Добавить элемент
        </AddButton>
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
      <Fab className={classes.plusButton} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </React.Fragment>
  );
};

export default AppButtons;
