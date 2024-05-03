import { useState, useEffect } from "react";

export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: T) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(`Error reading local storage key “${key}”:`, error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.warn(`Error writing local storage key “${key}”:`, error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}
