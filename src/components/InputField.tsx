import React, { useRef } from 'react'
import "./styles.css";


interface Props {
    todo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>; 
    handleAdd: (e: React.FormEvent) => void;
}


export default function InputField({todo, setToDo, handleAdd}: Props) {
const inputRef = useRef<HTMLInputElement>(null);


  return (
    <div>
      <form className='input' onSubmit={(e) => {handleAdd(e)
      inputRef.current?.blur();
      }}>
        <input  
               ref={inputRef}
               
               type='input' 
                value={todo}
                onChange={
                  (e) => setToDo(e.target.value)
                } 
        
        placeholder='Enter a task' className='input_box'/>
        <button className='input_submit' type="submit">Go</button>

      </form>
    </div>
  )
}
