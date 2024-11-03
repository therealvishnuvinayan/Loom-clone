import React, { Children } from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children}: Props) => {
  return (
    <div className='container h-screen flex items-center justify-center'>{children}</div>
  )
}

export default Layout;
