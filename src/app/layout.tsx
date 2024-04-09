"use client";
import React from 'react';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import { lime, purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Link from 'next/link';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: lime,
          secondary: purple,
        }
      : {
          // palette values for dark mode
          primary: purple,
          secondary: lime,
          
        }),
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
 
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <html>
    <head>
      <title>Teste</title>
      </head>
      <ThemeProvider theme={theme}>
      <body>
    
      <h1>Um sistema para testar coisas de Next.js</h1>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/profile'>Profile</Link>
        <Link href='/teste'>Teste</Link>
        <Button variant="contained" onClick={colorMode.toggleColorMode}>Altera modo do tema</Button>
      </nav>
      {children}
    <h1>Rodapé</h1>
    </body>
    </ThemeProvider>
    </html>
  );
}