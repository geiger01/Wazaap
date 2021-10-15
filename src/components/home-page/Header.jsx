import React from 'react'

export const Header = () => {
    return (
        <header className="main-layout">
            <nav className="main-nav">
                <ul className="main-nav-links">
                    <li className="logo">
                        <div className="logo-dot"></div>
                        <h3>Wazaap</h3>
                    </li>
                    <button className="create-account-btn">Create Account</button>
                </ul>
            </nav>
        </header>
    )
}
