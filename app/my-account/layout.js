'use client';
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu,Dropdown,Space, theme,Icon,Avatar, Badge } from 'antd';
import { FiBell } from 'react-icons/fi';
import { DownOutlined } from '@ant-design/icons';
import MyAccountDashboardPage from './dashboard/page';
import Image from 'next/image';
import Link from 'next/link';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


const items = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item（disabled）',
    key: '3',
    disabled: true,
  },
];
const MyAccountLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider className="w-96" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
       
        <div className="demo-logo-vertical my-4">
         <Image src={'/images/user.png'} className='mx-auto  bg-white rounded-full w-16' alt='logo'  width={310} height={310} />
         <div className='text-center text-lg my-2'>Welcome, Admin </div>
        </div>
        <hr className='border border-gray-200 my-2'/>
        <div>
        <Menu mode="vertical" className='bg-inherit'>
        <Menu.Item key="mail" className='text-white mb-4 mx-auto  text-center   cursor-pointer items-center truncate  text-xl outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"'>
          <Link href={'/my-account/dashboard'} className='flex  '>
            <span
              className="mr-4 [&>svg]:h-8 [&>svg]:w-8   [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none  dark:group-hover:[&>svg]:fill-gray-300 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
              </svg>
            </span>
            <span className=''>Dashboard</span>
          </Link>
        </Menu.Item>

        <Menu.Item className='text-white my-4' key="schools">
          <Link href={'/my-account/schools'} className='flex'>
            <span
              className="mr-4 [&>svg]:h-8 [&>svg]:w-8  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none  dark:group-hover:[&>svg]:fill-gray-300 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </span>
            <span className='text-lg'>My Schools</span>
          </Link>
        </Menu.Item>

        <Menu.Item className='text-white my-4' key="vaccanies">
          <Link href={'/my-account/vaccanies'} className='flex'>
            <span
                className="mr-4 [&>svg]:h-8 [&>svg]:w-8  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none  dark:group-hover:[&>svg]:fill-gray-300 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
              </svg>
            </span>
            <span className='text-lg'>Vaccanies</span>
          </Link>
        </Menu.Item>
       
      
        <Menu.Item className='text-white my-4' key="appointments">
          <Link href={'/my-account/appointments'} className='flex'>
          <span
            className="mr-4 [&>svg]:h-8 [&>svg]:w-8  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none  dark:group-hover:[&>svg]:fill-gray-300 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
          </span>
          <span className='text-lg'>Appointments</span>
          </Link>
        </Menu.Item>
        <Menu.Item className='text-white my-4 active:bg-red-500 ' key="billing">
          <Link href={'/my-account/billing'} className='flex'>
            <span
                className="mr-4 [&>svg]:h-8 [&>svg]:w-8  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none  dark:group-hover:[&>svg]:fill-gray-300 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
            </span>
            <span className='text-lg'>Billing</span>

          </Link>
        </Menu.Item>
      </Menu>
        </div>

      </Sider>
      <Layout>
        <Header
          className=''
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
    <div className="flex w-full flex-wrap items-center justify-between ">
      <div className="demo-logo-vertical mb-2">
        <Image src={'/images/logo.png'} className='mx-auto p-4 w-26' alt='logo'  width={128} height={128} />
      </div>

      <div className="mx-6 mb-2 py-2">
        <Space className=''>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()} className='mr-3'>
            <Space wrap size={16}>
              <Badge count={1}>
                <Avatar shape="circle" icon={<UserOutlined />} />
              </Badge>
            </Space>
          </a>
        </Dropdown>

    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
        <Badge count={1}>
      <Avatar shape="circle" icon={<UserOutlined />} />
    </Badge>
        </Space>
      </a>
    </Dropdown>
    </Space>
  </div>
           
  
      </div>
          </Header>
        <Content
          className=''
          style={{
            margin: '0',
          }}
        >
         
          <div className='p-6'>
           {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MyAccountLayout;




// 'use client'
// import {useEffect} from 'react'
// import Link from 'next/link';
// import Image from 'next/image';
// import { useAuth } from '@/hooks/auth';
// import "tw-elements/dist/css/tw-elements.min.css";

// export default function MyAccountDashboard({children}) {

//   const {user,logout}=useAuth()
//   useEffect(() => {
//     const init = async () => {
//       const { Sidenav,Dropdown,Ripple,Select,initTE} = await import("tw-elements");
//       initTE({Sidenav,Dropdown,Ripple,Select});
//       const sidenav2 = document.getElementById("sidenav-1");
//       const sidenavInstance2 = Sidenav.getInstance(sidenav2);

//       let innerWidth2 = null;

//       const setMode2 = (e) => {
//         // Check necessary for Android devices
//         if (window.innerWidth === innerWidth2) {
//           return;
//         }

//         innerWidth2 = window.innerWidth;

//         if (window.innerWidth < sidenavInstance2.getBreakpoint("xl")) {
//           sidenavInstance2.changeMode("over");
//           sidenavInstance2.hide();
//         } else {
//           sidenavInstance2.changeMode("side");
//           sidenavInstance2.show();
//         }
//       };

//       if (window.innerWidth < sidenavInstance2.getBreakpoint("sm")) {
//         setMode2();
//       }

//       // Event listeners
//       window.addEventListener("resize", setMode2);
//     };
//     init();
    
//   }, []);
  

//   return (
//   <>
//     <header >
    
//       <nav
//         id="sidenav-1"
//         className="fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-blue-950 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]  xl:data-[te-sidenav-hidden='false']:translate-x-0"
//         data-te-sidenav-init
//         data-te-sidenav-hidden="false"
//         data-te-sidenav-mode-breakpoint-over="0"
//         data-te-sidenav-mode-breakpoint-side="xl"
//         data-te-sidenav-content="#content"
//         data-te-sidenav-accordion="true">
//         <a
//           className="mb-3 flex items-center justify-center bg-blue-300  py-1 outline-none"
//           href="#!"
//           data-te-ripple-init
//           data-te-ripple-color="primary">
//           <img
//             id="te-logo"
//             className="mr-2 w-36"
//             src="/images/logo.png"
//             alt="TE Logo"
//             draggable="false" />
          
//         </a>

//         <ul
//           className="relative m-0 list-none px-[0.2rem]"
//           data-te-sidenav-menu-ref>
//           <li className="relative my-2 text-2xl">
//             <Link href="/my-account/dashboard"
//               className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-white outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-white active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none"
//               data-te-sidenav-link-ref>
//               <span
//                 className="mr-4 [&>svg]:h-8 [&>svg]:w-8  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none  dark:group-hover:[&>svg]:fill-gray-300 ">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
//                 </svg>
//               </span>
//               <span className='text-lg'>Dashboard</span>
//             </Link>
//           </li>

//           <li className="relative my-2">
//             <Link href="/my-account/schools"
//               className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-5 text-[0.875rem] text-white outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text--600 active:outline-none data-[te-sidenav-state-active]:text-gray-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
//               data-te-sidenav-link-ref>
//               <span
//                 className="mr-4 [&>svg]:h-8 [&>svg]:w-8  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none  dark:group-hover:[&>svg]:fill-gray-300 ">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
//               </svg>
//               </span>
//               <span className='text-lg'>My Schools</span>
//               </Link>
//           </li>

//           <li className="relative my-2">
//             <Link href="/my-account/vaccanies"
//               className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-5 text-[0.875rem] text-white outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            
//               data-te-sidenav-link-ref>
//               <span
//                 className="mr-4 [&>svg]:h-8 [&>svg]:w-8  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none  dark:group-hover:[&>svg]:fill-gray-300 ">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
//               </svg>
//               </span>
//               <span className='text-lg'>Vaccanies</span>
//               </Link>
//           </li>

//           <li className="relative my-2">
//             <Link href="/my-account/appointments"
//               className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-5 text-[0.875rem] text-white outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            
//               data-te-sidenav-link-ref>
//               <span
//                 className="mr-4 [&>svg]:h-8 [&>svg]:w-8  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none  dark:group-hover:[&>svg]:fill-gray-300 ">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
//               </svg>
//               </span>
//               <span className='text-lg'>Appointments</span>
//               </Link>
//           </li>



//           <li className="relative my-2">
//             <Link href="/my-account/billing"
//               className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-5 text-[0.875rem] text-white outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            
//               data-te-sidenav-link-ref>
//               <span
//                 className="mr-4 [&>svg]:h-8 [&>svg]:w-8  [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none  dark:group-hover:[&>svg]:fill-gray-300 ">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
//                 </svg>

//               </span>
//               <span className='text-lg'>Billing</span>
//               </Link>
//           </li>


//           {/* <li className="relative">
//             <a
//               className="group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
//               data-te-sidenav-link-ref>
//               <span
//                 className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-gray-700 [&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 motion-reduce:[&>svg]:transition-none dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300 ">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 640 512">
                  
//                   <path
//                     d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.7 8.4 166.9 8 160 8s-13.7 .4-20.4 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM208 176c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 400c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z" />
//                 </svg>
//               </span>
//               <span>Schools</span>
//               <span
//                 className="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 motion-reduce:transition-none [&>svg]:h-3 [&>svg]:w-3 [&>svg]:fill-gray-600 group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600 dark:[&>svg]:fill-gray-300"
//                 data-te-sidenav-rotate-icon-ref>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 448 512">
                
//                   <path
//                     d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
//                 </svg>
//               </span>
//             </a>
//             <ul
//               className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
//               data-te-sidenav-collapse-ref>
//               <li className="relative">
//                 <a
//                   className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
//                   data-te-sidenav-link-ref
//                   >Profile</a
//                 >
//               </li>
//               <li className="relative">
//                 <a
//                   className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-700 outline-none transition duration-300 ease-linear hover:bg-primary-400/10 hover:text-primary-600 hover:outline-none focus:bg-primary-400/10 focus:text-primary-600 focus:outline-none active:bg-primary-400/10 active:text-primary-600 active:outline-none data-[te-sidenav-state-active]:text-primary-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
//                   data-te-sidenav-link-ref
//                   >Account</a
//                 >
//               </li>
//             </ul>
//           </li> */}

//         </ul>
//       </nav>
    
//       <nav
//         id="main-navbar"
//         className="sticky left-0 right-0 top-0   flex w-full flex-nowrap items-center justify-between bg-white py-[0.6rem] text-gray-500 border-2 border-b-gray-200  hover:text-gray-700 focus:text-gray-700  lg:flex-wrap lg:justify-start xl:pl-60"
//         data-te-navbar-ref>
      
//         <div
//           className="flex w-full flex-wrap items-center justify-between py-1">
        
//           <button
//             data-te-sidenav-toggle-ref
//             data-te-target="#sidenav-1"
//             className="block border-0 bg-transparent px-2.5 text-gray-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 xl:hidden"
//             aria-controls="#sidenav-1"
//             aria-haspopup="true">
//             <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400">
            
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="h-5 w-5">
//                 <path
//                   fill-rule="evenodd"
//                   d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
//                   clip-rule="evenodd" />
//               </svg>
//             </span>
            
//           </button>

//           <div></div>

          
//           {/* <form
//             className="relative ml-4 mr-auto flex flex-wrap items-stretch xl:mx-0">
//             <input
//               autocomplete="off"
//               type="search"
//               className="relative m-0 inline-block w-[1%] min-w-[225px] flex-auto rounded border border-solid border-gray-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition duration-300 ease-in-out focus:border-primary-600 focus:text-gray-700 focus:shadow-te-primary focus:outline-none dark:text-gray-200 dark:placeholder:text-gray-200"
//               placeholder='Search (ctrl + "/" to focus)' />
//             <span
//               className="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-700 dark:text-gray-200 [&>svg]:w-4"
//               id="basic-addon2">
//               <svg
//                 aria-hidden="true"
//                 focusable="false"
//                 data-prefix="fas"
//                 data-icon="search"
//                 role="img"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512">
//                 <path
//                   fill="currentColor"
//                   d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
//               </svg>
//             </span>
//           </form> */}

        
//           <ul className="relative flex items-center">
          
//             <li className="relative mt-1 mr-2" data-te-dropdown-ref>
//               <a
//                 className="mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700"
//                 href="#"
//                 id="navbarDropdownMenuLink"
//                 role="button"
//                 data-te-dropdown-toggle-ref
//                 aria-expanded="false">
//                 <span className="text-blue-200 [&>svg]:h-8 [&>svg]:w-8">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
//                 </svg>

//                 </span>
//                 <span
//                   className="absolute -mt-10 ml-4 rounded-full bg-red-600 px-1.5 py-[1px] text-[0.6rem] text-white"
//                   >1</span>
//               </a>
//               <ul
//                 className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
//                 aria-labelledby="navbarDropdownMenuLink"
//                 data-te-dropdown-menu-ref>
//                 <li>
//                   <a
//                     className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
//                     href="#"
//                     data-te-dropdown-item-ref
//                     >Some news</a
//                   >
//                 </li>
//                 <li>
//                   <a
//                     className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
//                     href="#"
//                     data-te-dropdown-item-ref
//                     >Another news</a
//                   >
//                 </li>
//                 <li>
//                   <a
//                     className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
//                     href="#"
//                     data-te-dropdown-item-ref
//                     >Something else here</a
//                   >
//                 </li>
//               </ul>
//             </li>

//             <li className="relative mt-1 mr-4" data-te-dropdown-ref>
//               <a
//                 className="mr-4 flex items-center text-gray-500 hover:text-gray-700 focus:text-gray-700"
//                 href="#"
//                 id="navbarDropdownMenuLink"
//                 role="button"
//                 data-te-dropdown-toggle-ref
//                 aria-expanded="false">
//                   <span className="text-blue-200 [&>svg]:h-8 [&>svg]:w-8">
                
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//               </svg>

//                 </span>
//                 <span
//                   className="absolute -mt-10 ml-4 rounded-full bg-red-600 px-1.5 py-[1px] text-[0.6rem] text-white"
//                   >1</span>
//               </a>
//               <ul
//                 className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
//                 aria-labelledby="navbarDropdownMenuLink"
//                 data-te-dropdown-menu-ref>
//                 <li>
//                   <a
//                     className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
//                     href="#"
//                     data-te-dropdown-item-ref
//                     >Some news</a
//                   >
//                 </li>
//                 <li>
//                   <a
//                     className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
//                     href="#"
//                     data-te-dropdown-item-ref
//                     >Another news</a
//                   >
//                 </li>
//                 <li>
//                   <a
//                     className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
//                     href="#"
//                     data-te-dropdown-item-ref
//                     >Something else here</a
//                   >
//                 </li>
//               </ul>
//             </li>

          
      
//             <li className="relative" data-te-dropdown-ref>
//               <a
//                 className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
//                 href="#"
//                 id="navbarDropdownMenuLink"
//                 role="button"
//                 data-te-dropdown-toggle-ref
//                 aria-expanded="false">
//                 <img
//                   src="https://tecdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
//                   className="rounded-full"
//                   height={33} width={33}
//                   alt="Avatar"
//                   loading="lazy" />
//               </a>
//               <ul
//                 className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block"
//                 aria-labelledby="dropdownMenuButton2"
//                 data-te-dropdown-menu-ref>
//                 <li>
//                   <a
//                     className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
//                     href="#"
//                     data-te-dropdown-item-ref
//                     >My profile</a>
//                 </li>
//                 <li>
//                   <a
//                     className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
//                     href="#"
//                     data-te-dropdown-item-ref
//                     >Settings</a>
//                 </li>
//                 <li>
//                   <a
//                     className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
//                     href="#"
//                     onClick={logout}
//                     data-te-dropdown-item-ref
//                     >Logout</a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
      
//       </nav>
      
//     </header>

//     <main className='bg-slate-50'>
//       <div id="content" className="h-screen py-1 mx-6">
//         {children}
//       </div>
//     </main>
    
   
//   </>
   


//   )
// }
