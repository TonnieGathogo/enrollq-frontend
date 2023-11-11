
import React,{useState} from 'react';
import { Button,Drawer,Form,Select,message, } from 'antd';
import axios from '@/lib/axios';
import Label from '@/components/utilities/Label';
import TextInput from '@/components/utilities/Input';
import TextAreaInput from '@/components/utilities/TextArea';
import SelectInput from '@/components/utilities/SelectInput';
import MultiSelectIInput from '@/components/utilities/MultiSelectIInput';
import PageTitle from '@/components/utilities/PageTitle';
import useSWR from 'swr'

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

const schoolCategories = [
    { value: "public", label: "Public" },
    { value: "private", label: "Private" },
];
  
const options = [
    { value: "junior", label: "Junior" },
    {value: "high", label: "High" },
];

export default function AddSchool() {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [subcounties,setSubCounties]=useState([])

  const {data:counties}=useSWR("/api/counties",fetcher);
  const handleOnCancel=()=>{
    setVisible(false)
  }

  const[form]=Form.useForm();
  const onFinish = (values) => {
    axios.post('/api/schools', values).then(response=>{
      message.success('success')
    })
  };
  const onReset = () => {
    form.resetFields();
  };

  const handleCountyChange=(e)=>{
    axios.get('/api/subcounties/'+e).then((resp)=>{
     setSubCounties(resp.data.data)
    })
 }


  return (
    <>
        <Button onClick={()=>setVisible(true)}>Add School</Button>
        <Drawer
         width={'60%'}
         placement='right'
         open={visible}
         onClose={handleOnCancel}
         title="Add School"
        >

<div className='border border-gray-300 rounded p-4'>
        
       
        <Form
          onFinish={onFinish}
          form={form}
        >

        <div className="grid grid-cols-2 gap-4">
          <div>
              <Label>Category</Label>
              <Form.Item
                name="category"
                rules={[
                {
                  required: true,
                }
                ]}
              >
                <Select className='h-12' options={schoolCategories}/>
               
              </Form.Item>

          </div>

          <div>
          <Label>Level</Label>
          <Form.Item
              name="level"
              rules={[
               {
                 required: true,
               }
              ]}
          >
            <MultiSelectIInput 
              className={'h-12'}
              options={options}
            />
          </Form.Item>
         
          
          
          </div>

        </div>

        <div>
          <Label>School Name</Label>
          <Form.Item
              name="name"
              rules={[
               {
                 required: true,
               }
              ]}
          >
            <TextInput 
            name="schoolName"
            rules={[
              { required: true},
            ]} />
          </Form.Item>
        </div>
     

        <div className="grid grid-cols-3 gap-4">
          <div>
          <Label>Phone Number 1</Label>
          <Form.Item
              name="phone1"
              rules={[
               {
                 required: true,
               }
              ]}
          >
          <TextInput />
          </Form.Item>
          </div>

          <div>
          <Label>Phone Number 2</Label>
          <Form.Item
              name="phone2"
          >
          <TextInput />
          </Form.Item>
          </div>

          <div>
          <Label>Email</Label>
          <Form.Item
              name="email"
          >
          <TextInput />
          </Form.Item>
          </div>
        
        </div>



        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label>County</Label>
            <Form.Item
              name="county"
              rules={[
               {
                 required: true,
               }
              ]}
            >

              <Select className='h-12' onChange={handleCountyChange} options={counties?.map((item)=>({
                 'label': item.attributes.name,
                 'value': item.id
              }))}/>
         
            </Form.Item>
          </div>
          <div>
            <Label>Sub-County</Label>
            <Form.Item
              name="subcounty"
              rules={[
               {
                 required: true,
               }
              ]}
          >
          <Select options={subcounties?.map((item)=>({
            'label': item.attributes?.name,
            'value': item.id
        }))} size='large' className='w-full h-12'/>
            </Form.Item>
          </div>
          <div>
          <Label>Ward</Label>
          <Form.Item
              name="ward"
              rules={[
               {
                 required: true,
               }
              ]}
          >
      <TextInput />
          </Form.Item>
          </div>
        </div>

        <div>
      <div className="grid grid-cols-2 gap-4">
        <div class="relative mb-3" data-te-input-wrapper-init>
          <Label>Address</Label>
          <Form.Item
              name="address"
              rules={[
               {
                 required: true,
               }
              ]}
          >
          <TextAreaInput/>
          </Form.Item>
        </div>
        <div class="relative mb-3" data-te-input-wrapper-init>
          <Label>Location</Label>
          <Form.Item
              name="location"
              rules={[
               {
                 required: true,
               }
              ]}
          >
          <TextAreaInput/>
          </Form.Item>
        </div>
      </div>
        </div>

        <div>
        <Form.Item>
          <Button htmlType="submit"  size='large'>Submit</Button>
        </Form.Item>
        </div>
        </Form>
      </div>

        </Drawer>
    </>
  )
}
