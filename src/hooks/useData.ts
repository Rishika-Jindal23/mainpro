import { useState, useEffect } from "react";

type Data = any; // replace with your data type

interface UseDataProps {
    url: string;
    initialData?: Data;
}

export function useData({ url, initialData }: UseDataProps) {
    const [data, setData] = useState<Data | null>(initialData || null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url, { credentials: "include" });
                if (!response.ok) {
                    throw new Error(
                        "An error occurred while fetching the data."
                    );
                }
                const data = await response.json();
                setData(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, loading, error };
}

// use
// import { useData } from '../hooks/useData';

// function MyComponent() {
//   const { data, loading, error } = useData({
//     url: 'https://api.example.com/data',
//   });

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return <div>Data: {data}</div>;
// }
