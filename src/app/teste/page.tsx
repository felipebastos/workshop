
import MyTable from "@/shared/table/table";

export interface Pokemon {
    name: string;
    url: string;
  }

export default async function Teste() {

    // O fetch é de uma api em que o servidor carrega os dados a nível de servidor e não no cliente
    // É possível fazer cache de dados e também estabelecer quando eles devem ser revalidados
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/');

    const lista = await res.json();
    
    
    return (
        <div>
            <div>
                <h1>Teste</h1>
                <p>Uma página de teste</p>
            </div>
            <MyTable items={lista.results} />
            </div>
    )
}