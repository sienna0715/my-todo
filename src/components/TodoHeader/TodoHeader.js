import React from "react";

import styles from "./TodoHeader.module.css";
import { HiMoon, HiSun } from "react-icons/hi";
import { useDarkMode } from "../DarkMode/DarkMode";

export default function TodoHeader({ filters, filter, onFilter }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleDropdown = (event) => {
    console.log(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <header className={styles.header}>
      <span onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </span>
      <select
        className={styles.select}
        value={filter}
        onChange={handleDropdown}
      >
        {filters.map((filter, index) => (
          <option key={index} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </header>
  );
}
