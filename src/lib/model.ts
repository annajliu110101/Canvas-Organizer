export type Category = { 
  id: string; 
  label: string; 
  icon: string; 
  color: string; 
  enabled: boolean
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
