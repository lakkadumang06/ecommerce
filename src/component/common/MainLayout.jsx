import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ResponsiveView from '../home/ResponsiveView'

export default function MainLayout({children}) {
  return (
    <div>
        <Header/>
            {children}
        <Footer/>
        <ResponsiveView/>

    </div>
  )
}
