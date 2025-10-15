type ISO = string; // ISO 8601 UTC strings in storage, convert to number/ms at runtime
type Source = "canvas" | "gradescope" | "virtual";

export type Category = { 
  id: string; 
  label: string; 
  icon: string; 
  color: string; 
  enabled: boolean
};

export type Base = {
  id: string;
  source: Source;
  originId?: string;
  courseID?: number;
  title: string;
  categoryId: string;
  dueAt?: ISO; 
  startAt?: ISO; 
  endAt?: ISO;
  url?: string; 
  submittedAt?: ISO|null; 
  completed?: boolean; 
  notes?: string;
  details?: string;
  location?: string;
  extra?: Record<string, string | number | boolean | null>;
};

export type Assignment = Base & {
  kind: "assignment";
  pointsPossible?: number;
  pointsEarned?: number|null;
  late?: boolean;
  excused?: boolean;
  group?: string;
  handinLink?: string;
};

export type Todo = Base & {
  kind: "todo";
  checklist?: { id: string; text: string; done: boolean }[];
};


export type Quiz = Base & {
  kind: "quiz";
  timeLimitMin?: number;
  proctored?: boolean;
  pointsPossible?: number;
  pointsEarned?: number|null;
};

export type CalendarEvent = Base & {
  kind: "event";
  location?: string;
  allDay?: boolean;
  rrule?: string;             // optional RRULE string for recurrence (virtual-only)
};

export type Item = {
  id: string; source: "canvas"|"gradescope"|"virtual";
  courseID?: number;
  title: string;
  categoryId: string;
  pointsPossible?: number;
  pointsEarned?: number;
  dueAt?: number; startAt?: number; endAt?: number;
  url?: string; submittedAt?: number|null; completed?: boolean; notes?: string;
  originId?: string;
};

export type Calendar_Preferences = {
  viewMode: "original"|"filtered";
  categories: Category[];
  hiddenUi: { filterBar?: boolean};
};
export const DEFAULT_CATEGORIES: Category[] = [
  { id:"calendar", label:"Calendar Events", icon:"📅", color:"#6b7280", enabled:true },
  { id:"assignments", label:"Assignments", icon:"📘", color:"#2563eb", enabled:true },
  { id:"todo", label:"To-Do", icon:"✅", color:"#16a34a", enabled:true },
  { id:"quizzes", label:"Quizzes", icon:"📝", color:"#f59e0b", enabled:true },
];
