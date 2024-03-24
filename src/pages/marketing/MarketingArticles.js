import React, { useState } from "react";
import { RiSendPlane2Line } from "react-icons/ri";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function MarketingArticles() {
  const [showPopup, setShowPopup] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selected, setSelected] = useState(false);

  const handleAddComment = () => {
    setShowPopup(true);
  };

  const handleInputChange = (event) => {
    setCommentValue(event.target.value);
  };

  const handleSaveComment = () => {
    // Xử lý lưu comment ở đây
    setShowPopup(false);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelected(true);
  };

  function createData(id, image, name, content, Uploaddate, file, status) {
    return { id, image, name, content, Uploaddate, file, status };
  }

  const rows = [
    createData(1, "Frozen yoghurt", "Shades of gray...", 22, "3/24/2024", 24),
    createData(2, "Frozen yoghurt", "Shades of gray...", 24, "3/24/2024", 24),
  ];

  const formatDate = (
    value,
    formatting = { month: "numeric", day: "numeric", year: "numeric" }
  ) => {
    if (!value) return value;

    return new Intl.DateTimeFormat("vi-VN", formatting).format(new Date(value));
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 200,
      renderCell: (params) => {
        const { row } = params;

        return React.createElement(null, row?.name);
      },
    },

    {
      field: "createdAt",
      headerName: "Created_date",
      minWidth: 180,
      maxWidth: 180,
      renderCell: (params) => {
        const { row } = params;

        return React.createElement(
          null,
          formatDate(row?.createdAt, { dateStyle: "short" })
        );
      },
    },
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto" }}
    >
      <Table sx={{ width: "full" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ fontWeight: "bold" }}>
            <TableCell>ID</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Content</TableCell>
            <TableCell align="center">Upload Date</TableCell>
            <TableCell align="center">File</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <React.Fragment key={row.id}>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  justifyContent: "center",
                }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.image}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.content}</TableCell>
                <TableCell align="right">{row.Uploaddate}</TableCell>
                <TableCell align="right">{row.file}</TableCell>
                <TableCell align="right">
                  <select
                    value={selectedOption}
                    onChange={handleOptionChange}
                    style={{
                      borderRadius: "20px",
                      padding: "3px",
                      backgroundColor: selected
                        ? selectedOption === "pending"
                          ? "yellow"
                          : selectedOption === "approved"
                          ? "rgb(0, 0, 255)"
                          : selectedOption === "rejected"
                          ? "red"
                          : "white"
                        : "white",
                    }}
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </TableCell>
                <TableCell align="right">
                  <button
                    onClick={handleAddComment}
                    style={{
                      backgroundColor: "rgb(60, 179, 113)",
                      borderRadius: "20px",
                    }}
                  >
                    Add comment
                  </button>
                </TableCell>
              </TableRow>
              {showPopup && (
                <div
                  className="popup-container"
                  style={{
                    display: "flex",
                    width: "300%",
                    marginLeft: "10px",
                  }}
                >
                  <div className="popup-content" style={{ width: "100%" }}>
                    <textarea
                      value={commentValue}
                      onChange={handleInputChange}
                      placeholder="Enter comment..."
                      style={{
                        height: "40px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <RiSendPlane2Line
                    onClick={handleSaveComment}
                    style={{
                      justifyContent: "center",
                      color: "blue",
                      alignItems: "center",
                      fontSize: "30px",
                      marginTop: "5px",
                      marginLeft: "3px",
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
