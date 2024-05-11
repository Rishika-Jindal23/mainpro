"use client";

import { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

const Contact: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();
    const handleVideoCall = () => {
        router.push(`/VideoHome/${joinId}`);
    };
    const search = useSearchParams();

    const joinId = search.get("joinId")?.split("?")[0];

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
                <Typography variant="h5" align="center" gutterBottom>
                    Choose the option for contacting
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    // onClick={handleMessageClick}
                >
                    Message
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    // onClick={handleEmailClick}
                >
                    Connect via Email
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleVideoCall}
                >
                    Join Video Meet at 12 noon!
                </Button>
            </Grid>
        </Grid>
    );
};

export default Contact;
