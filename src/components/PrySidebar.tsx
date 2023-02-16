import React from "react";
import { RiHome4Line } from "react-icons/ri";
import { RxFileText } from "react-icons/rx";
import { FiBell, FiTrash2 } from "react-icons/fi";
import { BsStar } from "react-icons/bs";
import { Box } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { bgcolor } from "@mui/system";

const PrySidebar = () => {
   return (
      <div>
         <Box
            sx={{
               width: "18em",
               borderRight: "1px solid #D2D2D2",
               display: "flex",
               flexDirection: "column",
               height: "92vh",
            }}
         >
            <Box
               sx={{
                  height: "22rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
               }}
            >
               <div className="pl-[2.5rem] flex items-center gap-3 font-medium text-[1.25rem] text-[#8A8A8A] hover:text-[#2F327D] hover:border-l-[6px] hover:border-l-[#2F327D]">
                  <RiHome4Line />
                  <p>Home</p>
               </div>
               <div className="pl-[2.5rem] flex items-center gap-3 font-medium text-[1.25rem] text-[#8A8A8A] hover:text-[#2F327D] hover:border-l-[6px] hover:border-l-[#2F327D]">
                  <RxFileText />
                  <p>Summary</p>
               </div>
               <div className="pl-[2.5rem] flex items-center gap-3 font-medium text-[1.25rem] text-[#8A8A8A] hover:text-[#2F327D] hover:border-l-[6px] hover:border-l-[#2F327D]">
                  <NotificationsNoneIcon />
                  <p>Announcement</p>
               </div>
               <div className="pl-[2.5rem] flex items-center gap-3 font-medium text-[1.25rem] text-[#8A8A8A] hover:text-[#2F327D] hover:border-l-[6px] hover:border-l-[#2F327D]">
                  <FiTrash2 />
                  <p>Trash</p>
               </div>
            </Box>
            <Box
               sx={{
                  width: "96%",
                  bgcolor: "#D2D2D2",
                  height: "1px",
                  mx: "2px",
               }}
            >
               {" "}
            </Box>
            <Box sx={{ mt: "2.3rem", pl: "2.6rem", pr: "2rem" }}>
               <p className="font-medium text-[1.5em] text-[#2F327D]">
                  Favourites
               </p>
               <div className="mt-[1.3rem] flex items-center justify-between">
                  <div>
                     <p className="font-medium text-[1.1em]">
                        English Language
                     </p>
                     <p className="font-[400] text-[#5C5C5C] text-[1em] ">
                        Orals - Pronouncation
                     </p>
                  </div>
                  <div className=" text-[#5C5C5C] ">
                     <StarBorderRoundedIcon
                        sx={{ fontSize: "2em", fontWeight: "5px" }}
                     />
                  </div>
               </div>

               <div className="mt-[1.3rem] flex items-center justify-between">
                  <div>
                     <p className="font-medium text-[1.1em]">Geography </p>
                     <p className="font-[400] text-[#5C5C5C] text-[1em] ">
                        Map and map reading
                     </p>
                  </div>
                  <div className=" text-[#5C5C5C] ">
                     <StarBorderRoundedIcon
                        sx={{ fontSize: "2em", fontWeight: "5px" }}
                     />
                  </div>
               </div>
            </Box>
         </Box>
      </div>
   );
};

export default PrySidebar;
