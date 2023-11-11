'use client'
import React from 'react'
import PageTitle from '@/components/utilities/PageTitle'
import { Breadcrumb, Card, Row,Col,Table,Empty,Button } from 'antd'
import Link from 'next/link';
import useSWR from 'swr';
import axios from '@/lib/axios';
import { FiSettings } from 'react-icons/fi';

const fetcher = (url) => axios.get(url).then((res) => res.data.data);
export default function Appointments() {
  const {data:appointments, isLoading,isError: error,mutate} = useSWR("/api/appointments",fetcher);

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading comments...</p>;
  }
  const tableColumns=[
    {
      title:"#",
      dataindex:"created_at",
      render:(_,item)=>(
        <span>{item.attributes.created_at}</span>
      )
    },
    {
      title:"Class",
      dataindex:"class",
      render:(_,item)=>(
        <span>{item.class?.name}</span>
      )
    },
    {
      title:"Parent",
      dataindex:"name",
      render:(_,item)=>(
        <span>{item.attributes.name}</span>
      )
    },
    {
      title:"Phone",
      dataindex:"phone",
      render:(_,item)=>(
        <span>{item.attributes.phone}</span>
       )
    },
    
    {
      title:"Appointment Date",
      dataindex:"created_at",
      render:(_,item)=>(
        <span>{item.attributes.appointment_date}</span>
      )
    },
   
    {
      title:"Status",
      dataindex:"status",
      render:(_,item)=>(
        <span>{item.attributes.status}</span>
       )
    },

    {
      title:"Actions",
      dataindex:"status",
      render:(_,item)=>(
        <Button icon={<FiSettings/>}>Manage</Button>
       )
    },


  ]

  const locale = {
    emptyText: (
      <span className='text-center content-center'>
        <p>
          <img src='/images/empty.png' className='mx-auto' width={96}/>
          No Appointments Available
        </p>
       
      </span>
    )
  };

  
  return (
    <div>
         <div className='mb-6'>
        <PageTitle title="Appointments"/>
          <Breadcrumb
            items={[
              {
                title: <Link href="/my-account/dashboard">Home</Link>,
              },
              
              {
                title: 'Appointments',
              },
            ]}
          />
      </div>

      <Row gutter={[10]}>
        <Col className='' xs={24} sm={24} md={24} lg={24}>
          <div className='p-4 bg-white'>
            <div className='flex justify-between '>
              <h3 className='my-2 font-bold text-lg'>No of records found:{appointments.length}</h3>
              
              </div>
            <Table bordered size='middle' locale={locale} className='border border-gray-300' dataSource={appointments} columns={tableColumns}/>
          </div>
        </Col>
      </Row>
    </div>
  )
}
