import Home from './Pages/Home/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react'
export default function App() {
  AOS.init();
  return (
    <>
  <Home/>
    </>
  )
}
