
import React, { useState } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { GreenButton, BlueButton, RedButton } from '../../../components/buttonStyles';
import TableTemplate from '../../../components/TableTemplate';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const ShowAcademicYear = () => {
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
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {children}
            </div>
        );
    };

    const years = [
        { id: 1, academicYear: 'Year2023', openDate: "1/1/2022", closeDate: "1/1/2023", des: "ABC" },
        // Other year data...
    ];

    const Columns = [
        { id: 'id', label: 'ID' },
        { id: 'academicYear', label: 'Academic Year' },
        { id: 'openDate', label: 'Open Date' },
        { id: 'closeDate', label: 'Close Date' },
        { id: 'des', label: 'Description' },
    ];

    const Rows = years.map(year => ({
        academicYear: year.academicYear,
        openDate: year.openDate,
        closeDate: year.closeDate,
        des: year.des,
        id: year.id,
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
                    <DialogContentText>s
                        Are you sure you want to delete this item?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <RedButton onClick={handleDelete}>Yes</RedButton>
                    <BlueButton onClick={() => setDeleteConfirmationOpen(false)}>No</BlueButton>
                </DialogActions>
            </Dialog>
            <Box  sx={{ display: 'flex' ,justifyContent: 'flex-end', marginTop: '16px' }}>
                <GreenButton variant="contained" onClick={() => navigate("/Admin/add_academic_year")}>
                    Add Academic Years
                </GreenButton>
            </Box>
        </>
    );
};

export default ShowAcademicYear;
