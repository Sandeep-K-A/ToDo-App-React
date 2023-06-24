// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Hey, it's {daysOfWeek[currentDay]} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(event) => setTodo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...toDos, { text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((value) => {

            return (<div className="todo">
              <div className="left">
                <input value={value.status} type="checkbox" name="" id="" />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>)

          })
        }

      </div>
    </div>
  );
}

export default App;
