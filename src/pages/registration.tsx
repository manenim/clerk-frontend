import { Typography } from "@mui/material";
import { Container, Box } from "@mui/material";
import { Slider, Registration } from "@/components";

export default function registration() {
  return (
      <Box sx={{ display: 'grid', marginBottom: { md: '3em' }, gridTemplateColumns: { lg: '1fr 1fr', md: 'gridTemplateRows', xs: 'gridTemplateRows'} }}>
        <Box className="slider">
          <Slider />
        </Box>
       
        <Box className="reg-page" sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
          <Registration />
        </Box>
      </Box>

  )
}
