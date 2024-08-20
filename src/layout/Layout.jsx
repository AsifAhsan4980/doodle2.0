import Footer from '@/components/footer/Footer'
import Header from '@/components/header/mainHeader/Header'
import TopHeader from '@/components/header/topHeader/TopHeader'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <TopHeader/>
        <Header/>
        <Footer/>
    </div>
  )
}

export default Layout
