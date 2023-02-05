import React from "react";
import Carousel from "react-material-ui-carousel";
import { slider } from '../constants/sliderImage';
import { Box, Typography } from "@mui/material";
import Image from "next/image";


export default function Slider() {
    return (
        <Carousel navButtonsAlwaysInvisible={true} stopAutoPlayOnHover={false} indicators={false} >
            {slider.map((item) => (
                <Box key={item.id} sx={{ width: '100%' }}>
                    <Image src={item.iamge} width={700} height={700} alt="slider" />

                    <Box sx={{ position: 'relative', bottom: { lg: '12em',  xs: '15em' }, left: '1em'  }}>
                        <Typography color="#fff" fontWeight="700" variant="h3">{item.headText1}</Typography>
                        <Typography color="#fff" fontWeight="700" variant="h3">{item.headText2}</Typography>
                        <Typography color="#fff" variant="h5">{item.lightText}</Typography>
                    </Box>
                </Box>
            ))}
        </Carousel>
    )
}