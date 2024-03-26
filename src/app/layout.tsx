import Link from 'next/link';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
    <head>
      <title>Teste</title>
      </head>
      <body>
    
      <h1>Um sistema para testar coisas de Next.js</h1>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/profile'>Profile</Link>
        <Link href='/teste'>Teste</Link>
      </nav>
      {children}

    </body>
    </html>
  );
}