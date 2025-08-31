import { Heart, Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const Header = () => {

    const [isOpen, setisOpen] = useState(false)

    const navigation = [
        {
            name:"Anasayfa",
            href: "/",
        },
        {
            name:"Hakkmızda",
            href: "/about",
        },
        {
            name:"Hizmetler",
            href: "/services",
        },
        {
            name:"İletişim",
            href: "/contact",
        },
    ]
  return (
    <header className='bg-white shadow-lg sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* justify-between == Logo metin solda diğer linkler sağda*/}
            <div className='flex justify-between items-center py-4'>
                {/*Icon and Text */}
                <a href='#' className='flex items-center gap-3'>
                    <div className='bg-orange-500 rounded-full p-3 '>
                        <Heart color='white'/>
                    </div>
                    <span className='text-2xl'>Vet</span>
                </a>
                {/* Desktop Nav*/}
                {/*
                    hidden: Telefon ve iPad Mini gibi küçük ekranlarda gizler
                    md:flex : Büyük tabletler ve diğer büyük cihazlarda gözükmesin sağlar
                */}
                    <nav className='space-x-8 hidden md:flex'>
                        {navigation.map((item) => (
                            <a key={item.href} 
                                href={item.href}
                                //buton style
                                className='px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-orange-600 hover:bg-orange50'
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                    {/* Burger button*/}
                    <button
                    onClick={()=> setisOpen(!isOpen)} 
                    className='p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 cursor-pointer md:hidden'
                    >
                    {isOpen ? <X/> : <Menu/>} 
                    </button>
            </div>
            {/* Mobie Nav Logic*/}
            {isOpen && (
            <div className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200'>
                {navigation.map((item) => (
                            <a key={item.href} 
                                href={item.href}
                                //buton style
                                className='block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-orange-600 hover:bg-orange50'
                            >
                                {item.name}
                            </a>
                        ))}
                </div>
            </div>
            )}
        </div>
    </header>
  )
}

export default Header