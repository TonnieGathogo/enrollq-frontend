'use client';
import {useState,useEffect,Fragment} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Space} from 'antd';
import { useAuth } from "@/hooks/auth";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { Button, Navbar } from 'flowbite-react';


export default function DefaultNavbar() {

  const {user, logout}= useAuth();
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Navbar fluid rounded className='bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50'>
      <Navbar.Brand href="/">
        <img src="/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2 gap-1">
        <Button>POST VACCANCY</Button>
        <Link href={'/auth/login'} className='bg-orange-600 font-semibold rounded-full py-3 px-4 ml-2 text-lg text-white'>Login</Link>
                    <Link href={'/auth/register'} className='bg-orange-600 font-semibold rounded-full py-3 px-4 ml-2 text-lg text-white'>Register</Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/browse_vaccancies" className="">Find School</Navbar.Link>
        <Navbar.Link href="#" className="">About</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


    

