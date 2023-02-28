import Image from "next/image";
import Link from "next/link";     
import { useState } from "react";
import { Box, Typography, Card, CardContent, Container } from "@mui/material";
import logo from "../../public/images/auth/Logo.png";
import { price } from "@/constants/pricing";

const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section>

        <header>
            <nav style={{ margin: '2em' }}>
                <Link href="/">
                    <Image src={logo} alt="logo" />
                </Link>
            </nav>
        </header>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '.9em' }}>
            <Typography variant="h4" sx={{ textAlign: 'center' }} fontWeight="700" color="#2F327D">The Right Plans Just For You</Typography>

            <Typography sx={{ width: { lg: '50%', xs: '90%', xl: '100%' }, fontWeight: '200', textAlign: 'center' }}>Our plans offer different levels of features and pricing to meet a variety of needs. All payments are securely processed and protected by industry-standard encryption.</Typography>
        </Box>

        <Container sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, gap: { lg: '2em', xs: '2em' }, justifyContent: 'center', alignItems: 'center', my: '2em', mb: '3em' }}>
          {price.map((item, index) => {
            
            return (
              <Card key={index} className={` ${index === activeIndex ? "active" : ""}`} onClick={() => handleClick(index)} sx={{ border: '1px solid #F2F2F2', backgroundColor: 'transparent', height: 'fit-content', borderRadius: '20px', width: { lg: '15em', md: '20em', sm: '19em', xs: '17em' }, cursor: 'pointer', }}>

                 {item.type === "Gold" && (
                          <Typography sx={{ backgroundColor: "#FF6E31", color: "#fff", padding: ".2em .8em",  borderRadius: "20px 20px 0 0", fontSize: ".9em", fontWeight: 700, display: index === activeIndex ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center'
                          }}
                          >
                            Popular Plan
                          </Typography>
                        )}
                <CardContent sx={{ margin: { lg: '1em', md: '4em', sm: '3em', xs: '2em',  } }}>
                  <Typography fontWeight={700} sx={{ fontSize: '1.5em', mb: '1em', color: index === activeIndex ? 'white' : '#373A82' }} variant="h4">{item.type}</Typography>
                  
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
            )
})}
        </Container>

    </section>
  )
}

export default Pricing