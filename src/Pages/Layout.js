import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout() {
  return (
    <>
    <Header />
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}
