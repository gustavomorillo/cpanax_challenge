import { Box as MUIBox } from "@mui/material";
import { styled } from "@mui/system";

export const Box = styled(MUIBox)({
  width: "50%",
  position: "absolute",
  top: "50%",
  left: "50%",
  height: 150,
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  border: "2px solid #fff",
  padding: 20,
});
