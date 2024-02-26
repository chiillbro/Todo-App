import styles from "./todolist.module.css";
import TodoItem from "./TodoItem";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.todoList}>
      {sortedTodos.map((item) => {
        return (
          <TodoItem
            key={item.name}
            item={item}
            setTodos={setTodos}
            todos={todos}
          />
        );
      })}
    </div>
  );
}
