'use client';
import { useAuth } from '@/hooks/auth';
import PageTitle from '@/components/utilities/PageTitle'
import React from 'react'
import AddSchool from './addSchool'
import { Breadcrumb } from 'antd';
import ListSchools from './listSchools';

export default function MySchools() {
  const {user } = useAuth({ middleware: 'auth' })
  return (
    <div>
      <div className='mb-6'>
        <PageTitle title="My Schools"/>
          <Breadcrumb
            items={[
              {
                title: 'Home',
              },
              {
                title: <a href="">Application Center</a>,
              },
              {
                title: <a href="">Application List</a>,
              },
              {
                title: 'An Application',
              },
            ]}
          />
      </div>
      <div className='my-2 '>
        <div className='my-4 flex justify-between'>
          <h2 className='text-xl font-semibold'>No of Records Found:1</h2>
          <AddSchool/>
        </div>
        <div>
          <ListSchools/>
        {/* {schools.map((item,i)=>(
           <div key={i} className='border border-gray-200 rounded p-4 my-4 bg-white'>
           <h2 className='text-2xl font-semibold text-orange-600'>Kiambu Primary School</h2>
           <div>
             <ul className=''>
               <li className='my-2 text-xl'>Location:fdsf</li>
               <li className='my-2 text-xl'>Total Vaccanies:fdsf</li>
               <li  className='my-2 text-xl'>Status:fdsf</li>
             </ul>
           </div>
         </div>

        ))
      }
                */}
      
        
          
        </div>
      </div>
    </div>
  )
}
