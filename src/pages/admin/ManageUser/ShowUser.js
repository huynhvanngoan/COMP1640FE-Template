import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import {
  GreenButton,
  BlueButton,
  RedButton,
} from "../../../components/buttonStyles";
import TableTemplate from "../../../components/TableTemplate";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";

const ShowUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false); // State to manage delete confirmation dialog

  const handleDelete = () => {
    // Dispatch delete action here
    // For demo purposes, just console log
    console.log("Delete confirmed");
    setDeleteConfirmationOpen(false); // Close the confirmation dialog
  };

  const ButtonContainer = ({ children }) => {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {children}
      </div>
    );
  };

  const users = [
    { id: 1,name: 'HVN',  email: "Email@gmail.com", password: "ABC", createAt: "3/21/2024" },
    // Other year data...
  ];

  const Columns = [
    { id: "id", label: "ID" },
    { id: "name", label: "Name"}, 
    { id: "email", label: "Email" },
    { id: "password", label: "Password" },
    { id: "createAt", label: "CreateAt" },
  ];

  const Rows = users.map((users) => ({
    name: users.name,
    email: users.email,
    password: users.password,
    createAt: users.createAt,
    id: users.id,
  }));

  const SclassButtonHaver = ({ row }) => {
    return (
      <ButtonContainer>
        <BlueButton
          variant="contained"
          onClick={() => navigate("/Admin/edit_user")}
        >
          Edit
        </BlueButton>
        <RedButton
          color="secondary"
          onClick={() => setDeleteConfirmationOpen(true)}
        >
          Delete
        </RedButton>
      </ButtonContainer>
    );
  };

  return (
    <>
      <TableTemplate
        buttonHaver={SclassButtonHaver}
        columns={Columns}
        rows={Rows}
      />
      <Dialog
        open={deleteConfirmationOpen}
        onClose={() => setDeleteConfirmationOpen(false)}
      >
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <RedButton onClick={handleDelete}>Yes</RedButton>
          <BlueButton onClick={() => setDeleteConfirmationOpen(false)}>
            No
          </BlueButton>
        </DialogActions>
      </Dialog>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}
      >
        <GreenButton
          variant="contained"
          onClick={() => navigate("/Admin/add_user")}
        >
          Add User
        </GreenButton>
      </Box>
    </>
  );
};

export default ShowUser;
