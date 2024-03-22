import MeuButton from '@/shared/button/button';

import Button from '@mui/material/Button';
import styles from './profile.module.css'

export default function Profile() {
  return (
    <div className={styles.caixa}>
      <h1>Perfil</h1>
      <p>Uma página de perfil</p>
      <MeuButton texto='Vai' href="/about?id=1"/>
      <Button 
        className={styles.meuButton}
      href='/about?id=2'>Outro</Button>
      <hr />
      <Button href='/feed/1'>Feed 1</Button>
    </div>
  );
}