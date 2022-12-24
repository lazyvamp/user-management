import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { userType } from "../types/user";

export const userDetailsUpdate = [
  {
    label: "Name",
    name: "name",
    disable: false,
    type: "text",
    wdth: 12,
  },
  {
    label: "Email",
    name: "email",
    disable: false,
    type: "text",
    wdth: 12,
  },
  {
    label: "Phone",
    name: "phone",
    disable: false,
    type: "text",
    wdth: 12,
  },
  {
    label: "Website",
    name: "website",
    disable: false,
    type: "text",
    wdth: 12,
  },
];

type editDialogProps = {
  dialogTitle?: string;
  dataToUpdate: any;
  handleClose: Function;
  onEdit: Function;
};

const EditDialog = ({
  dialogTitle,
  dataToUpdate,
  handleClose,
  onEdit,
}: editDialogProps) => {
  const [updatedData, setUpdatedData] = useState<userType | null>(null);

  const handleChange = (event: any) => {
    if (updatedData) {
      setUpdatedData({
        ...updatedData,
        [event.target.name]: event.target.value,
      });
    }
  };

  useEffect(() => {
    setUpdatedData(dataToUpdate);
    return () => {
      setUpdatedData(null);
    };
  }, [dataToUpdate]);

  return (
    <Dialog
      fullWidth
      maxWidth={"sm"}
      open={Boolean(dataToUpdate)}
      onClose={() => handleClose()}
      PaperProps={{
        style: { borderRadius: "12px" },
      }}
    >
      <DialogTitle>
        {dialogTitle}
        <IconButton
          onClick={() => handleClose()}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          pt: "16px !important",
        }}
      >
        <Grid container spacing={2}>
          {updatedData &&
            userDetailsUpdate.map((current: any) => {
              return (
                <Grid item lg={current.wdth} key={current.name}>
                  <TextField
                    fullWidth
                    label={current.label}
                    value={updatedData[current.name as keyof userType]}
                    name={current.name}
                    onChange={handleChange}
                    type={current.type}
                    disabled={current.disabled}
                    sx={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      paddingBottom: 0,
                      marginTop: 0,
                      fontWeight: 500,
                    }}
                    inputProps={{
                      style: {
                        padding: "12px",
                      },
                    }}
                  />
                </Grid>
              );
            })}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onEdit(updatedData);
          }}
          sx={{ marginRight: "20px", marginBottom: "20px" }}
          variant="contained"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
