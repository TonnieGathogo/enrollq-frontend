import Navbar from '@/components/layouts/navbar'
import TextInput from '@/components/utilities/Input'
import SelectInput from '@/components/utilities/SelectInput'
import { Button, Select, Space } from 'antd'
import Image from 'next/image'
import { Input } from 'postcss'
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link'
import DefaultNavbar from '@/components/layouts/navbar'
export default function Home() {
  return (
    <>
  
    <main>

    <div className="">

      <div className="bg-[url('/images/headerimage1.jpg')] h-full object-cover">
       <DefaultNavbar/>

        <div className='mx-auto w-3/4 mt-10'>
            <div className="bg-gray-50 bg-opacity-90 py-16 pt-32">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                      <div className='text-4xl py-4 font-extrabold text-gray-900 sm:text-4xl mb-4'>Looking For a School?</div>

                      <div className='text-center text-2xl font-semibold  text-black'><span className='text-green-600'>Join us</span> & Explore thousands of school caccanies</div>
            
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Organic, genuine conversations with higher response rates than
                LinkedIn or cold email.
            </p>
        </div>
    </div>

    <div className="mt-10 pb-1">
        <div className="relative">
            <div className="absolute inset-0 h-1/2 "></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                        <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                Blockchain developers
=
                            </dt>
                            <dd className="order-1 text-5xl font-extrabold text-gray-700">500+</dd>
                        </div>
                        <div
                            className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                Response rate
                            </dt>
                            <dd className="order-1 text-5xl font-extrabold text-gray-700">58%</dd>
                        </div>
                        <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                New devs a month
                            </dt>
                            <dd className="order-1 text-5xl font-extrabold text-gray-700">30+</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</div>
           
        </div>


      </div>
      <div className='bg-blue-600 p-4 '>
        <div className='align-middle text-center my-2'>
            <Select placeholder="County" className='w-96 h-14 mr-4 border-white text-white rounded-xl' options={[]}/>
            <Select placeholder="Sub County" className='w-96 h-14 mr-4 border-white text-white rounded-xl' options={[]}/>
            <Select options={[]} placeholder="Select Class" className='w-96 h-14 mr-4 border-white text-white rounded-xl' />
            <Button className='text-2xl h-14 font-extrabold border-2 border-white text-white rounded-xl' icon={<FiSearch/>}>Find</Button>
        </div>
      </div>
    

    </div>



      <div className="">
       
        {/* <section className="bg-[url('/images/background.jpg')]">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm  lg:text-left">
              <h1 className="text-5xl font-bold text-white ">Looking For A School</h1>

              <div className='mt-5'>
                <h1 className='text-4xl font-bold leading-snug text-white '>Explore More Than  1200+ Vaccanies</h1>
              </div>
              <p className="mt-4 mb-8 text-xl font-semibold sm:mb-12 text-gray-300">Dictum aliquam porta in condimentum ac integer
                <br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <input placeholder="Select Class" className='border border-gray-400 h-14 rounded-lg p-2'/>
                <input placeholder="Enter Location" className='border border-gray-400 h-14 rounded-lg p-2'/>
                <button className='h-14 bg-orange-500 rounded w-full p-3 font-bold'>Search</button>
              
              </div>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <Image src={"/images/hero1.png"} width={600} height={600} alt='banner' className="object-contain" />
            </div>
          </div>
        </section> */}

    <section className="bg-white ">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">Most Searched  <span className="underline decoration-blue-500">Counties</span></h1>

        <p className="mt-4 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>

                <p className="text-gray-900 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Easy to customiztions</h1>

                <p className="text-gray-900 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h1>

                <p className="text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>
      
      </div>
    </main>
    </>
  )
}
