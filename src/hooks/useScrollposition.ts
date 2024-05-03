import { useState, useEffect } from "react";

export function useScrollPosition(): { x: number; y: number } {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function updatePosition() {
            setPosition({ x: window.pageXOffset, y: window.pageYOffset });
        }

        window.addEventListener("scroll", updatePosition);
        updatePosition();

        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return position;
}
