import React, { useState } from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Header from "./components/Header";
import Menu from "./components/Menu";
import AppButtons from "./components/AppButtons";
import List from "./components/List";

const useStyles = makeStyles({
  container: {
    marginTop: 50,
    position: "relative"
  }
});

const App = () => {
  const [list, setList] = React.useState([
    { name: "item 1", description: "Some description here...", checked: false },
    { name: "item 2", description: "Some description here...", checked: false },
    { name: "item 3", description: "Some description here...", checked: false },
    { name: "item 4", description: "Some description here...", checked: false }
  ]);

  const classes = useStyles();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <React.Fragment>
      <Header onMenuOpen={handleMenuOpen} />
      <Menu open={menuOpen} onClose={handleMenuClose} />
      <Container fixed className={classes.container}>
        <AppButtons />
        <List items={list} />
      </Container>
    </React.Fragment>
  );
};

export default App;
