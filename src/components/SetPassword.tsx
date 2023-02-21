import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Typography, FormControl, Container } from '@mui/material';
import Link from 'next/link';
import logo from "../../public/images/svgs/Logo.svg";
import Image from 'next/image';

const setPassword = () => {

    const handleBackButton = () => {
        window.history.back();
    };
  return (
    <Container sx={{ marginTop: { lg: '2em', xl: '2em', md: '25em', xs: '3em', sm: '20em' } }}>
    <Container className="reg-container" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2em'}}>

        <Box sx={{ display: 'flex', gap: { lg: '15em', xs: "4em", md: '17em', sm: '17em' }, position: 'relative', bottom: { lg: '1em', md: '5em', xl: '3em', sm: '2em' } }}>

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
                <Box sx={{ width: '1.3em', height: '1.3em', backgroundColor: '#242F9B', textAlign: 'center', color: '#fff', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</Box>
                    <Link href="/setPassword">
                        <Typography>Set Up Password</Typography>
                    </Link>   
                </Box>
            </Box>

        <Box className="form-position" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #E6E6E6', borderRadius: '10px', width: { lg: '80%', xs: '105%', md: '70%', sm: '90%' }, justifyContent: 'center', margin: { lg: '0 auto' }, gap: '1em'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', margin: '.9em', ml: { lg: '1.5em', xl: '2em', xs: '.5em' } }}>
                <Box className="logo_position" sx={{ position: 'relative', left: { lg: '2em', md: '4em', sm: '2em', xs: '2em' } }}>
                    <Image src={logo} alt="logo"  />
                </Box>

                <Box  className="school-info" sx={{ display: 'flex', flexDirection: 'column', gap: '.3em', width: { md: '100%',lg: '90%' }, ml: { md: '6.5em', lg: '1.7em', xl: '2em', xs: '1.3em', sm: '5em' }  }}>
                    <Typography color="#242F9B" sx={{ fontWeight: '700' }} variant='h4'>Setup Password</Typography>
                    <Typography sx={{ color: '#808080', width: { lg: 'fit-content', md: '90%' } }}>Please choose a password that includes a mix of letters, numbers, and symbols, and is at least 8 characters long.</Typography>
                </Box>
            </Box>

            
            <FormControl variant="outlined" sx={{ marginBottom: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2em', mt: '.5em' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>Password</label>
                    <input type="password" className="input-field" placeholder="Enter a secure password" style={{ width: '20em', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} required />
                </Box> 

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>Confirm Password</label>
                    <input type="text" className="input-field" placeholder="Confirm password" style={{ width: '20em', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} required />
                    <Typography color="#808080" sx={{ fontSize: '.7em' }}>Please Re-Enter Your Password To Conform</Typography>
                </Box>

                <Link style={{ width: '100%' }} href="/pricing"> 
                    <button className='next-button'>Next</button>
                </Link>


            </FormControl>


        </Box>
    </Container>
</Container>
  )
}

export default setPassword
