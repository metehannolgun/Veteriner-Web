import React from 'react'
import HeroTextContainer from './HeroTextContainer'
import HeroImageContainer from './HeroImageContainer'

const Hero = () => {
  return (
    <section className='relative bg-gradient-to-br from-orange-50 to-teal-50 py-20'>
      {/*Padding ve max width işlemleri */}
      <div className='max-width-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
        {/* Grid sistemi, grid-cols-1:mobilde yukarıdan aşağıya lg:grid-cols-2= desktopta soldan sağa diz */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Sol taraf metin alanı */}
           <HeroTextContainer />
          {/* Sağ taraf görsel alanı */}
          <HeroImageContainer />
        </div>
      </div>
    </section>
  )
}

export default Hero