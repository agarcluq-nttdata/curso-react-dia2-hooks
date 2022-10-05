import * as React from 'react';
import UseStateExample from './examples/useStateExample';
import UseCallbackExample from './examples/useCallbackExample';
import UseReducerExample from './examples/useReducerExample/index'
import FormUseReducer from './examples/useReducerExample/FormUseReducer'
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Curso React Oct 22 - día 2!</h1>
      <h2>Hooks</h2>

      <UseStateExample />
      <UseCallbackExample/>
      <UseReducerExample/>
      <FormUseReducer/>
    </div>
  );
}
