import React from 'react'
import Specials from './Specials';
import Hero from './Hero';


function Main() {
    return (
        <main>
            <>
                <section id="hero">
                    <Hero />
                </section>
                <section>

                    <Specials />

                </section>
            </>
        </main>
    )
}

export default Main