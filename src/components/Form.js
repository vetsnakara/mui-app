import React from "react";

import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginBottom: 10
    }
  },
  submitButton: {
    marginTop: 20
  }
});

const initState = {
  title: "",
  description: "",
  errors: {}
};

const Form = ({ onAdd }) => {
  const [state, setState] = React.useState(initState);
  const classes = useStyles();

  const handleChange = ({ target: { name, value } }) => {
    setState(state => ({
      ...state,
      [name]: value.trim()
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { title, description } = state;

    const errors = {};

    if (!title || !description) {
      if (!title) errors.title = "Имя не может быть пусым";
      if (!description) errors.description = "Описание не может быть пусым";

      return setState(state => ({
        ...state,
        errors
      }));
    }

    const item = {
      title,
      description
    };

    onAdd(item);

    setState(initState);
  };

  const { title, description, errors } = state;

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        error={!!errors.title}
        name="title"
        label="Название"
        placeholder="Введите название ..."
        value={title}
        onChange={handleChange}
        helperText={errors && errors.title}
        autoComplete="off"
      />
      <TextField
        error={!!errors.description}
        name="description"
        label="Описание"
        multiline
        rows={3}
        placeholder="Введите описание ..."
        value={description}
        onChange={handleChange}
        helperText={errors.description}
        autoComplete="off"
      />
      <Button className={classes.submitButton} type="submit" variant="outlined">
        Ok
      </Button>
    </form>
  );
};

export default Form;
