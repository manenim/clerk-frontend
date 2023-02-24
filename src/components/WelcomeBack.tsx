import { Typography, Box, Container } from "@mui/material";
import React from "react";
import Link from "next/link";
import logo from "../../public/images/auth/Logo.png";
import Image from "next/image";
import icon1 from '../../public/images/icons/school.svg';
import icon2 from '../../public/images/icons/Vector.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function WelcomeBack() {
    return (
       <Box sx={{ mt: { xl: '8em', xs: '6em', lg: '7em', sm: '22em' } }} >
        <Box className="reg-container" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2em'}}>

            <Box sx={{ display: 'flex', justifyContent: { lg: 'flex-end', xs: 'center' }, position: 'relative', bottom: { lg: '5em', xl: '6em', xs: '3em', }, left: { lg: '7em', xl: '10em', xs: '0' } }}>
                <Typography>Don't have an account? <Link style={{ color: 'blue' }} href="/registration">Create Account</Link></Typography>
            </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', border: '1px solid #E6E6E6', borderRadius: '11.8321px', justifyContent: 'center', alignItems: 'center', width: 'fit-content', p: { lg: '3em',xs: '1.5em', xl: '5em' }, height: 'fit-content', position: 'relative', bottom: { lg: '3em' } }}>

                    

                    <Box sx={{ pr: { lg: '6.1em', xs: '0' }, display: 'flex', flexDirection: 'column', gap: '1.4em' }}>
                        
                        <Box>
                         <Box sx={{ pb: '2em' }}>
                            <Image src={logo} alt="logo" style={{ marginTop: '.9em' }} />
                        </Box>

                            <Typography color="#242F9B" sx={{ fontSize: '2em', fontWeight: '700' }}>Welcome Back</Typography>
                            <Typography color="#808080" sx={{ fontSize: '.9em' }}>Do you want to login in as a school <br /> or as a teacher?</Typography>
                        </Box>
                    </Box>

                    <Link href="/registration" style={{ zIndex: '999' }}>      
                        <Box sx={{  boxShadow: '0px 4px 14px 1px rgba(0, 0, 0, 0.04)', borderRadius: '10px', height: { lg: '3.5em', md: '4em', sm: '4.5em', xs: '3em' }, display: 'flex', width: { lg: '21em', xs: '15em' }, alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer',  border: ' 1px solid #E6E6E6' }}>
                            <Box sx={{ display: 'flex', gap: '1.7em', margin: '.9em', justifyContent: 'center', alignItems: 'center', pl: '.8em' }}>

                                    <Image src={icon1} alt="icon" />

                                <Typography variant="h5">School</Typography>
                            </Box>

                            <ArrowForwardIcon style={{ color: '#242F9B', position: 'relative', right: '.6em' }} />


                        </Box>
                    </Link>

                    <Link href="/registration" style={{ zIndex: '999' }}>      
                        <Box sx={{ boxShadow: '0px 4px 14px 1px rgba(0, 0, 0, 0.04)', border: ' 1px solid #E6E6E6', borderRadius: '6px', height: { lg: '3.5em', md: '4em', sm: '4.5em', xs: '3em' }, display: 'flex', width: { lg: '21em', xs: '15em' }, justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                            <Box sx={{ display: 'flex', gap: '1.7em', margin: '.9em', justifyContent: 'center', alignItems: 'center', pl: '.8em' }}>
                                
                                    <Image src={icon2} alt="icon" />
                        
                                <Typography variant="h5">Teacher</Typography>
                            </Box>

                            <ArrowForwardIcon style={{ color: '#242F9B', position: 'relative', right: '.6em' }} />


                        </Box>
                    </Link>
                </Box>
        </Box>
        
       </Box>
    )
}
