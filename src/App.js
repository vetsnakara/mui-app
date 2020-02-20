import React, { useState } from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import {
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  IconButton
} from "@material-ui/core";
import { Add as AddIcon, Close as CloseIcon } from "@material-ui/icons";

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Snackbar from "@material-ui/core/Snackbar";
import MomentUtils from "@date-io/moment";

import Header from "./components/Header";
import Menu from "./components/Menu";
import AppButtons from "./components/AppButtons";
import List from "./components/List";

const useStyles = makeStyles({
  container: {
    marginTop: 50,
    position: "relative"
  },
  fab: {
    position: "fixed",
    bottom: 40,
    right: 40
  }
});

const App = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const [list, setList] = React.useState([
    { name: "item 1", description: "Some description here...", checked: false },
    { name: "item 2", description: "Some description here...", checked: true },
    { name: "item 3", description: "Some description here...", checked: false },
    { name: "item 4", description: "Some description here...", checked: false }
  ]);

  const classes = useStyles();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);

  const handleCheck = name => {
    setList(list =>
      list.map(item =>
        item.name === name ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleDeleteChecked = () => {
    setList(list => list.filter(item => !item.checked));
  };

  const handleAdd = item => {
    const { title: name, description } = item;

    setList(list => [
      {
        name,
        description,
        checked: false
      },
      ...list
    ]);
  };

  const handleClose = () => setDialogOpen(false);

  const changeDate = date => {
    setDate(date.toDate());
    setDialogOpen(false);
    setSnackBarOpen(true);
  };

  return (
    <React.Fragment>
      <Header onMenuOpen={handleMenuOpen} />
      <Menu open={menuOpen} onClose={handleMenuClose} />
      <Container fixed className={classes.container}>
        <AppButtons
          itemsChecked={list.filter(item => item.checked)}
          onDeleteChecked={handleDeleteChecked}
          onAdd={handleAdd}
        />
        <List items={list} onCheck={handleCheck} />
      </Container>

      <Dialog onClose={handleClose} open={dialogOpen}>
        <DialogTitle>Выберите дату!</DialogTitle>
        <DialogContent>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker value={date} onChange={changeDate} />
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            OK
          </Button>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Fab
        className={classes.fab}
        color="primary"
        aria-label="add"
        onClick={() => setDialogOpen(true)}
      >
        <AddIcon />
      </Fab>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={snackBarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackBarOpen(false)}
        message={`Дата успешно изменена!`}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => setSnackBarOpen(false)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </React.Fragment>
  );
};

export default App;
