import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-between">{children}</div>
  )
}

export default Layout
