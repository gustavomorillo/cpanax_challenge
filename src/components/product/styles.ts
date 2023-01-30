import {
  CardContent as MUICardContent,
  CardMedia as MUICardMedia,
  Card as MUICard,
} from "@mui/material";
import { styled } from "@mui/system";

export const Card = styled(MUICard)({
  cursor: "pointer",
  maxWidth: 500,
  margin: "0 auto",
});

export const CardContent = styled(MUICardContent)({
  textAlign: "center",
});

export const CardMedia = styled(MUICardMedia)<{
  gridvalue: number;
  matchesmobile: boolean;
}>(({ gridvalue, matchesmobile }) => ({
  height: gridvalue === 12 && !matchesmobile ? 500 : 200,
}));
