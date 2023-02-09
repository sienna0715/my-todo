import React, { useState } from "react";

import styles from "./TodoCreate.module.css";
import { MdAdd } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

export default function TodoCreate({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSunmit = (e) => {
    e.preventDefault();
    onAdd({id: uuidv4(), text, status: "Active"})
    setText('');
  };

  return (
    <form onSubmit={handleSunmit} className={styles.form}>
      <input
        type="text"
        placeholder="오늘 할 일을 작성해 주세요!"
        value={text}
        onChange={handleChange}
        className={styles.input}
      />
      <button className={styles.add}>
        <MdAdd />
      </button>
    </form>
  );
}
