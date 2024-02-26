import styles from "./todoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        name === todo.name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  const onCompletion = item.done ? styles.onCompleted : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={onCompletion} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
