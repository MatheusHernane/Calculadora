import { useState } from "react";

export default function useCalculator() {
  const [num, setNum] = useState("");
  const [oldnum, setOldnum] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  function inputNum(e) {
    let input = e.target.value;
    if (num === "") {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum("");
    setOldnum("");
    setOperator("");
    setResult("");
  }

  function operation(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldnum(num);
    setNum("");
    setResult("");
  }

  function calculate() {
    if (operator === "/") {
      setResult(parseFloat(oldnum) / parseFloat(num)); //parseFloat converte a string em número
    } else if (operator === "x") {
      setResult(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "+") {
      setResult(parseFloat(oldnum) + parseFloat(num));
    } else if (operator === "-") {
      setResult(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "x²") {
      setResult(parseFloat(oldnum) * parseFloat(oldnum));
    } else if (operator === "x³") {
      setResult(parseFloat(oldnum) * parseFloat(oldnum) * parseFloat(oldnum));
    } else if (operator === "√") {
      setResult(Math.sqrt(parseFloat(oldnum)));
    }
    setOldnum("");
    setNum("");
    setOperator("");
  }

  return {
    num,
    inputNum,
    clear,
    operation,
    calculate,
    oldnum,
    operator,
    result,
  };
}
