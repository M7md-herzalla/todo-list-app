
import { useRef, useState } from 'react';
import './App.css';

function App() {
      const [todos,setTodos]=useState([]);
      const inputRef=useRef();
      const handeleAddToDo=()=>{
      const text=inputRef.current.value;
      const newItem={completed : false ,text}
    setTodos([...todos,newItem])
    console.log(text);
    inputRef.current.value="";
  };
    const handelItemDone=(index)=>{   
    const newTodos=[...todos];
    newTodos[index].completed=!newTodos[index].completed;
    setTodos(newTodos);
  }
  const handelDeleteItem=(index)=>{
    const newTodos=[...todos];
   newTodos.splice(index,1); 
   setTodos(newTodos);
  }
     return(
     <div className='App'>
        <h2>TO  DO  LIST</h2>
        <ul>
          {todos.map(({text,completed},index)=>{
           
           return(
           <div className='list-item'>
           <li className={completed? "done" : ""} 
           key={index} 
           onClick={()=> handelItemDone(index) }>{text}</li> 
           
           <span onClick={()=>handelDeleteItem(index)}>X</span>
           </div>
           );
         
          })}
        </ul>
        <div className='controls'>
        <input className='inputText' ref={inputRef} placeholder='Enter What u wana' />
        <button className='addBtn' onClick={handeleAddToDo}>ADD </button>
        </div>
     </div>
     )
    
}

export default App;
