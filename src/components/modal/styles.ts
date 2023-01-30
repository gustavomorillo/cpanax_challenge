import { Card as MUICard, Box as MUIBox } from "@mui/material";
import { styled } from "@mui/system";

export const Image = styled("img")({
  width: 115,
  padding: 10,
});

export const Card = styled(MUICard)<{ matchesmobile: boolean }>(
  ({ matchesmobile }) => ({
    display: "flex",
    flexDirection: matchesmobile ? "column" : "row",
  })
);

export const Box = styled(MUIBox)({
  width: "50%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  border: "2px solid #fff",
  padding: 20,
});
