"use client";
import PageTitle from '@/components/utilities/PageTitle'
import {} from 'react'
import { useAuth } from '@/hooks/auth';
import { Row,Col,Card } from 'antd';
export default function MyAccountDashboardPage() {

  const {user}=useAuth();
  return (
    <div>
      <div className='mb-6'>
        <PageTitle title={`Welcome, ${user?.first_name}`} />
        <div className='my-2'>
        <Row gutter={[10,10]}>
          <Col xs={24} sm={24} md={8} lg={8}>
                <Card className='border-4 text-center border-b-green-600 shadow-md'>
                  <div className='text-4xl py-2 font-bold '> Total Seats</div>
                  <div className='text-5xl font-bold text-gray-400'>445</div>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <Card className='border-4 text-center border-b-blue-600 shadow-md'>
                  <div className='text-4xl py-2 font-bold '> Total Views</div>
                  <div className='text-5xl font-bold text-gray-400'>0</div>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <Card className='border-4 text-center border-b-orange-600 shadow-md'>
                  <div className='text-4xl py-2 font-bold '> Total Appointments</div>
                  <div className='text-5xl font-bold text-gray-400'>0</div>
                </Card>
              </Col>
       </Row>
        </div>

        <div className='my-4'>
          <Row gutter={[10,10]}>
            <Col xs={24} sm={24} md={14} lg={14}>
              <div className='bg-white'>
                <h3 className='text-black text-xl font-bold p-4'>Pending Appointments</h3>
              </div>
            </Col>
            <Col xs={24} sm={24} md={10} lg={10}>
              <div className='bg-white'>
                <h3 className='text-black text-xl font-bold p-4'>Billing Information</h3>
              </div>
            </Col>
          </Row>
        </div>
    
      
      </div>
    </div>
  )
}
