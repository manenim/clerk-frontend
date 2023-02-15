import { Box } from "@mui/material";
import React from "react";
import { TbFileInvoice } from "react-icons/tb";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

interface SummaryCardInter {
   topic?: string;
   subject?: string;
}

const SummaryCard = ({ topic, subject }: SummaryCardInter) => {
   const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

   return (
      <Box
         sx={{
            width: "20rem",
            height: "12rem",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #DADCE0",
            borderRadius: "3px",
         }}
      >
         <div className="grid place-content-center h-[90%]">
            <div className="h-[4.3rem] w-[4.3rem] grid place-content-center bg-gradient-to-tl from-blue-400 via-blue-500 to-white rounded-md">
               <p>{subject}</p>
            </div>
         </div>
         <div className="flex px-2 justify-between  items-center pb-2">
            <div className="gap-2 flex items-center">
               <TbFileInvoice /> <p>{topic}</p>
            </div>
            <div>
               <StarBorderRoundedIcon />
            </div>
         </div>
      </Box>
   );
};

export default SummaryCard;
