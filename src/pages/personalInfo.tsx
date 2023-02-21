import { Typography } from "@mui/material";
import { Container, Box } from "@mui/material";
import { Slider, PersonalInfo } from "@/components";

export default function PeronalInfo() {
  return (
  
      <Box sx={{ display: 'grid', marginBottom: { md: '3em' }, gridTemplateColumns: { lg: '1fr 1fr', md: 'gridTemplateRows', xs: 'gridTemplateRows'} }}>
        <Box className="slider">
          <Slider />
        </Box>
       
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <PersonalInfo />
        </Box>
      </Box>

  )
}
