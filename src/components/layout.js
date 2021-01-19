import React from "react"
import Footer from "./footer"
import Header from './Header'
import { GlobalStyle } from './styles/GlobalStyles'

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;
