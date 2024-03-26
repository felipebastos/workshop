
export default function Feed({params} : {params: {id: string}}) {

    return (
        <div>
            <h1>Feed</h1>
            <p>Uma página de feed de {params.id}</p>
        </div>
    )
}