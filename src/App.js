import React, { useState } from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Header from "./components/Header";
import Menu from "./components/Menu";
import AppButtons from "./components/AppButtons";

const useStyles = makeStyles({
  container: {
    marginTop: 20,
    position: "relative"
  }
});

const App = () => {
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
      </Container>
    </React.Fragment>
  );
};

export default App;
