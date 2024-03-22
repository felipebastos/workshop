import Button, {ButtonProps} from '@mui/material/Button'; 
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: 'red',
    backgroundColor: 'blue',
    '&:hover': {
        color: 'blue',
        backgroundColor: 'red'
    }

}));

export default function MeuButton(params : {texto: string, href: string}){
    return <StyledButton href={params.href}>{params.texto}</StyledButton>;
}