type ISO = string; // ISO 8601 UTC strings in storage, convert to number/ms at runtime
type Source = "canvas" | "gradescope" | "virtual";

type BaseItem = {
  id: string; courseID?: number; originId?: string; categoryId: string; 
  source: Source; host: string;
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

export type ItemTypes = GradedItem | TimedItem;
export type Item = CalendarEvent | Quiz | Todo | Assignment;

