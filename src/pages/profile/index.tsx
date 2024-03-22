import MeuButton from '@/shared/button/button';

import RootLayout from '../layout';

import { useRouter } from 'next/router';

import Button from '@mui/material/Button';
import styles from './profile.module.css'

export default function Profile() {
  const router = useRouter();

  return (
    <RootLayout>
    <div className={styles.caixa}>
      <h1>Perfil</h1>
      <p>Uma página de perfil</p>
      <MeuButton texto='Vai' href="/about?id=1"/>
      <Button 
        className={styles.meuButton}
      onClick={()=> router.push('/about?id=2')}>Outro</Button>
      <hr />
      <Button onClick={()=>router.push('/feed/1')}>Feed 1</Button>
    </div>
    </RootLayout>
  );
}