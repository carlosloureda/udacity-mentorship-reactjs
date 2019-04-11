import React from "react";

const HelloWorld = ({ name }) => {
  return (
    <div className="hello-world">
      Hello World <strong>{name}!</strong>
    </div>
  );
};

export default HelloWorld;
