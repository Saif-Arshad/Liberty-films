import React from 'react'
import Logo from '../../assets/Images/Logo.png'
import '../Header/Header.css'
export default function Header() {
  return (
<div className='w-screen bg-black flex flex-wrap items-center'>
    <div className="">
        <img className='h-28' src={Logo} alt="" />
    </div>
</div>
  )
}
