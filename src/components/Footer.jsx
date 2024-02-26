import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.todos}>Completed Todos: {completedTodos}</span>
      <span className={styles.todos}>Total Todos: {totalTodos}</span>
    </div>
  );
}
