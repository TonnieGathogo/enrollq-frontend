import Navbar from '@/components/layouts/navbar'
import React from 'react'

export default function AuthLayout({children}) {
  return (
    <div>
        <Navbar/>
        <main>
            {children}
        </main>
    </div>
  )
}
