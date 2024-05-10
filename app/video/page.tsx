import MainScreen from '@/components/MainScreen'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import React from 'react'

function page() {
  return (
    <div className='container'>
        <NavBar/>
        <SideBar/>
        <MainScreen/>

    </div>
  )
}

export default page