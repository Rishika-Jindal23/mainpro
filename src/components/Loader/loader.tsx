import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function Loader() {
    return (
        <div>
            {/* <Box sx={{ width: "100%" }}>
                <LinearProgress />
            </Box> */}

            <Box
                sx={{
                    display: "flex ",
                    justifyContent: "center",
                    marginTop: "5px",
                }}
            >
                <CircularProgress />
            </Box>
        </div>
    );
}

export default Loader;
