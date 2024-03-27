'use client'

import Letreiro from '../shared/letreiro/letreiro';
import BotaoDual from '@/shared/botaodual/botaodual';
import Outro from '@/shared/outro/outro';

export default function Home() {
    return (
        
        <div>
            <h2>Bem vindo a esse negócio.</h2>
            <Letreiro value="10" unit="km/h" variant="doidin" />
            <BotaoDual tipo="dois" variant="contained">Oi oi oi</BotaoDual>
            <Outro value="Olá, mundo!" color='primary' variant="contained" />
            <Outro value="Adeus, mundo!" color='secondary' variant="outlined" />
        </div>

    )
}