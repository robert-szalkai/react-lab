import React, { Suspense } from "react";
import { Grid } from "@mui/material";

import Artists from "./Artists"

const Images = React.lazy(() => import("./Images"));

const Lazy = () => {
    return (
        <Grid display="flex" flexDirection="column">
            <Artists />
            <Suspense fallback={<div>Loading images...</div>}>
                <Images />
            </Suspense>
        </Grid>
    )
};

export default Lazy;
