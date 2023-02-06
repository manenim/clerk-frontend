import { Typography, Box } from "@mui/material";
import React from "react";
import Link from "next/link";
import logo from "../../public/images/svgs/Logo.svg";
import Image from "next/image";
import icon1 from '../../public/images/icons/Vector.svg'
import icon2 from '../../public/images/icons/Vector1.svg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function WelcomeBack() {
    return (
       <Box >

        <Box sx={{ position: 'relative', bottom: { lg: '7em', xs: '4em' }, left: { lg: '12em', xs: '2em' } }}>
            <Typography>Don't have an account? <Link style={{ color: 'blue' }} href="/registration">Create Account</Link></Typography>
        </Box>

            <Box sx={{ boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', display: 'flex', flexDirection: 'column', gap: '2em', border: '1px solid #F2F2F2', borderRadius: '20px', justifyContent: 'center', alignItems: 'center', width: '27em', height: '25em' }}>
                <Image src={logo} alt="logo" style={{ marginTop: '.9em' }} />

                <Box>
                    <Typography sx={{ fontSize: '2em', color: '#2F327D', fontWeight: '700' }}>Welcome Back</Typography>
                    <Typography sx={{ fontSize: '.8em' }}>Do you want to login in as a school <br /> or as a teacher</Typography>
                </Box>

                <Link href="/registration">      
                    <Box sx={{ boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', borderRadius: '10px', height: '3em', display: 'flex', width: '17em', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                        <Box sx={{ display: 'flex', gap: '.8em', margin: '.9em' }}>
                            <Box sx={{ border: '1px solid blue', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px' }}>
                                <Image src={icon1} alt="icon" />
                            </Box>
                            <Typography variant="h5">School</Typography>
                        </Box>

                        <ArrowForwardIcon style={{ color: '#3366FF', position: 'relative', right: '.6em' }} />


                    </Box>
                </Link>

                <Link href="/registration">      
                    <Box sx={{ boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', border: '1px solid #F2F2F2', borderRadius: '10px', height: '3em', display: 'flex', width: '17em', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                        <Box sx={{ display: 'flex', gap: '.8em', margin: '1em' }}>
                            <Box sx={{ border: '1px solid blue', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px' }}>
                                <Image src={icon2} alt="icon" />
                            </Box>
                            <Typography variant="h5">Teacher</Typography>
                        </Box>

                        <ArrowForwardIcon style={{ color: '#3366FF', position: 'relative', right: '.6em' }} />


                    </Box>
                </Link>
            </Box>
        
       </Box>
    )
}