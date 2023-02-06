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
        <Box sx={{ position: 'relative', display: 'flex', gap: { lg: '20em', xs: "2.9em" }, bottom: { lg: '2em', md: '13em', xs: '6em' }, right: '0' }}>

        <Box>
            <Typography onClick={handleBackButton} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><ArrowBackIosIcon />back</Typography>
        </Box>
            <Box>
                <Typography>Already have an account? <Link style={{ color: 'blue' }} href="/login">Login</Link></Typography>
            </Box>
        </Box>

        <Box sx={{ position: 'relative', bottom: { lg: '.5em', xs: '4em' }, right: '1em', marginLeft: '3em', display: 'flex', gap: '1em' }}>
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

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)', borderRadius: '10px', width: { lg: '60%', xs: '90%' }, justifyContent: 'center', margin: { lg: '0 auto' }, ml: { xs: '1.2em' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.9em', margin: '.9em' }}>
                <Image src={logo} alt="logo"  />

                <Typography color="#2F327D" sx={{ fontWeight: '700' }} variant='h4'>School Information</Typography>
                <Typography>Please fill in the correct information about the school below </Typography>
            </Box>

            
            <FormControl variant="filled" sx={{ marginBottom: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3em' }}>
                
                <TextField id="filled-basic" label="Enter School Name" sx={{ width: '20em' }} variant="filled" required />

                <TextField id="filled-basic" label="Enter School Address" sx={{ width: '20em' }} variant="filled" required />
                
                <Select labelId='Registration Status' id="Registration Status" value={value} onChange={handleChange} label="Registration Status" sx={{ width: '20em' }} required >
                    <MenuItem><em>None</em></MenuItem>
                    <MenuItem value={1}>one</MenuItem>
                    <MenuItem value={2}>two</MenuItem>
                    <MenuItem value={3}>three</MenuItem>
                </Select>

                <TextField id="filled-basic" label="Education Level" sx={{ width: '20em' }} variant="filled" required />

                <Button href='/personalInfo' variant="contained" sx={{ width: '20em', background: '#2F327D' }}>
                  Next
                </Button>
            </FormControl>


        </Box>
    </Box>
  )
}

export default Registration