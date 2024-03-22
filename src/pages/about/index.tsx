import { useSearchParams } from "next/navigation"

export default function About() {
    const searchParams = useSearchParams()
    let id: string = "0"
    if(searchParams) {
        id = searchParams.get('id') || "0"
    }
    return (
        <div>
            <h1>Sobre</h1>
            <p>Uma página sobre {id}</p>
        </div>
    )
}