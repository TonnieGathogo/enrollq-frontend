import React from 'react'
import {BsWhatsapp,BsFacebook} from 'react-icons/bs'
export default function SocialMediaLinks() {
  return (
    <div className="">

        <h2 className="text-xl font-semibold  mb-4 text-gray-700">Share on Social Media </h2>
  
        <div className="flex flex-wrap  gap-2">
          <button className="bg-blue-500 p-2 text-2xl font-semibold text-white inline-flex items-center space-x-2 rounded">
           <BsFacebook/>
          </button>
          <button className="bg-green-600 p-2 text-2xl font-semibold text-white inline-flex items-center space-x-2 rounded">
           <BsWhatsapp/>
          </button>
        </div>
        </div>

  )
}
