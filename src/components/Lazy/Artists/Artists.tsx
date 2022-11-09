import React from "react";
import { Grid, Typography } from "@mui/material";

import { artistsData } from "./artistsData";

const Lazy = () => {
    return (
        <Grid display="flex" flexDirection="column">
            {artistsData.map((artist) => (
                <Grid
                    key={artist.id}
                    item
                    width={180}
                    p={3} m={3}
                    sx={{
                        background: "lightblue",
                        border: "5px solid rgb(93, 171, 207)"
                    }}>
                    <Grid item lg={12}>
                        <Typography variant="h5">{artist.name}</Typography>
                    </Grid>
                    <Grid item lg={12}>
                        <Typography>{artist.genre}</Typography>
                    </Grid>
                    <Grid item lg={12}>
                        <Typography>{artist.albums} albums</Typography>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
};

export default Lazy;
