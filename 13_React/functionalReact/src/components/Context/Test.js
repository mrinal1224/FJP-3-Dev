import React, { useState, useContext } from "react";
let context = React.createContext(null);

function Test() {
  const [firstName, setFirstName] = useState("Adam");
  const [lastName, setLastName] = useState("Smith");
  return (
    <context.Provider value={{ firstName, lastName }}>
      <h1>This is Parent Component</h1>
      <ChildA />
    </context.Provider>
  );
}

function ChildA() {
  return (
    <>
      This is ChildA Component.
      <br />
      <ChildB />
    </>
  );
}

function ChildB() {
  return (
    <>
      This is ChildB Component.
      <br />
      <ChildC />
    </>
  );
}

function ChildC() {
  const { firstName, lastName } = useContext(context);
  return (
    <>
      <h1>This is Child C</h1>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>
    </>
  );
}

export default Test;
