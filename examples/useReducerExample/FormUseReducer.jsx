import React, { useReducer, useRef } from 'react';

const init = (initialState) => {
  return {age:initialState.age,name:initialState.name}
}
const initialState = { name: '', age: null };

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setAge":
      return { ...state, age: action.payload };
    case "reset":
      return { ...init(initialState)};
    default:
      state;
  }
}

const FormUseReducer = () => {
  const inputNumber = useRef(null)
  const [state, dispatch] = useReducer(reducer, initialState,init);

  const handleReset = (e) => {
    dispatch({ type: "reset" })
  }
  return (
    <div>
      <h3>Ejemplo useReducer</h3>
      name: {state.name}
      <br />
      age: {state.age}
      <br />
      Name: <input type="text" onChange={(e) => dispatch({ type: "setName",payload: e.target.value })} placeholder="name" />
      Age:
      <input onChange={(e) => dispatch({ type: "setAge",payload:e.target.value })} placeholder="age" />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default FormUseReducer;
