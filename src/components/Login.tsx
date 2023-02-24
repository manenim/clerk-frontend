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
    <Container sx={{ mt: { lg: '2em', xl: '0', xs: '2em', sm: '20em'  } }}>
         <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2em'}}>

            <Box  sx={{ display: 'flex', gap: { lg: '11em', xl: '19em', xs: "4em", md: '17em' }, mt: { lg: '0', xl: '3em' }, zIndex: '999' }}>

            <Box  sx={{ display: { xs: 'none', lg: 'flex', xl: 'flex', sm: 'flex'  } }}>
                <Typography onClick={handleBackButton} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><ArrowBackIosIcon />back</Typography>
            </Box>
                <Box>
                    <Typography>Don't have an account? <Link style={{ color: 'blue' }} href="/registration">Create an account</Link></Typography>
                </Box>
            </Box>


            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #E6E6E6', borderRadius: '10px', width: { lg: '80%', xs: '100%', md: '80%', sm: '90%' }, justifyContent: 'center', margin: { lg: '0 auto' }, gap: '1em', p: '1em'  }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', margin: '.9em', }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.3em',  }}>
                    <Box sx={{ pb: '2em' }}>
                        <Image src={logo} alt="logo" />
                    </Box>
                        <Typography color="#242F9B" sx={{ fontWeight: '700', fontSize: { xs: '1.9em', lg: '2.2em' } }} variant='h4'>Sign In</Typography>
                        <Typography sx={{ color: '#808080', width: { xs: '100%', lg: '100%', xl: '100%', sm: '90%' } }}>Sign in to access your account and all the features we have to offer.</Typography>
                    </Box>
                </Box>

                
                <FormControl variant="outlined" sx={{ marginBottom: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1.5em', }}>
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
