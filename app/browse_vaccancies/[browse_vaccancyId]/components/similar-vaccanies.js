import {use, useEffect,useState} from 'react'
import { Avatar, List } from 'antd';
import axios from '@/lib/axios';
import Link from 'next/link';

export default function SimilarVaccancies(props) {
  const [data,setData]=useState([])
  const getVaccany = async()=>{
    try {
      const resp=await axios.get(`/api/get-vaccancies-nearby/${props.id}`);
      setData(resp.data.data)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getVaccany()
  },[props])
  return (<>

  
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`/images/school-logo.png`} />}
          title={<Link className='' href={`/browse_vaccancies/${item.id}`}>{item.class?.name}</Link>}
          description={item.school?.name}
        />
      </List.Item>
    )}
  />
  </>
  )
}
