import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Typography, FormControl, Container } from '@mui/material';
import Link from 'next/link';
import logo from "../../public/images/auth/Logo.png";
import Image from 'next/image';

const PersonalInfo = () => {
    const handleBackButton = () => {
        window.history.back();
      };

  return (
    <Container sx={{ marginTop: { lg: '2em', xl: '2em', md: '19em', xs: '3em', sm: '20em' }, mb: { xs: '1em', lg: '0', xl: '0' }, pl: { lg: '1.9em', xl: '6em' } }}>
        <Container className="reg-container" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2em'}}>

            <Box className="back-btn" sx={{ display: 'flex', gap: { lg: '15em', xl: '19em', xs: "4em", md: '17em' }, position: 'relative', bottom: { lg: '1em', md: '5em' } }}>

            <Box sx={{ display: { xs: 'none', lg: 'flex', xl: 'flex', sm: 'flex',   } }}>
                <Typography onClick={handleBackButton} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><ArrowBackIosIcon />back</Typography>
            </Box>
                <Box>
                    <Typography>Already have an account? <Link style={{ color: 'blue' }} href="/login">Login</Link></Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: { lg: '.9em', xs: '.8em' }, zIndex: '9999' }}>
                <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                    <Box sx={{ width: '1.3em', height: '1.3em', backgroundColor: '#242F9B', textAlign: 'center', color: '#fff', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>1</Box>
                    <Link href="/registration">
                        <Typography sx={{ fontSize: '.8em' }}>School Profile</Typography>
                    </Link>
                    <Box className="line1" sx={{ borderBottom: '1px solid #2F327D', width: '3em' }} />
                </Box>

                <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                    <Box sx={{ width: '1.3em', height: '1.3em', backgroundColor: '#242F9B', textAlign: 'center', color: '#fff', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</Box>
                    <Link href="/personalInfo">  
                        <Typography sx={{ fontSize: '.8em' }}>Personal Profile</Typography>
                    </Link>
                    <Box className="line2" sx={{ borderBottom: '1px solid #2F327D', width: '3em' }} />
                </Box>

                <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                    <Box sx={{ width: '1.3em', height: '1.3em', backgroundColor: '#808080', textAlign: 'center', color: '#fff', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</Box>
                    <Link href="/setPassword">
                        <Typography sx={{ fontSize: '.8em' }}>Set Up Password</Typography>
                    </Link>          
                    </Box>

            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #E6E6E6', borderRadius: '11.8321px', width: { lg: '80%', xs: '100%', md: '80%', sm: '100%', xl: '80%' }, justifyContent: 'center', margin: { lg: '0 auto' }, gap: '1em', height: 'fit-content', pb: '2em' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', margin: '.9em', pl: { lg: '1.6em', xl: '1.5em', xs: '.5em' } }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.9em',  }}>
                    <Box sx={{ py: '1.3em' }}>
                        <Image src={logo} alt="logo" />
                    </Box>
                        <Typography color="#242F9B" sx={{ fontWeight: '700', fontSize: { xs: '1.9em', lg: '1.9em' } }} variant='h4'>Personal Information</Typography>
                        <Typography sx={{ color: '#808080', width: '100%', fontSize: { lg: '.9em', xs: '1em' } }}>Kindly enter your personal information correctly. Having accurate information enables us to offer you the best service and secure your account.  </Typography>
                    </Box>
                </Box>

                
                <FormControl variant="outlined" sx={{ marginBottom: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: { lg: '2.7em', md: '2.3em', sm: '2em', xs: '2em' }, mt: '1.5em'  }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                        <label>Full Name</label>
                        <input type="text" className="input-field" placeholder="Enter your full name" style={{ padding: '10px' }} required />
                    </Box> 

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                        <label>Phone Number</label>
                        <input type="tel" className="input-field" placeholder="Enter school phone number" style={{ padding: '10px' }} required />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                        <label>Email Address</label>
                        <input type="email" className="input-field" placeholder="Enter school email address" style={{  padding: '10px'}} required />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                        <label>Address</label>
                        <input type="text" className="input-field" placeholder="Enter your address" style={{ padding: '10px' }} required />
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