import { useEffect, useState } from "react";

import RootLayout from "../layout";
import MyTable from "@/shared/table/table";

import axios, { AxiosResponse } from "axios";

export interface Pokemon {
    name: string;
    url: string;
  }

export interface PokemonListResponse {
    results: Pokemon[];
}

export default function Teste() {
    const [lista, setLista] = useState<Pokemon[]>([])

    
    useEffect(() => {
        async function fetchData() {
            try {
                const response: AxiosResponse<PokemonListResponse> = await axios.get('https://pokeapi.co/api/v2/pokemon/');
                setLista(response.data.results);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [])
    
    return (
        <RootLayout>
            <div>
                <h1>Teste</h1>
                <p>Uma página de teste</p>
            </div>
            <MyTable items={lista} />
        </RootLayout>
    )
}