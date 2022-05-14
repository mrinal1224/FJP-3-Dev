import React , {useEffect, useState} from 'react'

function Ue1() {

  const [count , setCount] = useState(0)
  const [name , setName] = useState('Mrinal')


useEffect(()=>{
   document.title = `This is my Title ${count} ${name}`
   
} , []) // compoenetdidMount

  return (
    <div>
      <h1>This is a Counter {count}</h1>
      <h1>{name}</h1>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <button onClick={()=>setName('Adam')}>ChangeName</button>
    </div>
  )
}

export default Ue1