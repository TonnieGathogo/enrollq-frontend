'use client'
import { Row,Col,Button } from 'antd'
import React from 'react'
import axios from '@/lib/axios'
import { useParams } from 'next/navigation'
import ContactForm from './components/contact-form'
import SocialMediaLinks from './components/social-media'
import SimilarVaccancies from './components/similar-vaccanies'
const images = [
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(1).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(2).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(3).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(4).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(5).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(6).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(7).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(8).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(9).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(10).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(11).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(12).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(13).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(14).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(15).webp",
]

export default function VaccanyPage() {
  const params = useParams()
  const [vaccancy,setVaccancy]=React.useState({})

  


  const getVaccany=async () => {
    const resp=await axios.get(`/api/vaccancy-details/${params.browse_vaccancyId}`)
    setVaccancy(resp.data.data)

  }

  React.useEffect(()=>{
    getVaccany()
  },[])
  return (
    <div className='p-6 '>
        <div className='mx-auto container'>
          <h1 className='text-2xl py-2 font-bold'>{vaccancy.class?.name}</h1>
            <Row gutter={[16,16]}>
              <Col xs={24} sm={24} md={16} lg={16}>
           

                <div className='border border-gray-200 bg-white rounded-lg p-4'>
                <h3 className='text-lg font-bold my-4'>Seats Available : {vaccancy.attributes?.seats} </h3>
                  <h3 className='text-lg font-bold'>Description </h3>
                   {vaccancy.attributes?.description}
                </div>

                <div className='border border-gray-200 rounded-lg p-4 my-6 bg-white'>
                  <h3 className='text-lg font-bold'>About Us </h3>
                  <p>
                  Zawadi School Kirigiti is a modern medium cost mixed day and boarding school situated on Kiambu-Riabai road about 200 metres from Kirigiti round about. It is about 2 kms from Kiambu town and 15 kms from Ruiru. It offers the 8-4-4 system of education and Competency Based Curriculum 2-6-3-3. It is easily accessible as it is next to a main tarmac road. It maintains small classes for maximum teacher- pupil interaction and individual attention.
                  </p>
                  <h3 className='text-lg font-bold py-4'>Cirriculum </h3>

                  <p>
                  Zawadi School Kirigiti is a modern medium cost mixed day and boarding school situated on Kiambu-Riabai road about 200 metres from Kirigiti round about. It is about 2 kms from Kiambu town and 15 kms from Ruiru. It offers the 8-4-4 system of education and Competency Based Curriculum 2-6-3-3. It is easily accessible as it is next to a main tarmac road. It maintains small classes for maximum teacher- pupil interaction and individual attention.
                  </p>

                  <p className='my-4'>
                  Zawadi School Kirigiti is a modern medium cost mixed day and boarding school situated on Kiambu-Riabai road about 200 metres from Kirigiti round about. It is about 2 kms from Kiambu town and 15 kms from Ruiru. It offers the 8-4-4 system of education and Competency Based Curriculum 2-6-3-3. It is easily accessible as it is next to a main tarmac road. It maintains small classes for maximum teacher- pupil interaction and individual attention.
                  </p>


                  <h3 className='text-lg font-bold py-4'>Activities </h3>


                  <p className='my-4'>
                  Zawadi School Kirigiti is a modern medium cost mixed day and boarding school situated on Kiambu-Riabai road about 200 metres from Kirigiti round about. It is about 2 kms from Kiambu town and 15 kms from Ruiru. It offers the 8-4-4 system of education and Competency Based Curriculum 2-6-3-3. It is easily accessible as it is next to a main tarmac road. It maintains small classes for maximum teacher- pupil interaction and individual attention.
                  </p>
                  <ul className="list-disc p-4">
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                </ul>
                </div>

                <div className="border border-gray-200 p-4 mb-4 bg-white">
                  <SocialMediaLinks/>
                </div>

                <div className="border border-gray-200 p-4 mb-4 bg-white">
                  <h2 className='text-lg font-bold py-4'>Other Similar Vaccancies Around</h2>
                  <SimilarVaccancies id={params.browse_vaccancyId}/>
                </div>

              

              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <div className="border border-gray-200 p-4 mb-4 bg-white">
                  <h3 className='text-lg py-4 font-bold'>REQUEST APPOINTMENT</h3>
                  <ContactForm id={params.browse_vaccancyId}/>
                  <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                    <span className="absolute px-3 font-medium text-gray-600 -translate-x-1/2 bg-white left-1/2 ">or</span>
                  </div>

                  <div className='mt-4'>
                    <div className="flex gap-8 my-4 text-lg ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 bg-green-500 p-2 text-white text-lg rounded-full ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                      </svg>
                      <p>{`${vaccancy.school?.phone1} ${vaccancy.school?.phone2}`}</p>
                    </div>

                    <div className="flex gap-8 my-4 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 bg-orange-800 p-2 text-white rounded-full">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {vaccancy.school?.location}
                    </div>

                    <div className="flex gap-8 my-2   text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 bg-blue-500 p-2 text-white rounded-full">
                        <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                      </svg>
                      {vaccancy.school?.email}
                    </div>

                    <div className="flex gap-8 text-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 bg-blue-300 p-2 text-white rounded-full">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                      
                    </div>

                  </div>



                </div>
             
              <div className='border border-gray-200 rounded-lg p-4 bg-white'>
                <div className='content-center text-center'>
                <img src={'/images/school-logo.png'} className='mx-auto' width={100} alt="school-logo" />
                <h3 className='text-lg font-bold'>{vaccancy.school?.name}</h3>
                </div>

                <div className='text-center'>
                  <Button>Book Appointment</Button>
                </div>
                 
                </div>

                <div className='border border-gray-200 rounded-lg p-4 mt-4 bg-white'>
                  <h2 className='text-xl font-bold'>Advertisements</h2>
                </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}
