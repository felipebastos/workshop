import * as React from 'react';
import { styled } from "@mui/material";
import { useThemeProps } from '@mui/material/styles';


interface LetreiroProps {
    value: number | string;
    unit: string;
    variant?: 'outlined' | 'doidin';
  }
  
  interface LetreiroOwnerState extends LetreiroProps {
    // …key value pairs for the internal state that you want to style the slot
    // but don't want to expose to the users
  }

  const LetreiroRoot = styled('div', {
    name: 'MuiStat',
    slot: 'root',
  })<{ ownerState: LetreiroOwnerState }>(({ theme, ownerState }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
    padding: theme.spacing(3, 4),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    letterSpacing: '-0.025em',
    fontWeight: 600,
    // typed-safe access to the `variant` prop
    ...(ownerState.variant === 'outlined' && {
      border: `2px solid ${theme.palette.divider}`,
      boxShadow: 'none',
    }),
    ...(ownerState.variant === 'doidin' && {
        backgroundColor: 'red',
    }),
  }));
  
  // …do the same for other slots

  const LetreiroValue = styled('div', {
    name: 'MuiStat',
    slot: 'value',
  })<{ ownerState: LetreiroOwnerState }>(({ theme, ownerState }) => ({
    fontSize: theme.typography.h4.fontSize,
    color: theme.palette.text.primary,
  }));

  const LetreiroUnit = styled('div', {
    name: 'MuiStat',
    slot: 'unit',
  })<{ ownerState: LetreiroOwnerState }>(({ theme, ownerState }) => ({
    fontSize: theme.typography.caption.fontSize,
    color: theme.palette.text.secondary,
    backgroundColor: 'cyan',
  }));
  
  const Letreiro = React.forwardRef<HTMLDivElement, LetreiroProps>(function Stat(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: 'MuiStat' });
    const { value, unit, variant, ...other } = props;
  
    const ownerState = { ...props, variant };
  
    return (
      <LetreiroRoot ref={ref} ownerState={ownerState} {...other}>
        <LetreiroValue ownerState={ownerState}>{value}</LetreiroValue>
        <LetreiroUnit ownerState={ownerState}>{unit}</LetreiroUnit>
      </LetreiroRoot>
    );
  });
  
  export default Letreiro;