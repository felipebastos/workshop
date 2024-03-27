'use client'

import Letreiro from '../shared/letreiro/letreiro';
import BotaoDual from '@/shared/botaodual/botaodual';

export default function Home() {
    return (
        
        <div>
            <h2>Bem vindo a esse negócio.</h2>
            <Letreiro value="10" unit="km/h" variant="doidin" />
            <BotaoDual tipo="dois" variant="contained">Oi oi oi</BotaoDual>
        </div>

    )
}