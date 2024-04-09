'use client'

import Letreiro from '../shared/letreiro/letreiro';
import Outro from '@/shared/outro/outro';
import { Button } from '@mui/material';

export default function Home() {
    return (
        
        <div>
            <h2>Bem vindo a esse negócio.</h2>
            <Letreiro value="10" unit="km/h" variant="doidin" />
            <Button variant="contained">Oi oi oi</Button>
            <Outro value="Olá, mundo!" color='primary' variant="contained" />
            <Outro value="Adeus, mundo!" color='secondary' variant="outlined" />
        </div>

    )
}