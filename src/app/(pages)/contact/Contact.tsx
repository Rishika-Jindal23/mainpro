"use client";

import { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import img3 from "../../../../public/img/contact1.jpeg";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ContactMailSharpIcon from "@mui/icons-material/ContactMailSharp";

const Contact: React.FC = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    const router = useRouter();
    const handleVideoCall = () => {
        router.push(`/VideoHome/${joinId}`);
    };

    const handleEmailClick = () => {
        router.push("/sendEmail");
    };

    const handleBack = () => {
        router.push("/gigs");
    };

    const search = useSearchParams();

    const joinId = search.get("joinId")?.split("?")[0];

    return (
        <>
            <section className="grid grid-cols-2 mt-8">
                <div>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12}>
                            <Typography
                                variant="h5"
                                align="center"
                                gutterBottom
                            >
                                <ContactMailSharpIcon /> Choose the option for
                                contacting
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handleEmailClick}
                            >
                                Connect via Email <EmailIcon className="" />
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handleVideoCall}
                            >
                                Join Video Meet at 12 noon! <VideoCallIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Image
                        src={img3}
                        //   layout={"fill"}*
                        //    objectFit={"contain"}
                        alt="freelance"
                        // layout="responsive"
                    ></Image>
                </div>
            </section>
            <div>
                <Button variant="outlined" onClick={handleBack}>
                    Go Back
                </Button>
            </div>
        </>
    );
};

export default Contact;
