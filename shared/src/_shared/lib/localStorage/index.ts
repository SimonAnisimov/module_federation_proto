export const getByKey = (key: string) => {
  if (!key) return;

  const item = localStorage.getItem(key);

  return item ? JSON.parse(item) : undefined;
};
export const setByKey = (key: string, payload: unknown) => {
  if (!key || !payload) return;

  localStorage.setItem(key, JSON.stringify(payload));
};
