import React from 'react'
import PageTitle from '@/components/utilities/PageTitle'
import { Breadcrumb, Card, Row,Col } from 'antd'
import Link from 'next/link'

export default function BillingPage() {
  return (
    <div>
         <div className='mb-6'>
        <PageTitle title="Billing "/>
          <Breadcrumb
            items={[
              {
                title: <Link href="/my-account/dashboard">Home</Link>,
              },
              
              {
                title: 'Billing Information',
              },
            ]}
          />
      </div>

      <Row gutter={[10]}>
        <Col className='' xs={24} sm={24} md={24} lg={24}>
          <Card>
            Billing
          </Card>
        </Col>
      </Row>
    </div>
  )
}
