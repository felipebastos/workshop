import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

interface StyledButtonProps extends ButtonProps {
  tipo?: "um" | "dois";
}

const BotaoDual = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'tipo',
})<StyledButtonProps>(({ tipo, theme }) => ({
  
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
    
    
    '&:hover': {
      
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.text.secondary,
      
    },
}));

export default BotaoDual;
