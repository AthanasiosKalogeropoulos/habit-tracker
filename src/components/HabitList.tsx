// componet/HabitList.tsx
import HabitCard from "./HabitCard";
import type { Habit } from "../lib/data";

interface HabitListProps {
  habits: Habit[];
}
export default function HabitList({ habits }: HabitListProps) {
  return (
    <>
      <div className="w-full flex items-center gap-5">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </>
  );
}
