import React from "react";
import Carousel from "react-material-ui-carousel";
import { slider } from '../constants/sliderImage';
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Slider() {
  const [screenWidth, setScreenWidth] = React.useState(0);

  React.useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Carousel navButtonsAlwaysInvisible={true} stopAutoPlayOnHover={false} indicators={false} >
        {slider.map((item) => (
          <Box key={item.id} sx={{ width: '100%', height: '100vh' }}>
            <Image src={item.image} width={screenWidth < 600 ? 700 : (screenWidth > 1400 ? 1000 : 1000)} height={screenWidth > 1400 ? 900 : 700} alt="slider" />
            <Box sx={{ position: 'relative', bottom: { lg: '14em',  xs: '12em', xl: '15em' }, left: { lg: '1.8em', xl: '4em', xs: '3em' }  }}>
              <Typography sx={{ fontSize: { xs: '2.5em' } }} color="#fff" fontWeight="700" variant="h3">{item.headText1}</Typography>
              <Typography  sx={{ fontSize: { xs: '2.2em' } }}  color="#fff" fontWeight="700" variant="h3">{item.headText2}</Typography>
              <Typography color="rgba(173, 173, 173, 0.9)" fontWeight="100" sx={{ fontSize: { lg: '2.5em', xs: '1.8em' } }} variant="h2">{item.lightText}</Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
