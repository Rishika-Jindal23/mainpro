import { useState, useEffect, useRef } from "react";

export function usePrevious<T>(value: T): T | undefined {
    const ref = usePreviousRef(value);
    return ref.current;
}

function usePreviousRef<T>(value: T): React.MutableRefObject<T | undefined> {
    const ref = useRef<T | undefined>(undefined);
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref;
}
