export const isCompleted = (it: Item) => !!it.completed || !!it.submittedAt;
export const isPast = (it: Item, now = Date.now()) =? {
  const t = it.endAt ?? it.dueAt;
return !!t && t < now;
};
export const inActiveCategories = (it: Item, cats: Category[]) => cats.find(c => c.id === it.categoryId)?.enabled !== false;
