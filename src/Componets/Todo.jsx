
import React, { useState, useEffect } from 'react'

const Todo = () => {
const [data, setData]= useState([])
const [todo, setTodo]= useState([])

// https://practice-ia-test.herokuapp.com/posts

// npx create-react-app my-app


const postData= async(data)=>{


let res= await fetch(`https://practice-ia-test.herokuapp.com/posts`,{
  method: "POST",
  headers: {"content-type": "application/json"},
  body:JSON.stringify({
data,
status:false
  })
})
let result= await res.json();

console.log(result)

}


const getData=async()=>{
try{
let res= await fetch(`https://practice-ia-test.herokuapp.com/posts`)
let data=await res.json();

// console.log(data);
setTodo(data)
}
catch(er){
console.log(er)
}

}

useEffect(() => {
  getData()

}, []);

  const handleChange=(e)=>{
setData(e.target.value)
// let inp= e.target.name
// setData({
//   ...data,
//   [inp]:e.target.value
// })
  }
  const handleClick=()=>{
    postData(data)
  }
  return (
    <div>
<input type="text" placeholder='enter something....'  value={data}
onChange={handleChange}/>
<button onClick={handleClick}>Add</button>


{
  todo && todo.map((item)=>(
      <div key={item.id} style={{background:"gray"}}>
        <h1>{item.data}</h1>

      </div>
  ))
}

    </div>
  )
}

export default Todo