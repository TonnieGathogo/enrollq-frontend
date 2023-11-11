'use client'
import  {useEffect, useState } from 'react'
import Link from 'next/link'
import Label from '@/components/utilities/Label'
import { Col,Input, Divider, Button, Card } from 'antd'

import {Select,TextInput } from 'flowbite-react';
import axios from '@/lib/axios'
import useSWR from 'swr'
import { FiSearch } from 'react-icons/fi'
import { Pagination } from 'antd';
import Rating from '@/components/utilities/StarRating'
import { useRouter } from 'next/navigation'
const fetcher = (url) => axios.get(url).then((res) => res.data.data);

export default function BrowseVaccanies() {
  const [subcounties,setSubCounties]=useState([]);
  const [subcounty,setSubCounty]=useState('');
  const [county,setCounty]=useState('');
  const [counties,setCounties]=useState([]);
  const [classes,setClasses]=useState([]);
  const [vaccanies,setVacannies]=useState([]);
  const [levels,setLevels]=useState([]);
  const [class_id,setClass] =useState('');
  const [level,setLevel] = useState('')
  const [pagination,setPagination] = useState({});
  const [links,setLinks] = useState([])
  const [meta,setMetaData] = useState({})
  const [page, setPage] = useState(1);
  const router=useRouter()




  const fetchVaccanies=(params={page:page})=>{
    axios.get("/api/fetch-vacannies",{params}).then((resp)=>{
      setVacannies(resp.data.data)
      setLinks(resp.data.meta.links)
      setMetaData(resp.data.meta.links)
    })
  }

 

  const getCounties=()=>{
     axios.get(`/api/counties`).then((resp)=>{
      setCounties(resp.data.data)
    })
  }

  const getLevels=()=>{
    axios.get(`/api/filter-levels`).then((resp)=>{
      setLevels(resp.data.data)
    });
  }
  

  const handleCountyChange=(e)=>{
    setCounty(e.target.value);
     axios.get('/api/subcounties/'+e.target.value).then((resp)=>{
      setSubCounties(resp.data.data)
    })
  }

  const handleOnchangeLevel=(e)=>{
    setLevel(e.target.value)
    axios.get('/api/filter-classes?level='+e.target.value).then((response)=>{
      setClasses(response.data.data)
    })
  }

  const handleFilterVaccanies=()=>{
    fetchVaccanies({
      county:county,
      subcounty:subcounty,
      level:level,
      class:class_id,
      page:page
    })
  }

  const handlePaginate=(e)=>{
   console.log(e)
   setPage(e)
    fetchVaccanies({
      county:county,
      subcounty:subcounty,
      level:level,
      class:class_id,
      page:e
    })
  }

  useEffect(()=>{
    fetchVaccanies()
    getCounties()
    getLevels()
  },[])

 
  return (
    <>
    <div className='antialiased bg-gray-50 dark:bg-gray-900' >
  


    <aside
      className="fixed  top-0 left-0 z-40 w-96 h-screen pt-14 transition-transform -translate-x-full md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="overflow-y-auto py-5 my-10 px-3 mx-2 rounded-xl h-full bg-white dark:bg-gray-800">
        
      <div >
      <div className=''>
        <Label>County</Label>
        <Select allowClear onChange={handleCountyChange}>
          {counties.map((item, index) =>(
            <option key={index} value={item.id}>{item.attributes?.name}</option>
          ))}
        </Select>
        
        
      </div>
      <div className='my-4'>
        <Label>Sub County</Label>
        <Select allowClear onChange={(e)=>setSubCounty(e)}>
          {subcounties.map((item,index)=>(
           <option key={index} value={item.id}>{item.attributes?.name}</option>
          ))}
        </Select>
      </div>

      <div className='my-4'>
        <Label>Ward</Label>
        <TextInput />
      </div>

      <div className='my-4'>
        <Label>Select Category</Label>
        <Select allowClear className='h-12 w-full' onChange={handleOnchangeLevel} options={levels?.map((item)=>({
          'label': item.attributes.level,
          'value': item.id
        }))}/>
      </div>

      <div className='my-4'>
        <Label>Select Class</Label>
        <Select  allowClear className='h-14 w-full' onChange={(e)=>setClass(e)} options={classes?.map((item)=>({
          'label': item.attributes.name,
          'value': item.id
        }))}/>
      </div>

      <div className='my-4'>
        <Button icon={<FiSearch/>}  onClick={handleFilterVaccanies} className='w-full my-4 text-xl font-bold text-white bg-blue-700 h-14 rounded-full'>Search</Button>
      </div>


      
    </div>
      
      </div>
     
    </aside>

    <main class="p-4 md:ml-96 h-auto pt-20">
    <div  className=''>
      <h3 className=' my-4 text-3xl font-bold'>Posted Vaccanies </h3>
      <div> No of Vaccanies Found :{vaccanies.meta?.total}</div>
      {vaccanies.map((item)=>(
      <Card hoverable onClick={()=>router.push(`/browse_vaccancies/${item.id}`)} key={item.id} className="bg-white shadow border-b-2 border-gray-100 rounded-lg mb-4">
        <div className='flex justify-between'>
          <div className='px-4'>
            <div className='flex gap-6'>
              <div className='border border-gray-200 rounded-xl text-center'>
                <img src="/images/school-logo.png" className='object-center' alt="logo" width={100}/>
              </div>
              <div>
                <h2 className='text-xl font-bold py-2  '>{item.school?.name}</h2>
                <h4 className='text-lg '>{item.school?.address}</h4>
                <div className='py-4'>
                <Rating/>
                </div>
              </div>
            
            </div>
          </div>
          <div className='my-4'>
            <div className='flex justify-between gap-8'>
              <div className=''>
                <h1 className='text-xl font-bold'>{item.class?.name}</h1>
                <h2 className='text-lg '>Seats Available : {item.attributes?.seats}</h2>
                
                </div>
            </div>
          </div>
        
        </div>
      
      </Card>
        ))}
         <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            
            {links.map((link)=>(
 <button
 key={link.label}

 type='button'
 onClick={()=>handlePaginate(link.label)}
 className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
>
 <span>{link.label}</span>

</button>
            ))}
           
            
          </nav>
        </div>
    </div>
    </main>
  </div>
</>
  )
}
