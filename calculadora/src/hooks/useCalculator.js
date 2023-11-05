import { useState } from "react";

export default function useCalculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldnum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    let input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
    setOldnum(0);
    setOperator(0);
  }

  function operation(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldnum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num)); //parseFloat converte a string em número
    } else if (operator === "x") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "x²") {
      setNum(parseFloat(oldnum) * parseFloat(oldnum));
    } else if (operator === "x³") {
      setNum(parseFloat(oldnum) * parseFloat(oldnum) * parseFloat(oldnum));
    } else if (operator === "√") {
      setNum(Math.sqrt(parseFloat(oldnum)));
    }
  }
  return { num, inputNum, clear, operation, calculate };
}
