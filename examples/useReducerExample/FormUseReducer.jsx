import React, { useReducer } from 'react';

const FormUseReducer = () => {
  const dispatchName = (e) => {};

  const dispatchAge = (e) => {};

  const reset = (e) => {};
  return (
    <div>
      <h3>Ejemplo useReducer</h3>
      name: {}
      <br />
      age: {}
      <br />
      Name: <input type="text" onChange={dispatchName} placeholder="name" />
      Age:
      <input type="number" onChange={dispatchAge} placeholder="age" />
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default FormUseReducer;
