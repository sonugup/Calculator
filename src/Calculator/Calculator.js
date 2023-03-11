import React, {useState} from 'react'
import { number } from 'yargs'
import "./calculator.css"

const Calculator = () => {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")

    const [result, setResult] =useState("")

    const addNumber = () => {
        let number=Number(num1) + Number(num2)
        setResult(number)
    }
    const subNumber = () => {
        let number=Number(num1) - Number(num2)
        setResult(number)
    }
    const mulNumber = () => {
        let number=Number(num1) * Number(num2)
        setResult(number)
    }
    const divNumber = () => {
        let number=Number(num1) / Number(num2)
        setResult(number)
    }
  return (
    <div className='box'>
      <div className='boxdiv'>
        <h1>Your Output {result} </h1>
        <input type="number" value={num1} onChange={(el) => setNum1(el.target.value)} placeholder="Number1" />
        <input type="number" value={num2} onChange={(el) => setNum2(el.target.value)} placeholder="Number2"/>

<div className='btn'>
<button onClick={() => addNumber(num1, num2)} >Add</button>
        <button onClick={() => subNumber(num1, num2)} >Sub</button>
        <button onClick={() => mulNumber(num1, num2)} >Mul</button>
        <button onClick={() => divNumber(num1, num2)} >Div</button>
</div>
         </div>
    </div>
  )
}

export default Calculator
