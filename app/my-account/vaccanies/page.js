'use client';
import React,{Suspense,lazy} from 'react'
import PageTitle from '@/components/utilities/PageTitle'
import { Breadcrumb, Card, Row,Col,Table,Empty } from 'antd'
import Link from 'next/link';

const ListVaccanies=lazy(()=>import(`./listVaccanies`))


export default function Vaccanies() {

  return (
    <div>
         <div className='mb-6'>
        <PageTitle title="Vaccanies"/>
          <Breadcrumb
            items={[
              {
                title: <Link href="/my-account/dashboard">Home</Link>,
              },
              
              {
                title: 'Vaccanies',
              },
            ]}
          />
      </div>

      <Row gutter={[10]}>
        <Col className='' xs={24} sm={24} md={24} lg={24}>
          <Suspense>
            <ListVaccanies/>
          </Suspense>
        </Col>
      </Row>
    </div>
  )
}
