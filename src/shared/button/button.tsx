import Button, {ButtonProps} from '@mui/material/Button'; 
import { styled } from '@mui/material/styles';

import { useRouter } from 'next/navigation';

const StyledButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: 'pallete.main.color',
    backgroundColor: 'pallete.main.backgroundColor',
    '&:hover': {
        color: 'grey',
        backgroundColor: 'blue'
    }

}));

export default function MeuButton(params : {texto: string, href: string}){
    const router = useRouter();
    return <StyledButton onClick={() => router.push(params.href)}>{params.texto}</StyledButton>;
}