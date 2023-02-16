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
               paddingX: {md:"32px", lg:"32px", xs:"12px"},
               paddingY: "31px",
               overflowY: "auto",
            }}
         >
            <div className="flex gap-3 overflow-auto">
               <Box
                  sx={{
                     display: {
                        xl: "block",
                        xs: "none",
                        md: "none",
                        lg: "block",
                     },
                  }}
                  className=" hidden md:flex  h-[5em] w-[5em] items-center justify-center rounded-full border-indigo-600 bg-[#14AE5C] md:flex-row "
               >
                  <h5 className="font-extrabold text-white">N</h5>
               </Box>
               <div className="flex h-[100%] w-[100%]  flex-col gap-2 bg-transparent ">
                  <div className="flex flex-col items-center justify-between md:flex-row ">
                     <p className="  text-[0.75em] font-bold text-[#2F327D] md:text-[1.5em]">
                        {topic}
                     </p>
                     <p className="text-[0.5em] font-normal text-[#353535] md:text-[1em]">
                        {datePosted}
                     </p>
                  </div>

                  <p className="text-[0.5em] font-normal text-[#353535] md:text-[1em]">
                     {detail}
                  </p>
                  <Link
                     href=""
                     className="text-[0.5em] font-bold  text-[#2F327D] underline md:text-[1rem] "
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
