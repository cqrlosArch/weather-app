const getLocalStore = (store) => {
  const currentStorage = localStorage.getItem(store);
  return JSON.parse(currentStorage);
};
const setLocalStore = (store, item) => {
  localStorage.setItem(store, JSON.stringify(item));
};

const localSt = {
  getLocalStore,
  setLocalStore,
};
export default localSt;
