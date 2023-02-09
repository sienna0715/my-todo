import React from "react";

import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? "Completed" : "Active";
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.li}>
      <input
        type="checkbox"
        id={id}
        className={styles.input}
        checked={status === "Completed"}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>{text}</label>
      <button className={styles.icon}>
        <MdDelete onClick={handleDelete} />
      </button>
    </li>
  );
}
