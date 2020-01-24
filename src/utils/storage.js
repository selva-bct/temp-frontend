export const setItem = (key, value) => {            
  localStorage.setItem(key, JSON.stringify(value));
}

export const getItem = (key) => {
  const data = localStorage.getItem(key) || null
  return JSON.parse(data)
}

export const removeItem = (key) => {
  localStorage.removeItem(key);
}
