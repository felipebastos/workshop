import Button, {ButtonProps} from '@mui/material/Button'; 
import { styled } from '@mui/material/styles';

import { useRouter } from 'next/router';

const StyledButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: 'white',
    backgroundColor: 'darkblue',
    '&:hover': {
        color: 'grey',
        backgroundColor: 'blue'
    }

}));

export default function MeuButton(params : {texto: string, href: string}){
    const router = useRouter();
    return <StyledButton onClick={() => router.push(params.href)}>{params.texto}</StyledButton>;
}