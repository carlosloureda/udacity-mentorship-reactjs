import React from "react";
import { store } from "./store";
import { setName } from "./actions";

import { from } from "rxjs";
const ButtonGroup = ({ names }) => (
  <div className="btn-group">
    {names.map((name, i) => (
      <button
        key={i}
        className="btn btn-primary"
        onClick={onChangeName}
        data-name={name}
      >
        {name}
      </button>
    ))}
  </div>
);

const onChangeName = e => {
  store.dispatch(setName(e.target.dataset.name));
};

export default ButtonGroup;
