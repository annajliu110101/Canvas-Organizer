type ISO = string; // ISO 8601 UTC strings in storage, convert to number/ms at runtime
type Source = "canvas" | "gradescope" | "virtual";

export type Category = { 
  id: string; 
  label: string; 
  icon: string; 
  color: string; 
  enabled: boolean
};

type BaseItem = {
  id: string; courseID?: number; originId?: string; categoryId: string; 
  source: Source;
  title: string; url?: string;
  notes?: string; details?: string;
  location?: string;
  reccurence?: string; 
  completed?: boolean; 
  extra?: Record<string, string | number | boolean | null>;
};

type TimedItem = BaseItem & {
  startAt?: ISO; endAt?: ISO;
};

type GradedItem = BaseItem & {
  dueAt?: ISO; submittedAt?: ISO|null; 
  pointsPossible?: number;
  pointsEarned?: number|null;
  late?: boolean;
  handinLink?: string;
};

type Assignment = GradedItem & {
  kind: "assignment";
  excused?: boolean;
  group?: string;
};

type Todo = BaseItem & {
  kind: "todo";
  dueAt?: ISO;
  checklist?: { id: string; text: string; done: boolean }[];
};


type Quiz = GradedItem & {
  kind: "quiz";
  timeLimitMin?: number;
};

type CalendarEvent = TimedItem & {
  kind: "event";
  virtual?: boolean;
  allDay?: boolean;
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

export type Item = CalendarEvent | Quiz | Todo | Assignment;
