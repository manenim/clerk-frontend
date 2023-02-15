import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";

interface AnnouncementCardInter {
   detail?: string;
   topic?: string;
   datePosted?: string;
}

const AnnouncementCard = ({
   detail,
   topic,
   datePosted,
}: AnnouncementCardInter) => {
   return (
      <div>
         <Box
            sx={{
               width: "100%",
               height: "180px",
               bgcolor: "#F6FAFB",
               borderRight: "9px solid #2F327D",
               borderRadius: "5px",
               paddingX: "32px",
               paddingY: "31px",
            }}
         >
            <div className="flex gap-4">
               <div className=" flex  md:flex-row rounded-full w-[5em] h-[5em] border-indigo-600 bg-[#14AE5C] justify-center items-center ">
                  <h5 className="text-white font-extrabold">N</h5>
               </div>
               <div className="flex flex-col bg-transparent  w-[100%] h-[100%] gap-2 ">
                  <div className="flex flex-col md:flex-row justify-between items-center ">
                     <p className="font-bold text-[#2F327D] text-[1em] md:text-[1.5em]">
                        {topic}
                     </p>
                     <p className="text-[#353535] text-[0.5em] md:text-[1em] font-normal">
                        {datePosted}
                     </p>
                  </div>

                  <p className="text-[#353535] text-[0.5em] md:text-[1em] font-normal">
                     {detail}
                  </p>
                  <Link
                     href=""
                     className="underline text-[#2F327D]  font-bold text-[0.5em] md:text-[1rem] "
                  >
                     Read More
                  </Link>
               </div>
            </div>
         </Box>
      </div>
   );
};

export default AnnouncementCard;
