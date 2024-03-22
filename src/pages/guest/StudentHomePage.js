import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper, Typography } from '@mui/material'
import styled from 'styled-components';
import CountUp from 'react-countup';
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { GreenButton, BlueButton, RedButton } from '../../components/buttonStyles';
import TableTemplate from '../../components/TableTemplate';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
const StudentHomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false); // State to manage delete confirmation dialog
    const [open, setOpen] = useState(null);
    const ButtonContainer = ({ children }) => {
      return (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              {children}
          </div>
      );
  };
  const handleDelete = () => {
    // Dispatch delete action here
    // For demo purposes, just console log
    console.log("Delete confirmed");
    setDeleteConfirmationOpen(false); // Close the confirmation dialog
};
  const artiles = [
      { id: 1, title: 'CW123', content: "ABC", status: "Đang Đợi" },
      // Other year data...
  ];

  const Columns = [
      { id: 'id', label: 'ID' },
      { id: 'title', label: 'Title' },
      { id: 'content', label: 'Content' },
      { id: 'status', label: 'Status ' },
      
  ];

  const Rows = artiles.map(artile => ({
      title:artile.title,
      content:artile.content,
      status:artile.status,
      id:artile.id
  }));

  const SclassButtonHaver = ({ row }) => {
      return (
          <ButtonContainer>
              <BlueButton variant="contained">
                  Edit
              </BlueButton>
              <RedButton color="secondary" onClick={() => setDeleteConfirmationOpen(true)}>
                  Delete
              </RedButton>
          </ButtonContainer>
      );
  };
  
    
    return (
        <>
          <TableTemplate  buttonHaver={SclassButtonHaver} columns={Columns} rows={Rows} />
            <Dialog open={deleteConfirmationOpen} onClose={() => setDeleteConfirmationOpen(false)}>
                <DialogTitle>Delete Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this item?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <RedButton onClick={handleDelete}>Yes</RedButton>
                    <BlueButton onClick={() => setDeleteConfirmationOpen(false)}>No</BlueButton>
                </DialogActions>
            </Dialog>
            <Box  sx={{ display: 'flex' ,justifyContent: 'flex-end', marginTop: '16px' }}>
                <GreenButton variant="contained" onClick={() => navigate("/newArticles")}>
                    New Artiles
                </GreenButton>
            </Box>
        </>
    )
}

const ChartContainer = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: column;
  height: 240px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.25rem;
`;

const Data = styled(CountUp)`
  font-size: calc(1.3rem + .6vw);
  color: green;
`;



export default StudentHomePage