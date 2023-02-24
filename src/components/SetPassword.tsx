import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Typography, FormControl, Container } from '@mui/material';
import Link from 'next/link';
import logo from "../../public/images/auth/Logo.png";
import Image from 'next/image';

const setPassword = () => {

    const handleBackButton = () => {
        window.history.back();
    };
  return (
    <Container sx={{ marginTop: { lg: '2em', xl: '5em', md: '25em', xs: '3em', sm: '20em' }, pl: { lg: '3em', xl: '6em', sm: '3.4em'  } }}>
    <Container className="reg-container" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2em'}}>

        <Box sx={{ display: 'flex', gap: { lg: '15em', xs: "4em", md: '17em', sm: '17em' }, position: 'relative', bottom: { lg: '1em', md: '5em', xl: '3em', sm: '2em' } }}>

        <Box sx={{ display: { xs: 'none', lg: 'flex', xl: 'flex', sm: 'flex'  } }}>
            <Typography onClick={handleBackButton} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><ArrowBackIosIcon />back</Typography>
        </Box>
            <Box>
                <Typography>Already have an account? <Link style={{ color: 'blue' }} href="/login">Login</Link></Typography>
            </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: { lg: '.9em', xs: '.8em' }, zIndex: '9999', pb: '1em' }}>
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
                <Box sx={{ width: '1.3em', height: '1.3em', backgroundColor: '#242F9B', textAlign: 'center', color: '#fff', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</Box>
                    <Link href="/setPassword">
                        <Typography sx={{ fontSize: '.8em' }}>Set Up Password</Typography>
                    </Link>   
                </Box>
        </Box>

        <Box className="form-position" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #E6E6E6', borderRadius: '10px', width: { lg: '80%', xs: '100%', md: '70%', sm: '90%' }, justifyContent: 'center', margin: { lg: '0 auto' }, p: '1em'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', margin: '.9em' }}>

                <Box  className="school-info" sx={{ display: 'flex', flexDirection: 'column', gap: '.3em', width: { md: '100%',lg: '90%' }, pl: { lg: '.4em', xs: '0', xl: '.2em' } }}>
                <Box className="logo_position" sx={{ py: '1.5em' }} >
                    <Image src={logo} alt="logo"  />
                </Box>
                    <Typography color="#242F9B" sx={{ fontWeight: '700' }} variant='h4'>Setup Password</Typography>
                    <Typography sx={{ color: '#808080', width: '100%', fontSize: { lg: '.8em', xs: '1em' } }}>Please choose a password that includes a mix of letters, numbers, and symbols, and is at least 8 characters long.</Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2.5em', margin: '.9em', py: '.5em' }}>

                <FormControl variant="outlined" sx={{ marginBottom: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2em' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                        <label>Password</label>
                        <input type="password" className="input-field" placeholder="Enter a secure password" style={{ padding: '10px', borderRadius: '5px' }} required />
                    </Box> 

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                        <label>Confirm Password</label>
                        <input type="text" className="input-field" placeholder="Confirm password" style={{ padding: '10px', borderRadius: '5px' }} required />
                        <Typography color="#808080" sx={{ fontSize: '.7em' }}>Please Re-Enter Your Password To Conform</Typography>
                    </Box>

                    <Link style={{ width: '100%' }} href="/pricing"> 
                        <button className='next-button'>Next</button>
                    </Link>


                </FormControl>
            </Box>


        </Box>
    </Container>
</Container>
  )
}

export default setPassword
