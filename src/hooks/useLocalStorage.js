import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  // Prevent build error "window is undefined" but keep keep working
  const isServer = typeof window === "undefined";

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage then
    // use stored value or return initialValue
    if (isServer) {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (!isServer) {
        window.localStorage.setItem(key, valueToStore);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
export default useLocalStorage;
