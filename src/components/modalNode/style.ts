import { styled } from "@mui/system";
import { Box as MUIBox } from "@mui/material";

export const Box = styled(MUIBox)({
  width: 500,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  border: "2px solid #fff",
  padding: 20,
});
