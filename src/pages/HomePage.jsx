import React from 'react'
import { Header } from '../components/home-page/Header'
import { Hero } from '../components/home-page/Hero'

export const HomePage = () => {
    return (
        <section className="home-page">
            <Header />
            <Hero />
        </section>
    )
}
