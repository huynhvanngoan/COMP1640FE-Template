// import Container from '@mui/material/Container';
// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// import Popup from "../../components/Popup";
// import { useDispatch, useSelector } from 'react-redux';
// import { BlueButton } from "../../components/buttonStyles";
// import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
// import { useNavigate, useParams } from 'react-router-dom'; // Import useParams



// const StyledContainer = styled(Box)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const StyledBox = styled(Box)`
// max-width: 1200px; /* Thay đổi maxWidth tùy thuộc vào nhu cầu của bạn */
// padding: 40px 3rem 40px;
// background-color: white;
// box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
// border: 1px solid #ccc;
// border-radius: 4px;
// `;


// const StudentAddArticles = () => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const params = useParams()

//   const userState = useSelector(state => state.user);
//   const { status, currentUser, response, error } = userState;
//   const { sclassesList } = useSelector((state) => state.sclass);

//   // Define submitHandler, sclassName, setSclassName, loader, message, setShowPopup, showPopup
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [loader, setLoader] = useState(false);
//   const [message, setMessage] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const [file, setFile] = useState('');
//   const [image, setImage] = useState('');
//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked); // Đảo ngược trạng thái của checkbox
//   };
//   const handleImageChange = (event) => {
//     const selectedImage = event.target.files[0];
//     setImage(URL.createObjectURL(selectedImage)); // Lấy URL của hình ảnh được chọn và cập nhật state
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     setLoader(true); // Set loader to true when form is submitted
//     // Your submit logic here, you can set loader to false when operation is completed
// }
//   return (
//     <>
          
            
//           <StyledContainer>
//       <StyledBox>
//         <form onSubmit={submitHandler}>
//           <Stack spacing={3}>
//             <TextField
//               label="Title"
//               variant="outlined"
//               value={title}
//               onChange={(event) => setTitle(event.target.value)}
//               required
//             />
//             <TextField
//               label="Content"
//               variant="outlined"
//               value={content}
//               onChange={(event) => setContent(event.target.value)}
//             />
//             <TextField
//               label="Choose a file"
//               type="file"
//               value={file}
//               onChange={(event) => setFile(event.target.value)}
//               required
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//             <TextField
//               label="Choose Image"
//               type="file"
//               value={image}
//               onChange={handleImageChange}
//               required
//               InputLabelProps={{
//                 shrink: true,
//               }}
             
//             />
//              {image && <img src={image} alt="Selected Image" style={{ maxWidth: "100%" }} />}
//             <Button
              
//               size="large"
//               sx={{ mt: 3 }}
//               variant="contained"
//               type="submit"
//               disabled={!isChecked || loader} 
              
//             >
//               {loader ? <CircularProgress size={24} color="inherit" /> : "Submit"}
//             </Button>
//             <Button variant="outlined" onClick={() => navigate(-1)}>
//               Go Back
//             </Button>
//           </Stack>
//         </form>
//         <input
//             type="checkbox"
//             checked={isChecked}
//             onChange={handleCheckboxChange}
            
//           />
//           <label> I aceppt all Term and Conditions</label>
//       </StyledBox>
//     </StyledContainer>

//     </>
//   )
// }

// export default StudentAddArticles

import Container from '@mui/material/Container';
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Popup from "../../components/Popup";
import { useDispatch, useSelector } from 'react-redux';
import { BlueButton } from "../../components/buttonStyles";
import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams

const StyledContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledBox = styled(Box)`
max-width: 1200px; /* Thay đổi maxWidth tùy thuộc vào nhu cầu của bạn */
padding: 40px 3rem 40px;
background-color: white;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
border: 1px solid #ccc;
border-radius: 4px;
`;


const StudentAddArticles = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const userState = useSelector(state => state.user);
  const { status, currentUser, response, error } = userState;
  const { sclassesList } = useSelector((state) => state.sclass);

  // Define submitHandler, sclassName, setSclassName, loader, message, setShowPopup, showPopup
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [file, setFile] = useState('');
  const [image, setImage] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Đảo ngược trạng thái của checkbox
  };
  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage); // Set the selected image file directly
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoader(true); // Set loader to true when form is submitted
    // Your submit logic here, you can set loader to false when operation is completed
}
  return (
    <>
          
            
          <StyledContainer>
      <StyledBox>
        <form onSubmit={submitHandler}>
          <Stack spacing={3}>
            <TextField
              label="Title"
              variant="outlined"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
            <TextField
              label="Content"
              variant="outlined"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
            <TextField
              label="Choose a file"
              type="file"
              onChange={(event) => setFile(event.target.files[0])} // Store the selected file directly
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Choose Image"
              type="file"
              onChange={handleImageChange} // Call function to handle image selection
              required
              InputLabelProps={{
                shrink: true,
              }}
             
            />
             {image && <img src={URL.createObjectURL(image)} alt="Selected Image" style={{ maxWidth: "100%", height: "auto" }} />} {/* Show the selected image */}
            <Button
              
              size="large"
              sx={{ mt: 3 }}
              variant="contained"
              type="submit"
              disabled={!isChecked || loader} 
              
            >
              {loader ? <CircularProgress size={24} color="inherit" /> : "Submit"}
            </Button>
            <Button variant="outlined" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </Stack>
        </form>
        <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            
          />
          <label> I aceppt all Term and Conditions</label>
      </StyledBox>
    </StyledContainer>

    </>
  )
}

export default StudentAddArticles;
