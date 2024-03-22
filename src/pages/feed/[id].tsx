import RootLayout from "@/pages/layout"
import { useRouter } from 'next/router';

export default function Feed() {
    const router = useRouter();

    return (
        <RootLayout>
        <div>
            <h1>Feed</h1>
            <p>Uma página de feed de {router.query.id}</p>
        </div>
        </RootLayout>
    )
}