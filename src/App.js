import React, {useState} from "react"
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import OperatorButton from "./components/OperatorButton";

function App() {
  const [count, setCount] = useState(0)
  let operator;

  const incrementCount = increment => {
    switch(operator){
      case 'C': setCount(0);
              break;
      case '+': setCount(count + increment);
                break;
      case '-': setCount(count - increment);
                break;
      case 'x': setCount(count * increment);
                break;
      case '/': setCount(count / increment);
                break;
      default: break;
    }
  }

  const operatorFunction = operatorParameter => {
    operator = operatorParameter;

    if (operatorParameter === 'C')
      setCount(0);
  }

  return (
    <div className="App">
      <p/>
      <span>result: {count}</span>
      <div className="grid grid-cols-4 gap-4">
        <OperatorButton operator={'C'} onClickFunction={operatorFunction}/>
        <p/>
        <p/>
        <OperatorButton operator={'/'} onClickFunction={operatorFunction}/>

        <Button increment={7} onClickFunction={incrementCount}/>
        <Button increment={8} onClickFunction={incrementCount}/>
        <Button increment={9} onClickFunction={incrementCount}/>
        <OperatorButton operator={'x'} onClickFunction={operatorFunction}/>

        <Button increment={4} onClickFunction={incrementCount}/>
        <Button increment={5} onClickFunction={incrementCount}/>
        <Button increment={6} onClickFunction={incrementCount}/>
        <OperatorButton operator={'-'} onClickFunction={operatorFunction}/>

        <Button increment={1} onClickFunction={incrementCount}/>
        <Button increment={2} onClickFunction={incrementCount}/>
        <Button increment={3} onClickFunction={incrementCount}/>
        <OperatorButton operator={'+'} onClickFunction={operatorFunction}/>

        <p/>
        <Button increment={0} onClickFunction={incrementCount}/>
        <p/>
        <OperatorButton operator={'='} onClickFunction={operatorFunction}/>
      </div>
    </div>
  );
}

export default App;
