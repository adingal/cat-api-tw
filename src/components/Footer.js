import React from 'react'
import CustomContainer from 'atoms/CustomContainer'

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t shadow-neutral-200">
      <CustomContainer>
        <p className="text-sm font-medium text-end text-gray-700 md:text-base">
          {new Date().getFullYear()} &copy;
          <a
            className="inline-block ml-1 cursor-pointer hover:text-gray-900"
            href="https://adingal.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            adingal
          </a>
        </p>
      </CustomContainer>
    </footer>
  )
}

export default Footer
