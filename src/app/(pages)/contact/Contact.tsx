"use client";
// // import React from "react";

// // function contact() {
// //     return <></>;
// // }

// // export default contact;
// // components/ContactForm.tsx
// "use client";

// import React, { useState } from "react";

// enum ContactOption {
//     SendMessage = "Send Message",
//     ScheduleVideoCall = "Schedule Video Call",
//     SendEmail = "Send Email",
// }

// const Contact: React.FC = () => {
//     const [selectedOption, setSelectedOption] = useState<ContactOption | null>(
//         null
//     );
//     const [message, setMessage] = useState("");

//     const handleOptionClick = (option: ContactOption) => {
//         setSelectedOption(option);
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Implement your form submission logic here
//         console.log(`Option: ${selectedOption}, Message: ${message}`);
//         // Reset form state
//         setSelectedOption(null);
//         setMessage("");
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-3 gap-4">
//                 {Object.values(ContactOption).map((option) => (
//                     <button
//                         key={option}
//                         className={`p-4 border rounded-md ${
//                             selectedOption === option
//                                 ? "bg-blue-500 text-white"
//                                 : "bg-gray-200"
//                         }`}
//                         onClick={() => handleOptionClick(option)}
//                     >
//                         {option}
//                     </button>
//                 ))}
//             </div>
//             <div className="mt-4">
//                 <textarea
//                     className="w-full p-2 border rounded-md"
//                     rows={4}
//                     placeholder="Enter your message..."
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                 />
//             </div>
//             <div className="mt-4">
//                 <button
//                     type="submit"
//                     className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                     disabled={!selectedOption || !message}
//                 >
//                     Submit
//                 </button>
//             </div>
//         </form>
//     );
// };

// export default Contact;

import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

const Contact: React.FC = () => {
    const [message, setMessage] = useState("");
    const router = useRouter();
    const handleSendMessage = () => {
        // Implement sending the message logic here
        console.log("Message sent:", message);
        // Clear the message field after sending
        setMessage("");
    };
    const handleVideoCall = () => {
        router.push("/VideoHome");
    };

    return (
        <div className="mt-40">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => console.log("Send Mail clicked")}
                    >
                        Send Mail
                    </Button>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleVideoCall}
                    >
                        Schedule Video Call
                    </Button>
                </Grid>
                <Grid item xs={12} sm={4}></Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSendMessage}
                    >
                        Send Message
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Contact;
