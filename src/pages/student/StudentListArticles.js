/* eslint-disable no-global-assign */
import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import NavbarStudent from "../../components/navbarStudent";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";

const StudentListArtiles = () => {
    const [TABLE_ROWS, setTableRows] = useState([
        {
            id: "1",
            title: "text 1",
            image: img1, // Sử dụng biến đã import
            submitdate: "20/20/2023",
            status: "Pending",
        },
        {
            id: "2",
            title: "text 2",
            image: img2, // Sử dụng biến đã import
            submitdate: "20/20/2023",
            status: "Pending",
        },
    ]);

    const [selectedItem, setSelectedItem] = useState(null);

    const handleView = (index) => {
        setSelectedItem(TABLE_ROWS[index]);
    };

    const handleDelete = (index) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            const newTableRows = [...TABLE_ROWS];
            newTableRows.splice(index, 1);
            setTableRows(newTableRows);
        }
    };

    return (
        <>
            <NavbarStudent />
            <Card className="h-full w-full overflow-scroll" style={{ marginTop: "100px" }}>
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {["ID", "Title", "Image","Submition Date", "Status"].map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 " >
                                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70 s">
                                        Actions
                                </Typography>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ id,title, image,submitdate, status }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={id}>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {id}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {title}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <img src={image} alt="" style={{ maxWidth: "100px", maxHeight: "100px" }} />
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {submitdate}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {status}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex items-center justify-start">
                                            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleView(index)}>
                                                View
                                            </button>
                                            <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2">
                                                Edit
                                            </button>
                                            <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(index)}>
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
            {/* Display selected item */}
            {selectedItem && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                   <Card className="p-10 max-w-md mx-auto rounded-lg shadow-md">
    <Typography variant="h5" color="blue-gray" className="font-semibold mb-4">{selectedItem.title}</Typography>
    <img src={selectedItem.image} alt="" className="mb-4" style={{ maxWidth: "200px", maxHeight: "200px" }} />
    <Typography variant="body" color="blue-gray" className="mb-4">Status: {selectedItem.status}</Typography>
    <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setSelectedItem(null)}>Close</button>
</Card>
                </div>
            )}
        </>
    );
};

export default StudentListArtiles;

