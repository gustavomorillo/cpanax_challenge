import { FC } from "react";
import { Modal as MUIModal, useMediaQuery } from "@mui/material";
import { Box, Card, Image } from "./";

interface Props {
  open: boolean;
  handleClose: (e: boolean) => void;
  images: string[];
}

export const Modal: FC<Props> = ({ open, handleClose, images }: Props) => {
  const matchesMobile = useMediaQuery("(max-width:640px)");
  return (
    <MUIModal open={open} onClose={handleClose}>
      <Box>
        <Card matchesmobile={matchesMobile}>
          {images.map((image) => (
            <Image key={image} src={image} />
          ))}
        </Card>
      </Box>
    </MUIModal>
  );
};
