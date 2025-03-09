import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header>

                <div className="logo">
                    <img src="../../public/gino_logo.svg" alt="gino logo" />
                </div>

                <div className="navlink-container">
                    <NavLink className="navlink" to="/">
                        Home
                    </NavLink>
                    <NavLink className="navlink" to="/posts">
                        Posts
                    </NavLink>
                    <NavLink className="navlink" to="/about">
                        About
                    </NavLink>
                    <NavLink className="navlink" to="/contacts">
                        Contacts
                    </NavLink>
                </div>

            </header>
        </>


    )
}
