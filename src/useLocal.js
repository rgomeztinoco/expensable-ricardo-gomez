import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { appKey } from "./config";

export function useSearchParamsWithLocal(initialValue = {}, localStorageKey) {
  const value =
    JSON.parse(localStorage.getItem(localStorageKey)) || initialValue;

  const [searchParams, setSearchParams] = useSearchParams(value);

  useEffect(() => {
    const newObject = Array.from(searchParams.entries()).reduce(
      (accum, current) => {
        return { ...accum, [current[0]]: current[1] };
      },
      {}
    );

    localStorage.setItem(localStorageKey, JSON.stringify(newObject));
  }, [localStorageKey, searchParams]);

  return [searchParams, setSearchParams];
}

export function useLocalStorage(initialValue, key) {
  const fromLocalStorage = JSON.parse(localStorage.getItem(appKey)) || {};

  const localValue = fromLocalStorage[key] || initialValue;

  const [value, setValue] = useState(localValue);

  useEffect(() => {
    fromLocalStorage[key] = value;
    const toLocalStorage = JSON.stringify(fromLocalStorage);
    // console.log(toLocalStorage);
    localStorage.setItem(appKey, toLocalStorage);
  }, [value]);

  return [value, setValue];
}
