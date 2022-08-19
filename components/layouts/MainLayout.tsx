import { FC, ReactNode } from "react"
import Head from "next/head"
import { Navbar } from '../ui'

interface Props {
    children: ReactNode,
    title?: string
}

export const MainLayout: FC<Props> = ({ children, title }) => {
    
    return (
        <>
            <Head>
                <title>{title || 'Pokemon APP'}</title>
                <meta name="description" content="Información sobre el pokemon:" />
                <meta name="author" content="Freddy Pérez" />
            </Head>
            <Navbar />
            <main>
                { children }
            </main>
        </>
    )
}