import { Typography } from "@mui/material";
import { Container, Box } from "@mui/material";
import { Slider, Login } from "@/components";

export default function PeronalInfo() {
  return (
  
      <Box sx={{ display: 'grid', marginBottom: { md: '3em', xs: '2em' }, gridTemplateColumns: { lg: '1fr 1fr', md: 'gridTemplateRows', xs: 'gridTemplateRows'} }}>
        <Box >
          <Slider />
        </Box>
       
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Login />
        </Box>
      </Box>

  )
}
