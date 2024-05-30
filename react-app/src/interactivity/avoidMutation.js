import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    //used non mutative spread operator ... for push
   setTodos([
     ...todos,
     {id:nextId++, title:title, done:false }
   ])
  }

  function handleChangeTodo(nextTodo) {

   setTodos(todos.map((todo)=>{
     if(todo.id === nextTodo.id){
       return {
         ...todo,
         title:nextTodo.title,done:nextTodo.done
       }
     }else{
       return todo;
     }
   }))

  }

  function handleDeleteTodo(todoId) {

      //used non mutative methods filter
    setTodos(
       todos.filter(t =>
      t.id !== todoId
    )
    )
   
    
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
