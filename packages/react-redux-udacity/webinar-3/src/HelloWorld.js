import React from "react";

const HelloWorld = ({ name }) => {
  return (
    <div className="hello-world">
      Hello World <strong>{name}!</strong>
      <div className="btn-group">
        <button className="btn btn-primary">Everyone</button>
        <button className="btn btn-primary">Carlos</button>
        <button className="btn btn-primary">from Redux</button>
      </div>
    </div>
  );
};

export default HelloWorld;
