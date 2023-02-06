import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Typography, TextField, Button, FormControl } from '@mui/material';
import Link from 'next/link';
import logo from "../../public/images/svgs/Logo.svg";
import Image from 'next/image';

const setPassword = () => {

    const handleBackButton = () => {
        window.history.back();
    };
  return (
    <Box>
        <Box sx={{ position: 'relative', display: 'flex', gap: { lg: '20em', xs: "2.9em" }, bottom: { lg: '8em', md: '6em', xs: '6em' }, marginLeft: '2em', right: '0' }}>

        <Box>
            <Typography onClick={handleBackButton} sx={{ display: 'flex', justifyContent: 'center', cursor: 'pointer', alignItems: 'center' }}><ArrowBackIosIcon />back</Typography>
        </Box>
            <Box>
                <Typography>Already have an account? <Link style={{ color: 'blue' }} href="/login">Login</Link></Typography>
            </Box>
        </Box>

        <Box sx={{ position: 'relative', bottom: { lg: '3.5em', xs: '3em' }, marginLeft: { lg: '4.5em' }, display: 'flex', gap: '1em' }}>
            <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                <Box sx={{ width: '1em', height: '1em', backgroundColor: '#2F327D', textAlign: 'center', color: '#fff', borderRadius: '2px' }}>1</Box>
                <Typography>School Profile</Typography>
                <Box sx={{ borderBottom: '1px solid #2F327D', width: '2.5em' }} />
            </Box>

            <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                <Box sx={{ width: '1em', height: '1em', backgroundColor: '#2F327D', textAlign: 'center', color: '#fff', borderRadius: '2px' }}>2</Box>
                <Typography>Personal Profile</Typography>
                <Box sx={{ borderBottom: '1px solid #2F327D', width: '2.5em' }} />
            </Box>

            <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                <Box sx={{ width: '1em', height: '1em', backgroundColor: '#2F327D', textAlign: 'center', color: '#fff', borderRadius: '2px' }}>3</Box>
                <Typography>Set Up Password</Typography>
                
            </Box>

            
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)', borderRadius: '10px', width: { lg: '70%', xs: '90%' }, justifyContent: 'center', margin: '0 auto' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.9em', margin: '.9em' }}>
                <Image src={logo} alt="logo"  />

                <Typography color="#2F327D" sx={{ fontWeight: '700' }} variant='h4'>Setup Password</Typography>
                <Typography>Please choose a password that includes a mix of letters, numbers, and symbols, and is at least 8 characters long.</Typography>
            </Box>

            
            <FormControl sx={{ marginBottom: '2em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3em' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>Password</label>
                    <TextField id="filled-basic" placeholder='Enter a secure password' sx={{ width: '23em' }} variant="outlined" required />
               </Box> 
               
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>Confirm Password</label>
                    <TextField id="filled-basic" placeholder='Confirm password' sx={{ width: '23em' }} variant="outlined" required />
               </Box>


                <Button href='/pricing' variant="contained" sx={{ width: { lg: '20em', md: '30em', xs: '24em' }, background: '#2F327D', height: '3.5em' }}>
                  Next
                </Button>
            </FormControl>


        </Box>
    </Box>
  )
}

export default setPassword