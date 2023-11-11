'use client';
import {useState,useEffect} from 'react';
import {Button,Modal,Form, Select,InputNumber, message} from 'antd';
import Label from '@/components/utilities/Label';
import TextInput from '@/components/utilities/Input';
import SelectInput from '@/components/utilities/SelectInput';
import TextAreaInput from '@/components/utilities/TextArea';
import ButtonSubmit from '@/components/utilities/ButtonSubmit';
import axios from '@/lib/axios'
import useSWR from 'swr'

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

export default function AddVaccany(props) {
    const [open,setOpen]=useState(false);
    const [schools,setSchools]=useState([]);
    const [schoolClasses,setSchoolClasses]=useState([]);
    const [form]=Form.useForm()
    const [loading,setLoading]=useState(false)

    const handleSubmit=async(values)=>{
        try {
            setLoading(true);
            const resp=await axios.post('/api/vaccanies', values);
            setLoading(false)
            message.success('success')
            props.updateList()
          
            setOpen(false);

           
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const {data}=useSWR("/api/schools",fetcher)
    
    const fetchClasses = async()=>{
        const resp=await axios.get(`/api/classes`);
        setSchoolClasses(resp.data.data)
    }
   
    const handleOpenModal =()=>{
        setSchools(data);
        fetchClasses();
        setOpen(true);

    }

    const handleCloseModal =()=>{
        setOpen(false);
    };

    return (
        <>
            <button onClick={handleOpenModal} className='bg-blue-700 text-white rounded p-2 my-1'>Add Vaccany</button>
            <Modal width={600} title="ADD VACCANIES" footer={[]} open={open} onCancel={handleCloseModal}>
                <Form form={form} onFinish={handleSubmit} >
                    <Label>Select School</Label>
                    <Form.Item name="school">
                        <SelectInput options={schools.map((item)=>(
                            {
                                'label': item.attributes.name,
                                'value': item.id
                            }
                        ))}/>
                    </Form.Item>

                    <Label>Select Class</Label>
                    <Form.Item  name={"class"}>
                        <SelectInput options={schoolClasses.map((item)=>(
                            {
                                'value': item.id,
                                'label': item.attributes.name
                            }
                        ))}/>
                    </Form.Item>

                    <Label>No of Seats Available</Label>
                    <Form.Item name="seats">
                        <InputNumber size='large' />
                     
                    </Form.Item>



                    <Label>Details</Label>
                    <Form.Item  name="description">
                        <TextAreaInput rows={4}/>
                    </Form.Item>
                    <Form.Item >
                        <ButtonSubmit loading={loading} htmlType="submit">Submit</ButtonSubmit>
                       
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
