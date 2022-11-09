import React from "react";
import { Grid } from "@mui/material";
import Artists from "./Artists"
import Images from "./Images";

const Lazy = () => {
    return (
        <Grid display="flex" flexDirection="column">
            <Artists />
            <Images />
        </Grid>
    )
};

export default Lazy;
