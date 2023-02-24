import { useState } from "react";
import { Box, Typography, Card, CardContent, Button, Container } from "@mui/material";
import logo from "../../public/images/auth/Logo.png";
import { price } from "@/constants/pricing";
import Image from "next/image";


const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Container>
        <header>
            <nav style={{ margin: '1em' }}>
                <Image src={logo} alt="logo" />
            </nav>
        </header>

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '.5em' }}>
            <Typography variant="h4" sx={{ textAlign: 'center' }} fontWeight="700" color="#373A82">The Right Plans Just For You</Typography>

            <Typography sx={{ width: { lg: '50%', xs: '90%', xl: '100%' }, fontWeight: '200', textAlign: 'center' }}>Our plans offer different levels of features and pricing to meet a variety of needs. All payments are securely processed and protected by industry-standard encryption.</Typography>
        </Box>

        <Container sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, gap: '2em', justifyContent: 'center', alignItems: 'center', my: '2em' }}>
          {price.map((item, index) => ( 
            <Card key={index} className={` ${index === activeIndex ? "active" : ""}`} onClick={() => handleClick(index)} sx={{  boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', border: '1px solid #F2F2F2', backgroundColor: 'transparent', height: { lg: 'fit-content', md: '30em', sm: '28em', xs: '23em' }, borderRadius: '20px', width: { lg: '15em', md: '20em', sm: '19em', xs: '15em' }, cursor: 'pointer' }}>
              <CardContent sx={{ margin: { lg: '1em', md: '4em', sm: '3em', xs: '1em' } }}>
                <Typography sx={{ fontSize: '1.5em', mb: '1em', color: index === activeIndex ? 'white' : '#373A82' }} variant="h4">{item.type}</Typography>
                <Box sx={{ display: 'flex', gap: { lg: '.7em', md: '2em', xs: '1em'  }, justifyContent: 'center', alignItems: 'center' }}>
                  <small>{item.icon}</small>
                  <Typography sx={{ fontSize: '.9em' }}>{item.text1}</Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: { lg: '.7em', md: '1.5em', xs: '1em' } }}>
                  <small>{item.icon}</small>
                  <Typography sx={{ fontSize: '.9em' }}>{item.text2}</Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: { lg: '.7em', md: '1.5em', xs: '1em'  } }}>
                  <small>{item.icon}</small>
                  <Typography sx={{ fontSize: '.9em' }}>{item.text3}</Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: { lg: '.7em', md: '1.5em', xs: '1em'  } }}>
                  <small>{item.icon}</small>
                  <Typography sx={{ fontSize: '.9em' }}>{item.text4}</Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: { lg: '.7em', md: '1.5em', xs: '1em'  } }}>
            
                  <Typography sx={{ color: index === activeIndex ? "white" : "#373A82", fontSize: '1.5em', fontWeight: '700', mt: '1em' }}>
                  <small style={{ fontSize: '.7em', fontWeight: '200' }}>$</small>
                  {item.price}
                  <small style={{ fontSize: '.7em', fontWeight: '200' }}>/{item.period}</small>
                </Typography>

                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <button className={index === activeIndex ? "btn-active" : "inactive"}>{item.action}</button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Container>

    </Container>
  )
}

export default Pricing
