import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Typography, FormControl, Container } from '@mui/material';
import Link from 'next/link';
import logo from "../../public/images/svgs/Logo.svg";
import Image from 'next/image';

const PersonalInfo = () => {
    const handleBackButton = () => {
        window.history.back();
      };

  return (
    <Container sx={{ marginTop: { lg: '2em', xl: '2em', md: '19em', xs: '3em', sm: '20em' }, mb: { xs: '1em', lg: '0', xl: '0' } }}>
        <Container className="reg-container" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2em'}}>

            <Box className="back-btn" sx={{ display: 'flex', gap: { lg: '15em', xl: '19em', xs: "4em", md: '17em' }, position: 'relative', bottom: { lg: '1em', md: '5em' } }}>

            <Box sx={{ display: { xs: 'none', lg: 'flex', xl: 'flex', sm: 'flex'  } }}>
                <Typography onClick={handleBackButton} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><ArrowBackIosIcon />back</Typography>
            </Box>
                <Box>
                    <Typography>Already have an account? <Link style={{ color: 'blue' }} href="/login">Login</Link></Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: { lg: '.2em', xs: '.8em' }, }}>
                <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                    <Box sx={{ width: '1.3em', height: '1.3em', backgroundColor: '#242F9B', textAlign: 'center', color: '#fff', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>1</Box>
                    <Link href="/registration">
                        <Typography>School Profile</Typography>
                    </Link>
                    <Box className="line1" sx={{ borderBottom: '1px solid #2F327D', width: '3em' }} />
                </Box>

                <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                    <Box sx={{ width: '1.3em', height: '1.3em', backgroundColor: '#242F9B', textAlign: 'center', color: '#fff', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</Box>
                    <Link href="/personalInfo">  
                        <Typography>Personal Profile</Typography>
                    </Link>
                    <Box className="line2" sx={{ borderBottom: '1px solid #2F327D', width: '3em' }} />
                </Box>

                <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                    <Box sx={{ width: '1.3em', height: '1.3em', backgroundColor: '#808080', textAlign: 'center', color: '#fff', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</Box>
                    <Link href="/setPassword">
                        <Typography>Set Up Password</Typography>
                    </Link>          
                    </Box>

            </Box>

            <Box className="form-position" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #E6E6E6', borderRadius: '10px', width: { lg: '80%', xs: '105%', md: '80%', sm: '100%' }, justifyContent: 'center', margin: { lg: '0 auto' }, gap: '1em', height: { md: '58em', lg: 'fit-content', sm: '55em' } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', margin: '.9em', ml: { lg: '3.1em', xl: '3em', xs: '1.3em', md: '0em', sm: '1em' }, position: 'relative', right: { md: '3em', lg: '0', sm: '0', xl: "0" } }}>
                    <Box className="img-position" sx={{ ml: { xs: '.9em', lg: '0', xl: '0', sm: '4em', md: '10em' } }} >
                        <Image src={logo} alt="logo" />
                    </Box>

                    <Box className="personal-info" sx={{ display: 'flex', flexDirection: 'column', gap: '.3em', ml: { md: '6em', lg: '0', xl: '.9em', xs: '.1em' }, width: { md: '100%', xl: '90%' } }}>
                        <Typography color="#242F9B" sx={{ fontWeight: '700', fontSize: { xs: '1.9em', lg: '2.2em' } }} variant='h4'>Personal Information</Typography>
                        <Typography sx={{ color: '#808080', width: { xs: '90%', lg: '100%', xl: '100%', sm: '100%' } }}>Kindly enter your personal information correctly. Having accurate information enables us to offer you the best service and secure your account.  </Typography>
                    </Box>
                </Box>

                
                <FormControl variant="outlined" sx={{ marginBottom: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: { lg: '1.5em', md: '2.3em', sm: '2em', xs: '2em' }, mt: '.5em' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                        <label>Full Name</label>
                        <input type="text" className="input-field" placeholder="Enter your full name" style={{ width: '20em', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} required />
                    </Box> 

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                        <label>Phone Number</label>
                        <input type="tel" className="input-field" placeholder="Enter school phone number" style={{ width: '20em', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} required />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                        <label>Email Address</label>
                        <input type="email" className="input-field" placeholder="Enter school email address" style={{ width: '20em', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} required />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                        <label>Address</label>
                        <input type="text" className="input-field" placeholder="Enter your address" style={{ width: '20em', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} required />
                    </Box>



                    <Link style={{ width: '100%' }} href="/setPassword"> 
                        <button className='next-button'>Next</button>
                    </Link>


                </FormControl>


            </Box>
        </Container>
</Container>
  )
}

export default PersonalInfo