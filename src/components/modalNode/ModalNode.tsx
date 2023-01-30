import { Box } from "./";
import { Modal, Box as MUIBox, TextField, Button } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  open: boolean;
  handleClose: () => void;
  nodeInfo: any;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSave: () => void;
}

export const ModalNode = ({
  open,
  handleClose,
  nodeInfo,
  handleChange,
  handleSave,
}: Props) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box>
        <MUIBox
          sx={{
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
        >
          <TextField
            helperText="Please enter node label"
            id="demo-helper-text-aligned"
            label="Name"
            value={nodeInfo.name}
            onChange={handleChange}
            name="name"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            helperText="Please enter node description"
            id="demo-helper-text-aligned-no-helper"
            label="Description"
            value={nodeInfo.description}
            onChange={handleChange}
            name="description"
            InputLabelProps={{ shrink: true }}
          />
        </MUIBox>

        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
        <Button variant="outlined" sx={{ marginLeft: 2 }} onClick={handleClose}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};
