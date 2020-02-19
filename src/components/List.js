import React from "react";

import {
  List as MuiList,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Divider
} from "@material-ui/core";

import { FavoriteBorder, Favorite } from "@material-ui/icons";

const List = ({ items, onCheck }) => {
  return (
    <MuiList component="nav" aria-label="main mailbox folders">
      {items.map(item => (
        <React.Fragment key={item.name}>
          <ListItem>
            <ListItemIcon>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                onChange={() => onCheck(item.name)}
                checked={item.checked}
              />
            </ListItemIcon>
            <ListItemText primary={item.name} secondary={item.description} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </MuiList>
  );
};

export default List;
