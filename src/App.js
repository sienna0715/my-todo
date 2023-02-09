import React, { useState } from "react";

import TodoList from "./components/TodoList/TodoList";
import styles from "./App.module.css";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import { DarkModeProvider } from "./components/DarkMode/DarkMode";

const filters = ["All", "Active", "Completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  const handleChange = (select) => {
    console.log(select);
    setFilter(select);
  };

  return (
    <DarkModeProvider>
      <div className={styles.container}>
        <div className={styles.main}>
          <TodoHeader
            filters={filters}
            filter={filter}
            onFilter={handleChange}
          />
          <TodoList filter={filter} />
        </div>
      </div> 
    </DarkModeProvider>
  );
}

export default App;
