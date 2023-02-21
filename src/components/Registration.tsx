import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Typography, FormControl, Container } from '@mui/material';
import Link from 'next/link';
import logo from "../../public/images/svgs/Logo.svg";
import Image from 'next/image';

const Registration = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  const handleBackButton = () => {
    window.history.back();
  };

  return (
    <Container sx={{ marginTop: { lg: '2em', xl: '2em', md: '20em', xs: '3em', sm: '20em' } }}>
        <Container className="reg-container" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2em'}}>

            <Box className="back-btn" sx={{ display: 'flex', gap: { lg: '15em', xs: "2em", md: '17em' }, position: 'relative', bottom: { lg: '1em', md: '5em' } }}>

            <Box sx={{ display: { xs: 'none', lg: 'flex', xl: 'flex', sm: 'flex'  } }}>
                <Typography onClick={handleBackButton} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><ArrowBackIosIcon />back</Typography>
            </Box>
                <Box>
                    <Typography>Already have an account? <Link style={{ color: 'blue' }} href="/login">Login</Link></Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: { lg: '.2em', xs: '.8em'} }}>
                <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                    <Box sx={{ width: '1.3em', height: '1.3em', backgroundColor: '#242F9B', textAlign: 'center', color: '#fff', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>1</Box>
                    <Link href="/registration">
                        <Typography>School Profile</Typography>
                    </Link>
                    <Box className="line1" sx={{ borderBottom: '1px solid #2F327D', width: '3em' }} />
                </Box>

                <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                    
                        <Box sx={{ width: '1.3em', height: '1.3em', backgroundColor: '#808080', textAlign: 'center', color: '#fff', borderRadius: '2px',  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>2</Box>
                        <Link href="/personalInfo">  
                            <Typography>Personal Profile</Typography>
                        </Link>
                        <Box className="line2" sx={{ borderBottom: '1px solid #B0B0B0', width: '3em' }} />
                </Box>

                <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                    <Box sx={{ width: '1.3em', height: '1.3em', backgroundColor: '#808080', textAlign: 'center', color: '#fff', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</Box>
                    <Link href="/setPassword">
                        <Typography>Set Up Password</Typography>
                    </Link>
                </Box>

                
            </Box>

            <Box className="form-position" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #E6E6E6', borderRadius: '10px', width: { lg: '80%', xs: '100%', md: '80%', sm: '100%' }, justifyContent: 'center', margin: { lg: '0 auto' }, gap: '1em', height: { md: '58em', lg: 'fit-content', sm: '55em' }  }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', margin: '.9em', ml: { lg: '3em', xl: '2em', xs: '1.8em' } }}>
                    <Box className="logo-position" sx={{ ml: { xs: '.6em', lg: '2.5em', xl: '2em', sm: '0', }, position: 'relative', right: { xs: '0', lg: '2.5em', sm: '2.5em', md: '2.5em' } }}>

                        <Image src={logo} alt="logo"  />
                    </Box>

                    <Box className="school-info" sx={{ display: 'flex', flexDirection: 'column', gap: '.3em',  }}>
                        <Typography color="#242F9B" sx={{ fontWeight: '700' }} variant='h4'>School Information</Typography>
                        <Typography sx={{ color: '#808080' }}>Please fill in the correct information about the school below </Typography>
                    </Box>
                </Box>

                
                <FormControl variant="outlined" sx={{ marginBottom: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2em', mt: '.5em' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>School Name</label>
                    <input type="text" className="input-field" placeholder="Enter School Name" style={{ width: '20em', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} required />
                    </Box> 

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>School Address</label>
                    <input type="text" className="input-field" placeholder="Enter School Address" style={{ width: '20em', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} required />
                    </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>Registration Status</label>
                    <select className='select-field'>
                        <option value="" disabled selected hidden>Registration Status</option>
                        <option>Registered</option>
                        <option>Not Registered</option>
                    </select>
                    </Box> 

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>Education Level</label>
                    <select className='select-field'>
                        <option value="" disabled selected hidden>Education Level</option>
                        <option>100</option>
                        <option>200</option>
                    </select>
                    </Box>


                    <Link style={{ width: '100%' }} href="/personalInfo"> 
                        <button className='next-button'>Next</button>
                    </Link>


                </FormControl>


            </Box>
        </Container>
    </Container>
  )
}

export default Registration
