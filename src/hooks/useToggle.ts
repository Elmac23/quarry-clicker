import { useState } from "react";

export function useToggle(initial: boolean) {
  const [value, setValue] = useState(initial);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue((v) => !v);

  return {
    value,
    setValue,
    setTrue,
    setFalse,
    toggle,
  };
}
