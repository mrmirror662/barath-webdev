"use client";
import { useState } from "react";
export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const symbols: Record<string, string> = { add: "+", subtract: "-", multiply: "×", divide: "÷" };
  const calculate = async (op: string) => {
    const response = await fetch(`/api/lab5/calculator?a=${a}&b=${b}&operation=${op}`);
    const data = await response.json();
    if (data.error) {
      setError(data.error);
      setResult("");
      return;
    }
    setError("");
    setResult(`${data.a} ${symbols[op]} ${data.b} = ${data.result}`);
  };
  return (
    <div id="wd-calculator">
      <h3>Calculator (Next.js Web API)</h3>
      <label>A: <input className="rounded border px-2 py-1" id="wd-calculator-a"
        value={a} onChange={(e) => setA(e.target.value)} /></label>
      <label>B: <input className="rounded border px-2 py-1" id="wd-calculator-b"
        value={b} onChange={(e) => setB(e.target.value)} /></label>
      <label>Operation: <select className="rounded border px-2 py-1" id="wd-calculator-operation"
        value={operation}
        onChange={(e) => { setOperation(e.target.value); calculate(e.target.value); }}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
      </select></label>
      <button type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={() => calculate(operation)}>Calculate</button>
      <input className="rounded border px-2 py-1" id="wd-calculator-result" readOnly value={result} />
      {error && <p className="text-red-700">{error}</p>}
      <hr />
    </div>
  );
}
