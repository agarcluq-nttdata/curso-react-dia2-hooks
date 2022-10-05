import React, {useState} from 'react';
import UseStateExample from './examples/useStateExample';
import UseCallbackExample from './examples/useCallbackExample';
import UseReducerExample from './examples/useReducerExample/index'
import FormUseReducer from './examples/useReducerExample/FormUseReducer'
import './style.css';

const renderComponent = (state = "useState") => {

    switch (state) {
      case "useState":
        return <UseStateExample />
      case "useReducer1":
        return <UseCallbackExample/>
      case "useReducer2":
        return <FormUseReducer/>
      case "useCallback":
          return <UseCallbackExample/>
      default:
        return <UseStateExample />
    }
  
}

export default function App() {
  const [navType,setNavType] = useState('useState')
  return (
    <div>
      <h1>Curso React Oct 22 - día 2!</h1>
      <h2>Hooks</h2>
      <button onClick={()=>setNavType('useState')}>UseState</button>
      <button onClick={()=>setNavType('useReducer1')}>UseReducer Counter</button>
      <button onClick={()=>setNavType('useReducer2')}>UseReducer Form</button>
      <button onClick={()=>setNavType('useCallback')}>UseCallback</button>
      {renderComponent(navType)}
      
      {/* <UseStateExample />
      <UseCallbackExample/>
      <UseReducerExample/>
      <FormUseReducer/> */}
    </div>
  );
}
