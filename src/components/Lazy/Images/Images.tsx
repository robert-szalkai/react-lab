import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material'

const Images = () => {

    const [images, setImages] = useState([])

    const handleGetImages = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((json) => setImages(json))
            .catch((e) => console.error(e))
    }

    useEffect(() => {
        handleGetImages()
    }, [])

    return (
        <Grid container display="flex" flexDirection="row" columnSpacing={2} rowSpacing={2}>
            {images.slice(0, 200).map((image: any, index) => (
                <Grid item key={index}>
                    <img src={image.thumbnailUrl} alt="im" />
                </Grid>
            ))}
        </Grid>
    )
}

export default Images;