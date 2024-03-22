import Link from 'next/link';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Um sistema para testar coisas de Next.js</h1>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/profile'>Profile</Link>
      </nav>
      {children}
    </div>
  );
}