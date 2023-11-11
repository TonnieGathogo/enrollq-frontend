import React from 'react'
import PageTitle from '@/components/utilities/PageTitle'
import { Breadcrumb, Card, Row,Col } from 'antd'
import Link from 'next/link'
export default function ViewSchool() {
  return (
    <div>
      <div className='mb-6'>
        <PageTitle title="My Schools"/>
          <Breadcrumb
            items={[
              {
                title: <Link href="/my-account/dashboard">Home</Link>,
              },
              {
                title: <Link href="/my-account/schools">School</Link>,
              },
             
              {
                title: 'View',
              },
            ]}
          />
      </div>

      <Row gutter={[10]}>
        <Col className='' xs={24} sm={24} md={24} lg={24}>
          <Card>
            sdf
          </Card>
        </Col>
      </Row>
    </div>
  )
}
