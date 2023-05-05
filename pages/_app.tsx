import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Header from "@/components/header";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Header title="Star Wars Next"/>
            <div className="p-5">
                <Component  {...pageProps} />
            </div>
        </>
    )

}
