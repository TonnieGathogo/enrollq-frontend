'use client';
import { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/auth';

import InputError from '@/components/utilities/InputError';



export default function LoginPage() {
    

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/my-account/dashboard',
    })
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const onSubmit = async event => {
        event.preventDefault()
        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }  

    return (
    <div className="bg-slate-50 flex flex-col min-h-screen  items-center ">
    <div className="w-1/4 mt-10">
        <div className="mb-4">
            <Image src={'/images/logo.png'} alt="logo" width={150} height={150} className="mx-auto"/>
        </div>
        <div className="mb-8 text-center text-black text-xl font-semibold">Login to your account</div>
        <div className="">
            <form onSubmit={onSubmit} className="bg-white shadow-md rounded-lg px-6 pt-6 pb-8 mb-4 ">
                <div className="mb-4">
                    <label className="block text-lg my-2 text-gray-600">Email</label>
                    <input 
                        type="email" 
                        autoComplete="off"
                        autoFocus
                        onChange={e=>setEmail(e.target.value)} 
                        name="email" 
                        className=" border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="email"  
                        placeholder="Enter your email address"
                        value={email}/>
                    <InputError messages={errors.email} className="mt-2" />
                </div>
                <div className="mb-4">
                    <label className="block text-lg my-2 text-gray-600">Password</label>
                    <input 
                        type="password" 
                        onChange={e=>setPassword(e.target.value)} 
                        name="password" 
                        className="border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password"  
                        value={password} 
                        placeholder="Enter your password"/>
                         <InputError
                            messages={errors.password}
                            className="mt-2"
                        />
                </div>
                <div className="flex justify-between">
                    <div>
                    <input name="remember"  onChange={event => setShouldRemember(event.target.checked)
                        } type="checkbox"/> <span className="ml-2">Remember me</span>
                    </div>
                    
                    <a className="text-blue-600" href="#" >Forgot Password?</a>
                </div>
                <div className=" py-6 text-center">
                    <button className=" w-full p-2 text-xl text-white rounded bg-blue-600" type="submit">Login</button>
                </div>
                <div className=" py-4 text-center">
                    Dont have an account <span className="text-blue-600"><Link href={'/auth/register'}>Register</Link></span>
                </div>
            </form>
       
        </div>
  </div>
</div>  
  )
}
