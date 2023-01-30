import { Modal as MUIModal } from "@mui/material";
import { FC } from "react";
import { Box } from "./";

interface Props {
  open: boolean;
  onClose: (e: boolean) => void;
  children: React.ReactNode;
}

export const Modal: FC<Props> = ({ open, onClose, children }: Props) => {
  return (
    <MUIModal open={open} onClose={onClose}>
      <Box>{children}</Box>
    </MUIModal>
  );
};
