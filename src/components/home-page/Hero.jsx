import React from 'react'
import heroImg from "../../assets/img/hero-img.png"

export const Hero = ({ signInWithGoogle }) => {
    return (
        <div className="hero">
            <h1>Connect <br />
                with your team</h1>
            <h4>Wazaap is a messaging app for your team that will help you connect with <br /> everyone in the most easy and comfortable way possible</h4>
            <button onClick={signInWithGoogle} className="try-it-out-btn">Try it out now!</button>
            <img className="hero-img" src={heroImg} alt="" />
        </div>
    )
}
