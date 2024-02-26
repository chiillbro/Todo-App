import styles from "./form.module.css";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleButton(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.formInput} onSubmit={handleButton}>
      <input
        className={styles.modernInput}
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
        type="text"
        value={todo.name}
        placeholder="Enter todo item"
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}
