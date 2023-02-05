import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Typography, TextField, Button, FormControl } from '@mui/material';
import Link from 'next/link';
import logo from "../../public/images/svgs/Logo.svg";
import Image from 'next/image';

const PersonalInfo = () => {

    const handleGoBack = () => {
        (window as any).history.back();
    }

  return (
    <Box>
        <Box sx={{ position: 'relative', display: 'flex', gap: { lg: '15em', xs: "1em" }, bottom: { lg: '6em', md: '6em', xs: '2em' }, marginLeft: '2em', right: '0' }}>

        <Box>
            <p onClick={handleGoBack} style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer', alignItems: 'center' }}><ArrowBackIosIcon />back</p>
        </Box>
            <Box>
                <Typography>Don't have an account? <Link style={{ color: 'blue' }} href="/registration">Create an account</Link></Typography>
            </Box>
        </Box>


        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)', borderRadius: '10px', width: { lg: '60%', xs: '90%' }, justifyContent: 'center', margin: '0 auto' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.9em', margin: '.9em' }}>
                <Image src={logo} alt="logo"  />

                <Typography color="#2F327D" sx={{ fontWeight: '700' }} variant='h4'>Sign In</Typography>
                <Typography sx={{ fontSize: '.8em' }}>Sign in to access your account and all the features we have to offer.</Typography>
            </Box>

            
            <FormControl sx={{ marginBottom: '2em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3em' }}>
                <TextField id="filled-basic" label="Email" required sx={{ width: { lg: '20em', md: '30em', xs: '19em' } }} variant="filled" />

                <TextField id="filled-basic" label="Password" required sx={{ width: { lg: '20em', md: '30em', xs: '19em' } }} variant="filled" />

                <Box sx={{ position: 'relative', bottom: '2em', left: '6em' }}>
                    <Typography sx={{ textDecoration: 'underline', color: '#494C8D', cursor: 'pointer' }}>Forgot password?</Typography>
                </Box>


                <Button href='/' variant="contained" sx={{ width: { lg: '20em', md: '30em', xs: '18em' }, background: '#2F327D' }}>
                  Sign In
                </Button>
            </FormControl>

            <Box sx={{ width: '90%', ml: '1em', mb: '1em' }}>
                <Typography sx={{ fontSize: '.7em', color: 'gray', textAlign: 'center' }}>By signing in, you agree to our <Link style={{ color: 'blue', textDecoration: 'underline', fontSize: '1.4em' }} href="/">Terms of Service</Link> and <Link style={{ color: 'blue', textDecoration: 'underline', fontSize: '1.4em' }} href="/">Privacy Policy.</Link></Typography>
            </Box>


        </Box>
    </Box>
  )
}

export default PersonalInfo