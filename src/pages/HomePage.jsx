import React from 'react'
import { Header } from '../components/home-page/Header'
import { Hero } from '../components/home-page/Hero'

import { firebaseService } from '../services/firebase'

export const HomePage = () => {

    const signInWithGoogle = () => {
        const provider = new firebaseService.firebase.auth.GoogleAuthProvider();
        firebaseService.auth.signInWithPopup(provider)
    }

    return (
        <section className="home-page">
            <Header signInWithGoogle={signInWithGoogle} />
            <Hero signInWithGoogle={signInWithGoogle} />
        </section>
    )
}
