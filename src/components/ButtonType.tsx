import React from "react";
import { Button } from "@mui/material";
import { ReactNode } from "react";

interface ButtonInterface {
   content: string;
   width?: string;
   height?: string;
   variant: `outlined` | `contained`;
   icons?: ReactNode;
   onClick?: () => void;
}

const ButtonType = ({
   content,
   width,
   height,
   variant,
   icons,
   onClick,
}: ButtonInterface) => {
   return (
      <div>
         <Button
            variant={variant}
            sx={
               variant === "contained"
                  ? { bgcolor: "#2F327D", width: { width }, height: { height } }
                  : {
                       borderColor: "#2F327D",
                       width: { width },
                       color: "#2F327D",
                       height: { height },
                    }
            }
            onClick={onClick}
            className="gap-4 rounded-none"
         >
            {icons} {content}
         </Button>
      </div>
   );
};
export default ButtonType;
