const prefix = "$bolcom-v1";

const getItem = (key: string) => {
  const item = window.sessionStorage.getItem(`${prefix}${key}`);

  if (!item) {
    return undefined;
  }

  return JSON.parse(item);
};

const setItem = (key: string, value: any) => {
  return window.sessionStorage.setItem(
    `${prefix}${key}`,
    JSON.stringify(value)
  );
};

const removeItem = (key: string) => {
  window.sessionStorage.removeItem(`${prefix}${key}`);
};

export const useLocalStorage = () => {
  return {
    getItem,
    setItem,
    removeItem,
  };
};
