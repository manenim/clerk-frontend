import { Typography } from "@mui/material";
import { Container, Box } from "@mui/material";
import React from "react";
import { Slider, WelcomeBack } from "@/components";

export default function Home() {
  return (
  
      <Box sx={{ display: 'grid', marginBottom: { xs: '2em' }, marginLeft: { xs: '2em' }, gridTemplateColumns: { lg: '1fr 1fr', md: 'gridTemplateRows', xs: 'gridTemplateRows'} }}>
        <Box >
          <Slider />
        </Box>
       
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <WelcomeBack />
        </Box>
      </Box>

  )
}
