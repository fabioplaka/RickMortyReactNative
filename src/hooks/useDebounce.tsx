import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    // Update debounced value after delay
    const debauncedHandler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes
    return () => clearTimeout(debauncedHandler);
  }, [value, delay]);

  return debounceValue;
};
