import React, { useState } from "react";

import Header from "./components/Header";
import Menu from "./components/Menu";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(true);

  const handleMenuClose = () => setMenuOpen(false);

  return (
    <React.Fragment>
      <Header onMenuOpen={handleMenuOpen} />
      <Menu open={menuOpen} onClose={handleMenuClose} />
    </React.Fragment>
  );
};

export default App;
