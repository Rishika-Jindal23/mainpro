// // pages/index.tsx
// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";

// interface Data {
//     // Define the structure of your data
//     userId: number;
//     title: string;
//     totalstars: number;
//     desc: string;
//     starNumber: number;
//     cat: string;
//     cover: string;
//     images: string;
//     shortDesc: string;
//     deliveryTime: number;
//     revision: number;
//     features: [string];
//     sales: number;
//     // Add more fields as needed
// }

// const About = () => {
//     const [data, setData] = useState<Data[]>([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get<Data[]>(
//                     "https://localhost:8000/gigs"
//                 );
//                 setData(response.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Data from API</h1>
//             <ul>
//                 {data.map((item) => (
//                     <li key={item.title}>{item.userId}</li>
//                     // Render other data fields as needed
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default About;

// pages/index.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import newRequest from "../utils/newRequest";

interface Data {
    userId: number;
    title: string;
    totalstars: number;
    desc: string;
    starNumber: number;
    cat: string;
    cover: string;
    images: string[];
    shortDesc: string;
    deliveryTime: number;
    revision: number;
    features: string[];
    sales: number;
}

const About = () => {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const res = await newRequest.post("/auth/login", {
                //     username,
                const response = await newRequest.get<Data[]>(
                    "http://localhost:8000/gigs"
                );
                setData(response.data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Data from API</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.title}>
                        <h2>{item.title}</h2>
                        <p>User ID: {item.userId}</p>
                        <p>Total Stars: {item.totalstars}</p>
                        <p>Description: {item.desc}</p>
                        <p>Star Number: {item.starNumber}</p>
                        <p>Category: {item.cat}</p>
                        <img src={item.cover} alt="Cover" />
                        <p>Short Description: {item.shortDesc}</p>
                        <p>Delivery Time: {item.deliveryTime}</p>
                        <p>Revision: {item.revision}</p>
                        <p>Features:</p>
                        <ul>
                            {item.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <p>Sales: {item.sales}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default About;
