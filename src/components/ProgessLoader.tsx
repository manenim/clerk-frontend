import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearIndeterminate() {
  return (
    <Box width="100%" position={"fixed"} top={0} left={0} zIndex={10000000000}>
      <LinearProgress />
    </Box>
  );
}
