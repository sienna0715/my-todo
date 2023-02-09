import React, { useEffect, useState } from "react";

import TodoItem from "./TodoItem";
import TodoCreate from "../TodoCreate/TodoCreate";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(saveTodos);

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const filtered = getFiltered(todos, filter);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <section className={styles.section}>
      <ul className={styles.ul}>
        {filtered.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
      <TodoCreate onAdd={handleAdd} />
    </section>
  );
}

// const initialList = [
//   { id: 1, text: "투두리스트 만들기", status: "Active" },
//   { id: 2, text: "웹툰 만들기", status: "Active" },
//   { id: 3, text: "비자 발급하기", status: "Completed" },
// ];

function getFiltered(todos, filter) {
  if (filter === "All") return todos;
  return todos.filter((todo) => todo.status === filter);
}

function saveTodos() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
