

// export default StudentDasboard
import { useNavigate } from 'react-router-dom';
import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import NavbarStudent from "../../components/navbarStudent";

const StudentDasboard = () => {
    const navigate = useNavigate();
    const TABLE_HEAD = ["Name", "Closure Date", "Final Closure Date", "Action"];

    const TABLE_ROWS = [
        {
            name: "2024",
            closreDate: "03/12/2024",
            finalCloseDate: "30/04/2024",
        },
        {
            name: "2023",
            closreDate: "03/12/2023",
            finalCloseDate: "30/04/2023",
        },
    ];
    
    const handleAddNewArticle = () => {
        navigate('/student-dashboard/new-article');
        console.log("Adding new article...");
    };

    return (
        <>
            <NavbarStudent />
            <div className="mt-20"> {/* Add margin top to create space below the navbar */}
                <Card className="h-full w-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map(({ name, closreDate, finalCloseDate }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {closreDate}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {finalCloseDate}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <button 
                                                type="button"
                                                className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={handleAddNewArticle}
                                            >
                                                Add new article
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Card>
            </div>
        </>
    )
}


export default StudentDasboard;
