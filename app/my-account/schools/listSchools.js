import React from 'react'
import axios from '@/lib/axios';
import useSWR from 'swr';
import { Card } from 'antd';
import Link from 'next/link';
const fetcher = (url) => axios.get(url).then((res) => res.data.data);

export  default function ListSchools() {
  const { data, error, isLoading}=useSWR("/api/schools",fetcher);
  if (error) return <p>An error has occurred 😢</p>;
  if (isLoading) return <p>Loading... ⏳</p>;
  return (
    <div>
      {data.map((item)=>(
        <Link key={item.id} href={`/my-account/schools/${item.id}`}>
        <Card  key={item.id} className='border border-gray-200 rounded  my-4 bg-white hover:cursor-pointer hover:bg-gray-100'>
        <h2 className='text-2xl font-semibold text-orange-600'>{item.attributes.name}</h2>
        <div>
          <ul className=''>
            <li className='my-2 text-xl'>Location:{item.attributes.location}</li>
            <li className='my-2 text-xl'>Total Vaccanies:fdsf</li>
            <li  className='my-2 text-xl'>Status:fdsf</li>
          </ul>
        </div>
      </Card>
      </Link>
      ))}
    </div>
  )
}
