export const formatToSEK = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "SEK",
  }).format(price);
};

export const savetoLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeFromLocalStorage = (key) => {
  return localStorage.removeItem(key);
};
