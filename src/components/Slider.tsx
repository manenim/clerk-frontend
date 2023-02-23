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
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '120vh',
      overflow: 'hidden',
    }}>
      <Carousel navButtonsAlwaysInvisible={true} stopAutoPlayOnHover={false} indicators={false} >
        {slider.map((item) => (
          <Box key={item.id} sx={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image className="slider-image" src={item.image} alt="slider" width={screenWidth > 1000 ? 700 : 1000} height={screenWidth > 1000 ? 800 : 1200 } />
            <Box sx={{ position: 'absolute', bottom: { lg: '10em',  xs: '12em', xl: '7em' }, left: { lg: '3em', xl: '4em', xs: '3em' }, zIndex: "1", }}>
              <Typography className="slider-text" sx={{ fontSize: { xs: '2.9em' } }} color="#fff" fontWeight="700" variant="h3">{item.headText1}</Typography>
              <Typography className="slider-text"  sx={{ fontSize: { xs: '2.8em' } }}  color="#fff" fontWeight="700" variant="h3">{item.headText2}</Typography>
              <Typography className="slider-text" color="#ADADAD" fontWeight="400" sx={{ fontSize: { lg: '2.5em', xs: '1.8em' } }} variant="h2">{item.lightText}</Typography>
            </Box>
            <Box sx={{ position: 'absolute', bottom: 0, right: '52%', width: '100%', height: '50em', filter: 'blur(60px)', background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))', zIndex: "0" }} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
