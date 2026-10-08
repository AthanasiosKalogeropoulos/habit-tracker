// components/HabitCard.tsx
import { useState } from "react";
import type { Habit } from "../lib/data";

interface HabitCardProps {
  habit: Habit;
}

export default function HabitCard({ habit }: HabitCardProps) {
  return (
    <div className="p-6 rounded-lg bg-slate-100">
      <h1>{habit.name}</h1>
      <p>🔥 {habit.completedDates.length} μέρες στη σειρά</p>
    </div>
  );
}
