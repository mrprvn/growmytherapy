import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="relative z-10 bg-[#F3F0E8] backdrop-blur-sm">
      <div className="flex items-start">
        {/* Minimalist Logo */}
        <Image src="/logo-transparent-png.png" alt='logo' width={275} height={54}/>
      </div>
  </header>
  )
}

export default Header