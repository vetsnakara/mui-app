import React from "react";

import {
  List as MuiList,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";

const List = ({ items }) => {
  return (
    <MuiList component="nav" aria-label="main mailbox folders">
      {items.map(item => (
        <React.Fragment key={item.name}>
          <ListItem>
            <ListItemText primary={item.name} secondary={item.description} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </MuiList>
  );
};

export default List;
