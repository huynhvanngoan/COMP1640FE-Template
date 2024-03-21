
import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams
import { useDispatch, useSelector } from 'react-redux';
import { addStuff } from '../../../redux/userRelated/userHandle';
import { underControl } from '../../../redux/userRelated/userSlice';
import { BlueButton } from "../../../components/buttonStyles";
import Popup from "../../../components/Popup";
import Classroom from "../../../assets/classroom.png";
import styled from "styled-components";


const StyledContainer = styled(Box)`
  flex: 1 1 auto;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const StyledBox = styled(Box)`
  max-width: 500px;
  padding: 40px 3rem 40px;
  margin-top: 1rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddAcademicYear = ({ situation }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const userState = useSelector(state => state.user);
    const { status, currentUser, response, error } = userState;
    const { sclassesList } = useSelector((state) => state.sclass);

    // Define submitHandler, sclassName, setSclassName, loader, message, setShowPopup, showPopup
    const [year, setYears] = useState("");
    const [des, setDes] = useState("");
    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [openDate, setOpenDate] = useState('');
    const [closeDate, setCloseDate] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        setLoader(true); // Set loader to true when form is submitted
        // Your submit logic here, you can set loader to false when operation is completed
    }
   
    return (
        <>
           
           <StyledContainer>
                <StyledBox>
                    <Stack sx={{
                        alignItems: 'center',
                        mb: 3
                    }}>
                        <img
                            src={Classroom}
                            alt="classroom"
                            style={{ width: '80%' }}
                        />
                    </Stack>
                    <form onSubmit={submitHandler}>
                        <Stack spacing={3}>
                            <TextField
                                label="Create Name Academic"
                                variant="outlined"
                                value={year}
                                onChange={(event) => {
                                    setYears(event.target.value);
                                }}
                                required
                            />
                             <TextField
                                            label="Select Open Date"
                                            type="date"
                                            value={openDate}
                                            onChange={(event) => setOpenDate(event.target.value)} required
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                              <TextField
                                            label="Select Close Date"
                                            type="date"
                                            value={closeDate}
                                            onChange={(event) => setCloseDate(event.target.value)} required
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                <TextField
                                            label="Descriptions"
                                            variant="outlined"
                                              value={des}
                                            onChange={(event) => {
                                          setDes(event.target.value);
                                }}
                                required
                            />
                            <BlueButton
                                fullWidth
                                size="large"
                                sx={{ mt: 3 }}
                                variant="contained"
                                type="submit"
                                disabled={loader}
                            >
                                {loader ? <CircularProgress size={24} color="inherit" /> : "Create"}
                            </BlueButton>
                            <Button variant="outlined" onClick={() => navigate(-1)}>
                                Go Back
                            </Button>
                        </Stack>
                    </form>
                </StyledBox>
            </StyledContainer>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />

        </>
    )
}

export default AddAcademicYear;
