// pages/index.tsx
import React from "react";
import { TextField, Button, Container } from "@material-ui/core";

const EmailPage: React.FC = () => {
    const handleSubmit = (email: string) => {
        // Handle form submission, e.g., send the email to a server
        console.log("Submitted email:", email);
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <h1>Enter your email</h1>
            <form
                onSubmit={(e) => e.preventDefault()}
                style={{ display: "grid", gap: "10px" }}
            >
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    onChange={(e) => console.log(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSubmit("test@example.com")}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default EmailPage;
