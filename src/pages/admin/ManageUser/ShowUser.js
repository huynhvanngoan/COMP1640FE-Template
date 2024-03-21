import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTeachers } from "../../../redux/teacherRelated/teacherHandle";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { deleteUser } from "../../../redux/userRelated/userHandle";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { StyledTableCell, StyledTableRow } from "../../../components/styles";
import { BlueButton, GreenButton } from "../../../components/buttonStyles";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SpeedDialTemplate from "../../../components/SpeedDialTemplate";
import Popup from "../../../components/Popup";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const ShowTeachers = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { teachersList, loading, error, response } = useSelector(
    (state) => state.teacher
  );
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllTeachers(currentUser._id));
  }, [currentUser._id, dispatch]);

  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   } else if (response) {
  //     return (
  //       <Box
  //         sx={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}
  //       >
  //         <GreenButton
  //           variant="contained"
  //           onClick={() => navigate("/Admin/teachers/chooseclass")}
  //         >
  //           Add Teacher
  //         </GreenButton>
  //       </Box>
  //     );
  //   } else if (error) {
  //     console.log(error);
  //   }

  const deleteHandler = (deleteID, address) => {
    console.log(deleteID);
    console.log(address);
    setMessage("Sorry the delete function has been disabled for now.");
    setShowPopup(true);

    // dispatch(deleteUser(deleteID, address)).then(() => {
    //     dispatch(getAllTeachers(currentUser._id));
    // });
  };

  // const columns = [
  //     { id: 'name', label: 'Name', minWidth: 170 },
  //     { id: 'teachSubject', label: 'Subject', minWidth: 100 },
  //     { id: 'teachSclass', label: 'Class', minWidth: 170 },
  // ];

  function createData(name, email, role, status) {
    return { name, email, role, status };
  }

  const rows = [
    createData("BaoBao", "Baogcc200104@fpt.edu.vn", "student"),
    createData("NgoanHuynh", "Baogcc200104@fpt.edu.vn", "student"),
    createData("TuanTran", "Baogcc200104@fpt.edu.vn", "student"),
    createData("TheNguyen", "Baogcc200104@fpt.edu.vn", "student"),
    createData("TuyenDo", "Baogcc200104@fpt.edu.vn", "student"),
  ];

  // const rows = teachersList.map((teacher) => {
  //     return {
  //         name: teacher.name,
  //         teachSubject: teacher.teachSubject?.subName || null,
  //         teachSclass: teacher.teachSclass.sclassName,
  //         teachSclassID: teacher.teachSclass._id,
  //         id: teacher._id,
  //     };
  // });

  //   const actions = [
  //     {
  //       icon: <PersonAddAlt1Icon color="primary" />,
  //       name: "Add New Teacher",
  //       action: () => navigate("/Admin/teachers/chooseclass"),
  //     },
  //     {
  //       icon: <PersonRemoveIcon color="error" />,
  //       name: "Delete All Teachers",
  //       action: () => deleteHandler(currentUser._id, "Teachers"),
  //     },
  //   ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ShowTeachers;
