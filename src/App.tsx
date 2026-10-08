// App.tsx
import { useState } from "react";
import "./App.css";
import { data } from "./lib/data";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useState(data);

  return (
    <>
      <HabitList habits={habits} />
    </>
  );
}

export default App;
