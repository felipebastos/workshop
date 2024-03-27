import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const theme = createTheme({
    palette: {
        primary: {
            main: '#ff00ee',
        },
        secondary: {
            main: '#eeff00',
        },
    },
});

interface OutroProps {
    variant?: "contained" | "outlined" | "text";
    value?: string;
    color?: "primary" | "secondary";
}

export default function Outro(params: OutroProps){
    return (
        <ThemeProvider theme={theme}>
            <Button variant={params.variant} color={params.color}>{params.value}</Button>
        </ThemeProvider>
    )
}