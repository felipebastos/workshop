import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


import { Pokemon } from "@/app/teste";

export default function MyTable(params: {items: Pokemon[]}) {
    return (
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nome</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {params.items.map((item) => (
                    <TableRow
                     key={item.name}
                     sx={
                        {
                         '&:hover': { backgroundColor: "gray"},
                         '&:nth-child(even)': { backgroundColor: "lightgray",},
                         '&:nth-child(even):hover': { backgroundColor: 'gray'},
                        }
                     }
                    >
                        <TableCell>{item.name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}