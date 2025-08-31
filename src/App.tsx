import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import CTA from './components/CTA'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header/>
      <main>
        <Hero/>
        <Features/>
        <Services/>
        <CTA/>
      </main>
      <Footer/>
    </div>
  )
}

export default App