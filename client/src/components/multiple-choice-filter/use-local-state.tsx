import { useLocalStorage } from "local-storage";
import { Dispatch, SetStateAction, useState } from "react";

export function useLocalState<S>(
  key: string,
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<any>>] {
  const { getItem, setItem } = useLocalStorage();

  const [storedState, setStoredState] = useState(() => {
    try {
      const item = getItem(key);
      return item || initialState;
    } catch (error) {
      console.error(error);
      return initialState;
    }
  });

  const setState = (state: S) => {
    try {
      setItem(key, state);
      setStoredState(state);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedState, setState];
}
