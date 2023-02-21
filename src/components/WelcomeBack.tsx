import { Typography, Box, Container } from "@mui/material";
import React from "react";
import Link from "next/link";
import logo from "../../public/images/svgs/Logo.svg";
import Image from "next/image";
import icon1 from '../../public/images/icons/school.svg';
import icon2 from '../../public/images/icons/Vector.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function WelcomeBack() {
    return (
       <Container sx={{ mt: { xl: '8em', xs: '6em', lg: '0', sm: '22em' } }} >
        <Container className="reg-container" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2em'}}>

            <Box sx={{ display: 'flex', justifyContent: { lg: 'flex-end', xs: 'center' }, position: 'relative', bottom: { lg: '6em', xl: '8em', xs: '3em' } }}>
                <Typography>Don't have an account? <Link style={{ color: 'blue' }} href="/registration">Create Account</Link></Typography>
            </Box>

                <Box sx={{ boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', display: 'flex', flexDirection: 'column', gap: '2em', border: '1px solid #F2F2F2', borderRadius: '20px', justifyContent: 'center', alignItems: 'center', width: { lg: '25em', xl: '35em', xs: '25em', md: '35em', sm: '30em' }, height: { lg: '25em', xl: '35em', xs: '26em', md: '35em', sm: '35em' }, ml: { xl: '6em', lg: '6em' }, mr: { xs: '2em' } }}>

                    <Box sx={{ position: 'relative', right: { lg: '2em', xl: '3.5em', md: '0em' }, display: 'flex', flexDirection: 'column', gap: '1.4em' }}>
                        <Box>

                            <Image src={logo} alt="logo" style={{ marginTop: '.9em' }} />
                        </Box>
                        <Box>

                            <Typography color="#242F9B" sx={{ fontSize: '2em', fontWeight: '700' }}>Welcome Back</Typography>
                            <Typography color="#808080" sx={{ fontSize: '.8em' }}>Do you want to login in as a school <br /> or as a teacher</Typography>
                        </Box>
                    </Box>

                    <Link href="/registration">      
                        <Box sx={{ boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', borderRadius: '10px', height: { lg: '3.5em', md: '4em', sm: '4.5em' }, display: 'flex', width: { lg: '19em', xl: '22em', xs: '19em', md: '27em', sm: '25em' }, justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                            <Box sx={{ display: 'flex', gap: '1.4em', margin: '.9em', justifyContent: 'center', alignItems: 'center' }}>

                                    <Image src={icon1} alt="icon" />

                                <Typography variant="h5">School</Typography>
                            </Box>

                            <ArrowForwardIcon style={{ color: '#242F9B', position: 'relative', right: '.6em' }} />


                        </Box>
                    </Link>

                    <Link href="/registration">      
                        <Box sx={{ boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', border: '1px solid #F2F2F2', borderRadius: '10px', height: { lg: '3.5em', md: '4em', sm: '4.5em' }, display: 'flex', width: { lg: '19em', xl: '22em', xs: '19em', md: '27em', sm: '25em' }, justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                            <Box sx={{ display: 'flex', gap: '1.3em', margin: '1em', justifyContent: 'center', alignItems: 'center' }}>
                                
                                    <Image src={icon2} alt="icon" />
                        
                                <Typography variant="h5">Teacher</Typography>
                            </Box>

                            <ArrowForwardIcon style={{ color: '#242F9B', position: 'relative', right: '.6em' }} />


                        </Box>
                    </Link>
                </Box>
        </Container>
        
       </Container>
    )
}
