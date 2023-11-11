'use client'
import { Card, Col, Row,Descriptions, Button,Modal,Form,InputNumber, Space, message,Tag} from 'antd'
import {Suspense,lazy,useState} from 'react'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import axios from '@/lib/axios'
import { FiEdit } from 'react-icons/fi'
import Label from '@/components/utilities/Label'
import TextAreaInput from '@/components/utilities/TextArea'

const EditVaccany=(props)=>{
    const [open,setOpen]=useState(false)
    const [count,setCount]=useState(props.data?.seats)
    const [description, setDescription]=useState(props.data?.description)
    const handleOpen=()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false)
    }

    const handleSubmit=async(event)=>{
        event.preventDefault()

        const formData={
            'seats':count,
            'description':description
        }
       
        axios
        .patch('/api/vaccanies/'+props.id, formData)
        .then(() => setOpen(false))
        .then(() => props.mutate())
        .then(() => message.success('Success'))
        .catch(error => {
             if (error.response.status !== 422) throw error
    
             
         })
    }



    
    return(<>
      <Button onClick={handleOpen} className='text-lg -mt-1 text-blue-600'  type='link' icon={<FiEdit />}/>
      <Modal width={800} open={open} onCancel={handleClose} footer={<></>} title="Update Vaccany">
      <form >
        <Label className="my-2 font-bold">No of Seats</Label>
        <InputNumber name='seats' size='large' value={count} onChange={(e)=>setCount(e)} className='w-1/2 my-2'/>
        <Label className="my-2 font-bold">Description</Label>
        <TextAreaInput row={3} autoSize onChange={(e)=>setDescription(e.target.value)} value={description} name="description"/>
        <div className='flex justify-end my-4'>
            <Space>
             <button onClick={handleClose} className='bg-gray-100 text-black rounded text-lg p-2'>Cancel</button>
             <button onClick={handleSubmit} className='bg-blue-600 text-white rounded text-lg p-2'>Save Changes</button>

 
            </Space>
        </div>
        </form>

        
      </Modal>

    </>
    )


    
}

const getStatus=(status)=>{
    if(status==0){
        return <Tag className='text-md p-2' color="error">Inactive</Tag>
    }
    return <Tag className='text-sm' color="success">Active</Tag>

}




const fetcher = (url) => axios.get(url).then((res) => res.data.data);
const VaccanyAppointments= lazy(()=>import(`./appointments`))
export default function ManageVaccanies() {
  let params = useParams()
  const { data:vaccany, isLoading,isError: error,mutate} = useSWR("/api/vaccanies/"+params.vaccanyId,fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading comments...</p>;
  }
  return (
    <div>
        <h3 className='text-3xl font-bold text-black my-4'>{vaccany?.class.name}</h3>
        <div>
            <Row gutter={[10,10]}>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <Card className='border-4 text-center border-b-green-600 shadow-md'>
                     <div className='text-4xl py-2 font-bold '> Total Seats</div>
                     <div className='text-5xl font-bold text-gray-400'>{vaccany?.attributes.seats}</div>
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
        <div className='mt-6'>
            <Row gutter={[10,10]}>
                <Col xs={24} sm={24} md={14} lg={14}>
                   <Suspense>
                        <VaccanyAppointments id={params.vaccancyId}/>
                   </Suspense>
                </Col>
                <Col xs={24} sm={24} md={10} lg={10}>
                    <Card>
                        <div className='flex justify-between'>
                            <div>
                                <div className='flex justify-start'>
                                    <h2 className="text-xl font-bold">{vaccany?.class.name} Information</h2>
                                    <EditVaccany id={vaccany?.id} mutate={mutate} data={vaccany?.attributes}/>
                                </div>

                           
                            </div>
                            
                            <div>
                            {!vaccany.attributes?.status && <button className='bg-blue-600 rounded text-white p-2 w-24'>Publish</button>}
                            </div>
                        </div>

                        <div className='border border-gray-100 p-4 my-4 rounded'>
                            <div className='flex justify-between my-4 text-lg'>
                                <h3 className='text-xl font-bold'>Class :</h3>
                                <h3>{vaccany?.class.name}</h3>
                            </div>

                            <div className='flex justify-between my-4 text-lg'>
                             
                                   <h3 className='text-xl font-bold'>Seats:</h3>
                                 
                                
                              
                                <h3>{vaccany?.attributes.seats}</h3>
                            </div>

                            <div className=' my-4 '>
                                <h3 className='text-xl font-bold my-2'>Description: </h3>
                                <h3 className='text-lg text-gray-600'>{vaccany?.attributes.description}</h3>
                            </div>

                            <div className='flex justify-between my-4 text-lg'>
                                <h3 className='text-xl font-bold'>Date Created:</h3>
                                <h3>{vaccany?.attributes.created_at}</h3>
                            </div>

                            <div className='flex justify-between my-4 text-lg'>
                                <h3 className='text-xl font-bold'>Date Updated</h3>
                                <h3>{vaccany?.attributes.updated_at}</h3>
                            </div>
                            <div className='flex justify-between my-2 text-lg'>
                                <h3 className='text-xl font-bold'>Status</h3>
                                <h3>{getStatus(vaccany?.attributes.status)}</h3>
                            </div>
                      
                        </div>
                        
                    </Card>
                </Col>
            </Row>
        </div>
     
    </div>
  )
}
