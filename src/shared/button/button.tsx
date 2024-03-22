import Button, {ButtonProps} from '@mui/material/Button'; 
import { styled } from '@mui/material/styles';

import { useRouter } from 'next/router';

const StyledButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: 'red',
    backgroundColor: 'blue',
    '&:hover': {
        color: 'blue',
        backgroundColor: 'red'
    }

}));

export default function MeuButton(params : {texto: string, href: string}){
    const router = useRouter();
    return <StyledButton onClick={() => router.push(params.href)}>{params.texto}</StyledButton>;
}