// lib/data.ts
export interface Habit {
  id: number;
  name: string;
  completedDates: string[];
}

export const data: Habit[] = [
  {
    id: 1,
    name: "Νερό 2 λίτρα",
    completedDates: [
      "2026-10-02",
      "2026-10-03",
      "2026-10-04",
      "2026-10-05",
      "2026-10-06",
      "2026-10-07",
      "2026-10-08",
    ],
  },
  {
    id: 2,
    name: "Διάβασμα 20 λεπτά",
    completedDates: [
      "2026-09-28",
      "2026-09-29",
      "2026-10-04",
      "2026-10-05",
      "2026-10-06",
      "2026-10-07",
    ],
  },
  {
    id: 3,
    name: "Περπάτημα",
    completedDates: ["2026-10-03", "2026-10-06", "2026-10-08"],
  },
  {
    id: 4,
    name: "Διαλογισμός",
    completedDates: [],
  },
];
