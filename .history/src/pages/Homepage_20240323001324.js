"use client"
import React from 'react';
import { Container, Grid } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import LoginPage from './LoginPage';

const Homepage = () => {

    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={Students} alt="students" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <LoginPage />
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
  width: 100vh
`;

const StyledPaper = styled.div`
  padding: 0px;
  height: 100vh;
  width: 50
`;





