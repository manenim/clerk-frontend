import { Typography } from "@mui/material";
import { Container, Box } from "@mui/material";
import React from "react";
import { Slider, WelcomeBack } from "@/components";

export default function Home() {
  return (
  
      <Box sx={{ display: 'grid', marginBottom: { xs: '2em', xl: '0' }, gridTemplateColumns: { lg: '1fr 1fr', md: 'gridTemplateRows', xs: '1fr'}, justifyContent: 'center', alignContent: 'center', overflow: { lg: 'auto', xs: 'hidden' } }}>
        <Box className="slider">
          <Slider />
        </Box>
       
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pl: { lg: '2em', xs: '0' } }}>
          <WelcomeBack />
        </Box>
      </Box>

  )
}
