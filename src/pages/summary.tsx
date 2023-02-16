import ClientLayout from "@/components/ClientLayout";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SummaryCard from "@/components/SummaryCard";

interface mockdatats {
    id: string;
   topic: string;
   subject: string;
}
const mockdata: mockdatats[] = [
   {
      id: "1",
      topic: "Summary Topic",
      subject: "ENG",
   },
   { id: "2", topic: "Summary Topic", subject: "ENG" },
   { id: "3", topic: "Summary Topic", subject: "PHY" },
   { id: "4", topic: "Summary Topic", subject: "ACC" },
   { id: "5", topic: "Summary Topic", subject: "COM" },
   { id: "6", topic: "Summary Topic", subject: "SCI" },

];

type Props = {};

const summary = () => {
   return (
      <div>
         <ClientLayout>
            <Box sx={{paddingTop:"3.4rem", paddingLeft:"3rem"}}>
               <p className="font-semibold text-black ">Summaries</p>
               <Box sx={{ flexGrow: 1, mt:"2rem" }}>
                  <Grid
                     container
                     spacing={{ xs: 1, md: 2 }}
                     columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                     {mockdata.map((data,index) => (
                         <Grid item xs={12} sm={6} md={3} key={index} sx={{justifyContent:"center", placeContent:"center" }}>
                             <SummaryCard
                                 topic={data.topic}
                                 subject={data.subject}
                             />
                        </Grid>
                     ))}
                  </Grid>
               </Box>
            </Box>
         </ClientLayout>
      </div>
   );
};

export default summary;
