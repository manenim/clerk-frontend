import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Typography, TextField, Button, FormControl, MenuItem, Select } from '@mui/material';
import Link from 'next/link';
import logo from "../../public/images/svgs/Logo.svg";
import Image from 'next/image';

const PersonalInfo = () => {
    const handleBackButton = () => {
        window.history.back();
      };

  return (
    <Box>
        <Box sx={{ position: 'relative', display: 'flex', gap: { lg: '20em', xs: "2.9em" }, bottom: { lg: '2em', md: '6em', xs: '6em' }, left: '2em' }}>

        <Box>
            <Typography onClick={handleBackButton} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><ArrowBackIosIcon />back</Typography>
        </Box>
            <Box>
                <Typography>Already have an account? <Link style={{ color: 'blue' }} href="/login">Login</Link></Typography>
            </Box>
        </Box>

        <Box sx={{ position: 'relative', bottom: { lg: '.7em', xs: '4em' }, right: '.6em', marginLeft: '4.4em', display: 'flex', gap: '1em' }}>
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
                <Box sx={{ width: '1em', height: '1em', backgroundColor: '#B0B0B0', textAlign: 'center', color: '#fff', borderRadius: '2px' }}>3</Box>
                <Typography>Set Up Password</Typography>          
            </Box>

            
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', border: '1px solid #F2F2F2', borderRadius: '10px', width: { lg: '70%', xs: '90%' }, justifyContent: 'center', margin: { lg: '0 auto' }, ml: { xs: '2.4em' }, mb: { xs: '2em' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.9em', margin: '.9em' }}>
                <Image src={logo} alt="logo"  />

                <Typography color="#2F327D" sx={{ fontWeight: '700'}} variant='h4'>Personal Information</Typography>
                <Typography sx={{ fontSize: '.8em'  }} >Kindly enter your personal information correctly. Having accurate information enables us to offer you the best service and secure your account. </Typography>
            </Box>

            
            <FormControl variant="filled" sx={{ marginBottom: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1.5em' }}>
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>Full Name</label>
                    <TextField id="filled-basic" placeholder='Enter your full name' sx={{ width: '23em' }} variant="outlined" required />
               </Box> 
               
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>Phone Number</label>
                    <TextField id="filled-basic" placeholder='Enter school phone number' sx={{ width: '23em' }} variant="outlined" required />
               </Box>

               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>Email Address</label>
                    <TextField id="filled-basic" placeholder='Enter school email address' sx={{ width: '23em' }} variant="outlined" required />
               </Box> 

               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>Address</label>
                    <TextField id="filled-basic" placeholder='Enter your address' sx={{ width: '23em' }} variant="outlined" required />
               </Box> 

               <Button href='/setPassword' variant="contained" sx={{ width: '23em', background: '#2F327D', height: '4em' }}>
                  Next
                </Button>

            </FormControl>


        </Box>
    </Box>
  )
}

export default PersonalInfo