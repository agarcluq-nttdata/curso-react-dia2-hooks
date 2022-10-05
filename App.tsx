import * as React from 'react';
import UseStateExample from './examples/useStateExample';
import UseCallbackExample from './examples/useCallbackExample';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <UseStateExample />
      <UseCallbackExample/>
    </div>
  );
}
