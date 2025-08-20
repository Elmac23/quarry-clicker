import { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";

export function useCps() {
  const [cps, setCps] = useState(0);
  const counter = useRef(0);

  const handleClick = () => {
    counter.current += 1;
  };

  const handleInterval = () => {
    setCps(counter.current);
    counter.current = 0;
  };

  useInterval(handleInterval, 1000);

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return cps;
}
