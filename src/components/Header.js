import React from 'react'
import CustomContainer from 'atoms/CustomContainer'

const Header = () => {
  return (
    <header className="bg-white py-8 px-3 border-b shadow-neutral-200">
      <CustomContainer>
        <a
          className="block text-base font-medium tracking-wider text-gray-700 md:text-lg lg:text-2xl cursor-pointer hover:text-gray-900"
          href="/"
        >
          CatAPI
        </a>
      </CustomContainer>
    </header>
  )
}

export default Header
