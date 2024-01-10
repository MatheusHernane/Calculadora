import { useState } from "react";

export default function useCalculator() {
  const [num, setNum] = useState("");
  const [oldnum, setOldnum] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);
  const [equal, setEqual] = useState("");
  const [second, setSecond] = useState("");

  function inputNum(e) {
    let input = e.target.value;
    if (num === "") {
      setNum(input);
      setResult(input);
    } else {
      setNum(num + input);
      setResult(result + input);
    }
  }

  function operation(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldnum(num);
    setNum("");
    setResult(num);
  }

  function calculate(e) {
    let calculateInput = e.target.value;
    setEqual(calculateInput);
    setSecond(num);
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
  }

  function clear() {
    setNum("");
    setOldnum("");
    setOperator("");
    setResult(0);
    setEqual("");
    setSecond("");
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
    equal,
    second,
  };
}
