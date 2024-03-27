import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

interface StyledButtonProps extends ButtonProps {
  tipo?: "um" | "dois";
}

const BotaoDual = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'tipo',
})<StyledButtonProps>(({ tipo, theme }) => ({
  ...(tipo === 'um' &&
    {
        color: 'white',
        backgroundColor: 'pink',
    }),
    ...(tipo === 'dois' && {
      color: 'black',
      backgroundColor: 'yellow',
    }),
}));

export default BotaoDual;
