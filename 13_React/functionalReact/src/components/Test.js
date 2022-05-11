import React , {useState} from 'react'

function Test() {
  const [count , setCount] = useState(0)
  const [text , setText] = useState('')
  
  return (
    <div>
     <h1>This is a Counter {count}</h1>
     <button onClick={()=>setCount(count+1)}>+1</button>
     <button onClick={()=>setCount(count-1)}>-1</button>

     <input type='text' onChange={(e)=>setText(e.target.value)} />
     <h1>{text}</h1>
    </div>
  )
}

export default Test






