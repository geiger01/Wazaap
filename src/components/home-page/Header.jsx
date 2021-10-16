import React from 'react'

export const Header = ({ signInWithGoogle }) => {
    return (
        <header className="main-layout">
            <nav className="main-nav">
                <ul className="main-nav-links">
                    <li className="logo">
                        <div className="logo-dot"></div>
                        <h3>Wazaap</h3>
                    </li>
                    <button onClick={signInWithGoogle} className="create-account-btn">Login With Google</button>
                </ul>
            </nav>
        </header>
    )
}
