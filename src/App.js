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
        <i onClick={() => {
          if (toDo === "") {

          } else {
            setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])
            setTodo('')
          }
        }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj, index) => {

            return (<div className="todo" key={index}>
              <div className="left">
                <input onChange={(event) => {
                  console.log(event.target.checked)
                  setTodos(toDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      obj2.status = event.target.checked;
                    }
                    return obj2
                  }))
                  console.log(obj)
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
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
