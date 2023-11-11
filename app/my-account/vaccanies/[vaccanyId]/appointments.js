'use client'
import React from 'react'
import {Card, Table} from 'antd'
import axios from '@/lib/axios'

export default function VaccanyAppointments() {
    

    const tableColumns=[
        {
            title:"Appointment Date",
            dataIndex:""
        },
        {
            title:"Name",
            dataIndex:""
        },
        {
            title:"Phone",
            dataIndex:""
        },
        
        
        {
            title:"",
            dataIndex:""
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
    <Card>
        <h2 className="text-xl my-4 font-bold">Appointments</h2>
        <Table columns={tableColumns} locale={locale} dataSource={[]}/>
    </Card>
  )
}
