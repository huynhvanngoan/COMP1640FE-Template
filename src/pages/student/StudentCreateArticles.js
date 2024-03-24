
import React, { useState } from 'react';
import { Box, TextField, Stack, Button, Typography } from '@mui/material';
import styled from "styled-components";
import NavbarStudent from '../../components/navbarStudent';


const StudentCreateArticles = () => {
  const [docFile, setDocFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDocUpload = (event) => {
    const file = event.target.files[0];
    setDocFile(file);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = () => {

    // Here you can submit the form data, e.g., send it to an API
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Document file:', docFile);
    console.log('Image file:', imageFile);
    // Reset form state if needed
    setTitle('');
    setContent('');
    setDocFile(null);
    setImageFile(null);
    setErrorMessage('');
  };

  const handleClearForm = () => {
    setTitle('');
    setContent('');
    setDocFile(null);
    setImageFile(null);
    setErrorMessage('');
  };

  return (
    <><NavbarStudent  />
    <div className='containers' style={{ marginTop: '100px'}}>
      <StyledContainer>
        <StyledBox>
          <h1>Student Submit Article</h1>
          <form>
            <Stack sx={{ mt: 3 }}>
              <TextField
                label="Title"
                variant="outlined"
                sx={{ mb: 3 }}
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
              <TextField
                label="Content"
                variant="outlined"
                multiline
                sx={{ mb: 3 }}
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)} />
              <Button variant="contained" component="label" sx={{ width: 200, mb: 3 }}>
                Upload Document
                <input type="file" accept=".doc, .docx, .pdf" style={{ display: 'none' }} onChange={handleDocUpload} />
              </Button>
              {docFile && <Typography variant="body1">Selected document: {docFile.name}</Typography>}
              <Button variant="contained" component="label" sx={{ width: 200, mb: 3 }}>
                Upload Image
                <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
              </Button>
              {imageFile && <Typography variant="body1">Selected image: {imageFile.name}</Typography>}
              {errorMessage && <Typography variant="body1" color="error">{errorMessage}</Typography>}
            </Stack>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
              <SubmitButton variant="contained" onClick={handleSubmit}>Submit</SubmitButton>
              <ClearFormButton variant="contained" onClick={handleClearForm}>Clear Form</ClearFormButton>
            </Stack>
          </form>
        </StyledBox>
      </StyledContainer>
    </div></>
  );
}

export default StudentCreateArticles;

const StyledContainer = styled(Box)`
  flex: 1 1 auto;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const StyledBox = styled(Box)`
  width: 900px;
  padding: 50px 3rem 50px;
  margin-top: 1rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled(Button)``;

const ClearFormButton = styled(Button)``;
