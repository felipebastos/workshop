import { useSearchParams } from "next/navigation"

import RootLayout from "../layout"

export default function About() {
    const searchParams = useSearchParams()
    let id: string = "0"
    if(searchParams) {
        id = searchParams.get('id') || "0"
    }
    return (
        <RootLayout>
        <div>
            <h1>Sobre</h1>
            <p>Uma página sobre {id}</p>
        </div>
        </RootLayout>
    )
}