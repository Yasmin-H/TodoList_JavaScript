import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';




const App: React.FC = () => {

// const [ state , setState] = useState(initialState);  <= format 
const [ todo , setToDo] = useState<string>("");
const [todos, setTodos] = useState<Todo[]>([]);

const handleAdd = (e:React.FormEvent ) => {
  e.preventDefault();

  if (todo) {
    setTodos([...todos, { id: Date.now(), todo, isDone:false}])
    setToDo("");
  }
};

console.log(todos);

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField  todo={todo} setToDo={setToDo} handleAdd={handleAdd}/>
      
      


    </div>
  );
}

export default App;
