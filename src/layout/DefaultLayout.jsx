import { Outlet } from "react-router-dom"

import Header from "../components/Header"

import Footer from "../components/Footer"

import Main from "../components/Main"

export default function DefaultLayout() {
    return (
        <>
            <Header />

            <Main />

            <Footer />
        </>
    )
}
