import { useEffect } from "react";

export function useInterval(cb: () => unknown, intervalTime: number) {
  useEffect(() => {
    const intervalId = setInterval(cb, intervalTime);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
}
