"use"
import React from 'react'
import { ClientProvider } from "./Context.jsx";

function MyApp({ Component, pageProps }) {
    return (
        <ClientProvider>
            <Component {...pageProps} />
        </ClientProvider>
    )
}

export default MyApp
