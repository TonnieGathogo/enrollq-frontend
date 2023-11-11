
import { Button, Table } from 'antd'
import AddVaccany from './addVaccany'
import axios from '@/lib/axios'
import useSWR from 'swr'
import {FiSettings} from 'react-icons/fi'
import Link from 'next/link'

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

export default function ListVaccanies() {

  const { data:vaccanies, isLoading,isError: error,mutate} = useSWR("/api/vaccanies",fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading comments...</p>;
  }


  const tableColumns=[
        {
          title:"#",
          dataIndex:"key",
          render: (text, record,index) => index + 1,
        },
        {
          title:"Class",
          dataIndex:"class",
          render:(_,item)=>(
           <span>{item.class.name}</span>
          )
        },
        {
          title:"No of Positons",
          dataIndex:"seats",
          render:(_,item)=>(
            <span>{item.attributes.seats}</span>
          )
        },
        {
          title:"Date Create",
          dataIndex:"created",
          render:(_,item)=>(
            <span>{item.attributes.created_at}</span>
          )
        },
        {
          title:"Date Modified",
          dataIndex:"updated_at",
          render:(_,item)=>(
            <span>{item.attributes.updated_at}</span>
          )
        },
        {
          title:"Status",
          dataIndex:"status",
          render:(_,item)=>(
            <span>{item.attributes.status}</span>
          )
        },
        {
          title:"Actions",
          dataIndex:"actions",
          render:(_,item)=>(
            <Link href={`/my-account/vaccanies/${item.id}`}><Button icon={<FiSettings/>} >Manage</Button></Link>
          )
        },
    
    
  ]
  const locale = {
        emptyText: (
          <span className='text-center content-center'>
            <p>
              <img src='/images/empty.png' className='mx-auto' width={96}/>
              No Vaccanies Available
            </p>
           
          </span>
        )
  };

    
    
  return (
    <div className='p-4 bg-white'>
    <div className='flex justify-between '>
      <h3 className='my-2 font-bold'>No of records found:5</h3>
      <AddVaccany updateList={mutate}/>
      </div>
    <Table size='large' locale={locale} className='border border-gray-300'  dataSource={vaccanies} columns={tableColumns}/>
  </div>
  )
}
