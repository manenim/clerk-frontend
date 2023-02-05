import { Typography } from "@mui/material";
import { Container, Box } from "@mui/material";
import { Slider, Registration } from "@/components";

export default function teacherLogin() {
  return (
  
      <Box sx={{ display: 'grid', marginBottom: { xs: '2em' }, marginLeft: { xs: '.4em' }, gridTemplateColumns: { lg: '1fr 1fr', md: 'gridTemplateRows', xs: 'gridTemplateRows'} }}>
        <Box >
          <Slider />
        </Box>
       
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Registration />
        </Box>
      </Box>

  )
}
