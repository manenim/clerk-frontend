import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Link from 'next/link';
import logo from "../../public/images/svgs/Logo.svg";
import Image from 'next/image';

const Registration = () => {
  const [value, setValue] = useState("Reg status");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  const handleBackButton = () => {
    window.history.back();
  };

  return (
    <Box>
        <Box sx={{ position: 'relative', display: 'flex', gap: { lg: '20em', xs: "2.9em" }, bottom: { lg: '3em', md: '13em', xs: '6em' }, right: '0' }}>

        <Box>
            <Typography onClick={handleBackButton} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><ArrowBackIosIcon />back</Typography>
        </Box>
            <Box>
                <Typography>Already have an account? <Link style={{ color: 'blue' }} href="/login">Login</Link></Typography>
            </Box>
        </Box>

        <Box sx={{ position: 'relative', bottom: { lg: '1.6em', xs: '4em' }, right: '1em', marginLeft: '3em', display: 'flex', gap: '1em' }}>
            <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                <Box sx={{ width: '1em', height: '1em', backgroundColor: '#2F327D', textAlign: 'center', color: '#fff', borderRadius: '2px' }}>1</Box>
                <Typography>School Profile</Typography>
                <Box sx={{ borderBottom: '1px solid #2F327D', width: '2.5em' }} />
            </Box>

            <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                <Box sx={{ width: '1em', height: '1em', backgroundColor: '#B0B0B0', textAlign: 'center', color: '#fff', borderRadius: '2px' }}>2</Box>
                <Typography>Personal Profile</Typography>
                <Box sx={{ borderBottom: '1px solid #B0B0B0', width: '2.5em' }} />
            </Box>

            <Box sx={{ display: 'flex', gap: '.6em', alignItems: 'center' }}>
                <Box sx={{ width: '1em', height: '1em', backgroundColor: '#B0B0B0', textAlign: 'center', color: '#fff', borderRadius: '2px' }}>3</Box>
                <Typography>Set Up Password</Typography>
            </Box>

            
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', border: '1px solid #F2F2F2', borderRadius: '10px', width: { lg: '70%', xs: '90%' }, justifyContent: 'center', margin: { lg: '0 auto' }, ml: { xs: '1.2em' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.9em', margin: '.9em' }}>
                <Image src={logo} alt="logo"  />

                <Typography color="#2F327D" sx={{ fontWeight: '700' }} variant='h4'>School Information</Typography>
                <Typography>Please fill in the correct information about the school below </Typography>
            </Box>

            
            <FormControl variant="filled" sx={{ marginBottom: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1.5em' }}>
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>School Name</label>
                    <TextField id="filled-basic" placeholder='Enter School Name' sx={{ width: '23em' }} variant="outlined" required />
               </Box> 
               
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>School Address</label>
                    <TextField id="filled-basic" placeholder='Enter School Name' sx={{ width: '23em' }} variant="outlined" required />
               </Box>

               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>Registration Status</label>
                    <Select labelId='Registration Status' id="Registration Status" value={value} onChange={handleChange} sx={{ width: '23em' }} required >
                    <MenuItem><em>None</em></MenuItem>
                    <MenuItem value={1}>one</MenuItem>
                    <MenuItem value={2}>two</MenuItem>
                    <MenuItem value={3}>three</MenuItem>
                </Select>
               </Box> 

               <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7em' }}>
                    <label>Education Level</label>
                    <Select labelId='Registration Status' id="Registration Status" value={value} onChange={handleChange} sx={{ width: '23em' }} required >
                    <MenuItem><em>None</em></MenuItem>
                    <MenuItem value={1}>one</MenuItem>
                    <MenuItem value={2}>two</MenuItem>
                    <MenuItem value={3}>three</MenuItem>
                </Select>
               </Box> 

               <Button href='/personalInfo' variant="contained" sx={{ width: '23em', background: '#2F327D', height: '4em' }}>
                  Next
                </Button>

            </FormControl>


        </Box>
    </Box>
  )
}

export default Registration