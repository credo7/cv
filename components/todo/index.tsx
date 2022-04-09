import style from "./todo.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface todo {
  id: string;
  text: string;
}

const initialState = [
  { id: "1", text: "Buy milk" },
  { id: "2", text: "Clean my room" },
  { id: "3", text: "Ask classmate about homework" },
  { id: "4", text: "Invite Vitaly to my company" },
];

export default function Todo() {
  const [todoList, setTodoList] = useState(initialState);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      taskInput: { value: string };
    };
    setTodoList([
      ...todoList,
      { id: uuidv4(), text: formElements.taskInput.value },
    ]);
    formElements.taskInput.value = "";
  };

  const handleDelete = (todo: todo) => {
    const updatedArray = todoList.filter((todoItem) => todoItem.id != todo.id);
    setTodoList(updatedArray);
  };

  return (
    <div className={style.container}>
      <div className={style.container_todo}>
        <h2>Inbox</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='+ Add task to "Inbox". Press Enter to save'
            className={style.taskInput}
            id="taskInput"
            type="text"
          />
        </form>
        <ul className={style.list_todo}>
          {todoList.length >= 1
            ? todoList.map((todo) => {
                return (
                  <li key={todo.id} className={style.todo_li}>
                    <label
                      className={style.checkbox}
                      htmlFor={"myCheckboxId" + todo.id}
                    >
                      <input
                        type="checkbox"
                        className={style.checkbox_input}
                        name="myCheckboxName"
                        id={"myCheckboxId" + todo.id}
                      ></input>
                      <div className={style.checkbox_box}></div>
                      {todo.text}
                    </label>
                    <button
                      className={style.remove_button}
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(todo);
                      }}
                    ></button>
                  </li>
                );
              })
            : "Enter a todo item"}
        </ul>
      </div>
    </div>
  );
}
