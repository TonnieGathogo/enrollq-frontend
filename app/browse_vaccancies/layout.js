import Navbar from '@/components/layouts/navbar'
import React from 'react'

export default function DefaultLayout({children}) {
  return (
    <div>
        <Navbar/>
        <main className='bg-gray-50'>
        {children}
        </main>
       
    </div>
  )
}
