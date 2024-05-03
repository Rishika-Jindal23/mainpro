import { useState, useEffect } from "react";

export function useWindowSize(): { width: number; height: number } {
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        function updateSize() {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        }

        window.addEventListener("resize", updateSize);
        updateSize();

        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return size;
}

// usage
// import { useWindowSize } from '../hooks/useWindowSize';

// function MyComponent() {
//   const { width, height } = useWindowSize();

//   return (
//     <div>
//       <p>Window width: {width}</p>
//       <p>Window height: {height}</p>
//     </div>
//   );
// }
