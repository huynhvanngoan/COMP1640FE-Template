"use client"
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser } from '../redux/userRelated/userHandle';
const Homepage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const password = "zxc"
  
    const { status, currentUser, currentRole } = useSelector(state => state.user);;
  
    const [loader, setLoader] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");
  
    const navigateHandler = (user) => {
      if (user === "Admin") {
          const email = "yogendra@12"
          const fields = { email, password }
          setLoader(true)
          dispatch(loginUser(fields, user))
        }
    }
    useEffect(() => {
        if (status === 'success' || currentUser !== null) {
          if (currentRole === 'Admin') {
            navigate('/Admin/dashboard');
          }
          else if (currentRole === 'Student') {
            navigate('/Student/dashboard');
          } else if (currentRole === 'Teacher') {
            navigate('/Teacher/dashboard');
          }
        }
        else if (status === 'error') {
          setLoader(false)
          setMessage("Network Error")
          setShowPopup(true)
        }
      }, [status, currentRole, navigate, currentUser]);
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={Students} alt="students" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to
                            <br />
                            School Management
                            <br />
                            System
                        </StyledTitle>
                        <StyledText>
                            Streamline school management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledLink onClick={() => navigateHandler("Admin")}>
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            <StyledLink to="/guest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
