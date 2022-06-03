import React, { useEffect, useState } from "react";

const api_base = "http://localhost:3001";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    GetTodos();
  }, []);

  const GetTodos = () => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        console.error("Error: ", err);
      });
  };

  const toggleComplete = async (id) => {
    await fetch(api_base + "/todo/complete/" + id, {
      method: "PUT",
    });
    GetTodos();
  };

  const deleteTask = async (id) => {
    await fetch(api_base + "/todo/delete/" + id, {
      method: "DELETE",
    });
    GetTodos();
  };

  const addTask = async () => {
    await fetch(api_base+"/todo/new",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
          text: newTodo
      })
    });
    setNewTodo('');
    GetTodos();
    setPopupActive(false);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <div className="App">
      <h1>Welcome, Aditya</h1>
      {todos.length > 0 ? (
        <h4>Your Tasks</h4>
      ) : (
        <h4>You currently have no task</h4>
      )}
      <div className="todos">
        {todos &&
          todos.map((todo) => {
            const { _id, text, complete } = todo;
            return (
              <div
                id={_id}
                className={"todo" + (complete ? " is-complete" : "")}
              >
                <div
                  className="checkbox"
                  onClick={() => toggleComplete(_id)}
                ></div>
                <div className="text">{text}</div>
                <div className="delete-todo" onClick={() => deleteTask(_id)}>
                  x
                </div>
              </div>
            );
          })}
      </div>
      <div
        className="addPopup"
        onClick={() => {
          setPopupActive(true);
        }}
      >
        +
      </div>
      {popupActive ? (
        <div className="popup">
          <div
            className="closePopup"
            onClick={() => {
              setPopupActive(false);
            }}
          >
            X
          </div>
          <div className="content">
            <h3>Add Task</h3>
            <input
              type="text"
              className="add-todo-input"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <div className="button" onClick={addTask}>Create Task</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
