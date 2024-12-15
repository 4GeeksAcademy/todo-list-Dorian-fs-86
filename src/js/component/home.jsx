import { useState } from "react";
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [state, setState] = useState([]);
  const [input, setInput] = useState('');

  const add = () => {
	setState([...state, input]);
    setInput('');
  };

  const deleteTask = (index) => {
    const filtered = state.filter((element, i) => {
      return i != index;
    });
    setState(filtered);
  };

  return (
    <div className="todo-list">
      <h1>TODO LIST</h1>
      <div className="input-add">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add Name"
      ></input>
      <button onClick={add}>+</button>
      </div>
      <ul>
        {state.length <= 0
          ? 'No Tasks'
          : state.map((item, index) => {
              return (
                <div>
                  <li>
                    {item}{' '}
                    <button className="delete"
                      onClick={() => {
                        deleteTask(index);
                      }}
                    >
                      x
                    </button>
                  </li>
                </div>
              );
            })}
      </ul>
    </div>
  );
};

export default Home;
