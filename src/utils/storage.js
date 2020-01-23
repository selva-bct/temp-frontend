export const setItem = (key, value) => {
  value = typeof value !== 'string' ? JSON.stringify(value) : value;
  localStorage.setItem(key, value);
}

export const getItem = (key) => {
  return localStorage.getItem(key);
}

export const removeItem = (key) => {
  localStorage.removeItem(key);
}
