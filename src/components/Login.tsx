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
    <Container sx={{ mt: { lg: '2em', xl: '0', xs: '2em', sm: '20em'  } }}>
         <Container className="reg-container" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2em'}}>

<Box className="back-btn" sx={{ display: 'flex', gap: { lg: '15em', xl: '19em', xs: "4em", md: '17em' }, position: 'relative', bottom: { lg: '1em', md: '5em' } }}>

<Box  sx={{ display: { xs: 'none', lg: 'flex', xl: 'flex', sm: 'flex'  } }}>
    <Typography onClick={handleBackButton} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><ArrowBackIosIcon />back</Typography>
</Box>
    <Box>
        <Typography>Don't have an account? <Link style={{ color: 'blue' }} href="/registration">Create an account</Link></Typography>
    </Box>
</Box>


<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #E6E6E6', borderRadius: '10px', width: { lg: '80%', xs: '110%', md: '80%', sm: '90%' }, justifyContent: 'center', margin: { lg: '0 auto' }, gap: '1em',  }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', margin: '.9em', ml: { lg: '3.1em', xl: '3em', xs: '0' }, position: 'relative', right: { sm: '4.1em', md: '7.3em', lg: '0' } }}>
        <Box className="img-logo" sx={{ ml: { xl: '.9em', xs: '.7em', lg: '0em', md: '6em' } }} >
            <Image src={logo} alt="logo" />
        </Box>

        <Box className="personal-info" sx={{ display: 'flex', flexDirection: 'column', gap: '.3em', ml: { md: '6em', lg: '0', xl: '.9em', xs: '.1em' }, width: { md: '100%', xl: '90%' } }}>
            <Typography color="#242F9B" sx={{ fontWeight: '700', fontSize: { xs: '1.9em', lg: '2.2em' } }} variant='h4'>Sign In</Typography>
            <Typography sx={{ color: '#808080', width: { xs: '90%', lg: '100%', xl: '100%', sm: '90%' } }}>Sign in to access your account and all the features we have to offer.</Typography>
        </Box>
    </Box>

    
    <FormControl variant="outlined" sx={{ marginBottom: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1.5em', mt: '.5em' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
            <label>Email</label>
            <input type="email" className="input-field" placeholder="Enter your email" style={{ padding: '10px' }} required />
        </Box> 

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
            <label>Password</label>
            <input type="password" className="input-field" placeholder="Enter your password" style={{ padding: '10px' }} required />
        </Box>

        <Box sx={{ position: 'relative', bottom: '0em', left: '6em' }}>
            <Typography sx={{ textDecoration: 'underline', color: '#494C8D', cursor: 'pointer' }}>Forgot password?</Typography>
        </Box>

        <Link style={{ width: '100%' }} href="/"> 
            <button className='next-button'>Sign In</button>
        </Link>


    </FormControl>

    <Box sx={{ width: '90%', ml: '1em', mb: '1em' }}>
        <Typography sx={{ fontSize: '.7em', color: 'gray', textAlign: 'center' }}>By signing in, you agree to our <Link style={{ color: 'blue', textDecoration: 'underline', fontSize: '1.3em' }} href="/">Terms of Service</Link> and <Link style={{ color: 'blue', textDecoration: 'underline', fontSize: '1.3em' }} href="/">Privacy Policy.</Link></Typography>
    </Box>


</Box>
</Container>
    </Container>
  )
}

export default PersonalInfo
