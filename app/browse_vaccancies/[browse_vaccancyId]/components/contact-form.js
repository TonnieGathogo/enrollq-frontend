import {useState} from 'react'
import { Form,Input,Button, message } from 'antd'
import Label from '@/components/utilities/Label'
import axios from '@/lib/axios'
import InputError from '@/components/utilities/InputError'
export default function ContactForm(props) {
  const {form}=Form.useForm
  const [errors, setErrors] = useState([]);
  const onSubmit=async(values) => {
  
    const data={
      'vaccancy_id':props.id,
      'name':values.name,
      'email':values.email,
      'phone':values.phone,
      'note':values.note,
      'appointment_date':values.appointment_date
    }
    try {
      const resp=await axios.post('/api/add-appointment',data)
      message.success(resp.data)
      form.resetFields();
    } catch (error) {
        setErrors(error.response.data.errors);
    }
    
  }
  return (
    <div className=''>
        <Form layout='vertical' form={form} onFinish={onSubmit} >
          <Form.Item 
            name={'name'}
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
            >
            <Input placeholder='Name' size='large'/>
          </Form.Item>
          <InputError className='my-2' messages={errors?.name}/>

          <Form.Item name={'phone'}       
            rules={[
            {
              required: true,
              message: 'Please input your phone!',
            },
           ]}>
            <Input placeholder='Phone Number' size='large'/>
          </Form.Item>
          <InputError className='my-2' messages={errors?.phone}/>
          <Form.Item name={'email'}>
            <Input placeholder='Email Address' size='large'/>
           
          </Form.Item>
          <InputError className='my-2' messages={errors?.email}/>
          
          <Form.Item name={'appointment_date'}             
             rules={[
              {
                required: true,
                message: 'Please input your phone!',
              },
             ]}>
            <Input placeholder='Preffered Date' size='large'/>
          </Form.Item> 
          <InputError className='my-2' messages={errors?.appointment_date}/>

          <Form.Item name={'note'}>
            <Input.TextArea size='large'/>
          </Form.Item>
          <InputError className='my-2' messages={errors?.note}/>
          <Form.Item>
            <Button htmlType='submit' className='h-14 w-full px-4 bg-green-500 font-semibold text-lg text-white'>Send Message</Button>
          </Form.Item>
        </Form>
    </div>
  )
}
