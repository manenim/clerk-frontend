import { Typography } from "@mui/material";
import { Container, Box } from "@mui/material";
import { Slider, Login } from "@/components";

export default function PeronalInfo() {
  return (
  
      <Box sx={{ display: { lg: 'grid', xs: 'flex' }, marginBottom: { md: '3em' }, gridTemplateColumns: { lg: '1fr 1fr', md: 'gridTemplateRows', xs: 'gridTemplateRows'}, justifyContent: 'center', alignContent: 'center', overflow: { lg: 'auto', xs: 'hidden' } }}>
        <Box className="slider">
          <Slider />
        </Box>
       
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pl: { lg: '2em', xs: '0', xl: '4em' } }}>
          <Login />
        </Box>
      </Box>

  )
}
