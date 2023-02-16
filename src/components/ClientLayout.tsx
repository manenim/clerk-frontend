import React, { ReactNode } from 'react';
import Appbar from './Appbar';
import PrySidebar from './PrySidebar';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

type LayoutProps = {
    children:ReactNode
}

const ClientLayout = ({ children }: LayoutProps) => {
   return (
      <div>
         <Appbar />
         <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
               <Grid item xs={2.5}>
                  <PrySidebar />
               </Grid>
               <Grid item xs={9.5} sx={{overflowY:"auto", height:"92vh"}}>
                  {children}
               </Grid>
            </Grid>
         </Box>
      </div>
   );
};
export default ClientLayout;