import React from 'react';

const UseStateExample = () => {
  const onAdd = () => {};
  const onRemove = () => {};
  return (
    <div>
      <h3>Counter useState</h3>
      count:
      <br />
      <button onClick={onAdd}>Add</button>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default UseStateExample;