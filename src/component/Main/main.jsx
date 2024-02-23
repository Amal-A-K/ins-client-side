import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../header/header'
import Sidebar from '../sidebar/sidebar'
import './main.css'

const Main = () => {
    return (
        // <div className='main'>
         <div className='content'> 


            <Header />
            <Sidebar />
             <Outlet /> 
             
        </div>
        //  </div>
    )
}

export default Main