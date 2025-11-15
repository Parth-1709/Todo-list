import React, { useEffect, useRef, useState } from 'react'
import { motion } from "motion/react"
function Todo() {
  const [todo,settodo] = useState([]);
  const [input,setinput] = useState("");
  const boundref = useRef(null);
  const addtodo =()=>{
    if(!input) return;
    const newTodo = {
      id:Date.now(),
      content:input,
      cut:false,
    }
    settodo([...todo,newTodo])
    setinput("");
  }
  const deleteitem=(id)=>{
    settodo(todo.filter(t=>t.id!=id))
  }
  const cutitem=(id)=>{
    settodo(
      todo.map(t=>t.id==id?{...t ,cut:!t.cut}:t)
    )
  }
  return (
    <div className='flex'>
      <div className='h-[70vh] w-full fixed pointer-none:' ref={boundref}></div>
      <div className='flex items-center justify-center m-2 p-4'>
      <div className='bg-zinc-600 flex gap-5 p-5 rounded-2xl fixed right-[50%] top-[50%] translate-x-40'>
        <input type="text" placeholder='Add Task Here' className='bg-zinc-500 p-2 rounded-2xl text-white' value={input}  onChange={(e)=>setinput(e.target.value)}/>
        <button className='px-8 py-2 rounded-full tracking-wider font-semibold bg-zinc-300 cursor-pointer hover:bg-zinc-400'onClick={addtodo}>Add</button>
      </div>
      </div>
      <div className='flex-wrap'>
        {todo.map(td=>(
          <motion.div drag dragConstraints={boundref} dragElastic={0.45} dragTransition={{bounceStiffness:700,bounceDamping:18}} key={td.id} className=' cursor-pointer flex absolute p-2 gap-10 bg-zinc-800 items-center rounded-2xl m-3 '>
            <div className={`text-zinc-200 tracking-wider text-xl ${td.cut?"line-through":"none"}`}>{td.content}</div>
            <div className='flex flex-col gap-2'>
              <button className='text-xs text-white p-2 rounded-xl bg-red-600 cursor-pointer hover:bg-red-400' onClick={()=>deleteitem(td.id)}>Delete</button>
              <button className='text-xs text-white p-2 rounded-xl bg-blue-500 cursor-pointer hover:bg-blue-800' onClick={()=>cutitem(td.id)}>{td.cut?"Undone":"Done"}</button>
          </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Todo