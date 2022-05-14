import React , {useEffect, useState} from 'react'

function Ue1() {

  const [count , setCount] = useState(0)


useEffect(()=>{
   document.title = `This is my Title ${count}`
})

  return (
    <div>
      <h1>This is a Counter {count}</h1>
      <button onClick={()=>setCount(count+1)}>+1</button>
    </div>
  )
}

export default Ue1