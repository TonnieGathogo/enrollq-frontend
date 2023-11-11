'use client';
import {useState} from 'react';
import Link from 'next/link';
import InputError from '@/components/utilities/InputError';
import {useAuth} from '@/hooks/auth';
import Input from '@/components/utilities/Input';
import Label from '@/components/utilities/Label';
import ButtonSubmit from '@/components/utilities/ButtonSubmit';

export default function RegisterPage() {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/my-account/dashboard',
  })

  const [firstname, setFirstName] = useState('');
  const [middlename,setMiddleName] = useState('');
  const [surname,setSurname] = useState('');
  const [email,setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState([]);
  const [read_t_s,setTermConditions]= useState(false);

  const submitForm = event => {
      event.preventDefault()

      register({
          firstname,
          middlename,
          surname,
          phone,
          email,
          password,
          password_confirmation: passwordConfirmation,
          read_terms_and_conditions:read_t_s,
          setErrors,
      })
  }
  return (
    <div className="bg-slate-50 flex flex-col min-h-screen  items-center ">
    <div className="w-2/5 mt-10">
        
        <div className="py-4 text-3xl text-center  text-black font-semibold">Create Your Account</div>
        <div className=" py-2 text-gray-400 ">
          Already have an account <span className="text-blue-600"><Link href={'/auth/login'}>Login</Link></span>
        </div>
        <div className="">
            <form className="bg-white shadow-md rounded-lg px-6 pt-6 pb-8 mb-4" onSubmit={submitForm}>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className=" w-full md:w-1/2 px-3 mb-6 md:mb-0">
                   <Label htmlFor="firstname">First Name</Label>
                    <Input
                      id="firstname"
                      type="text"
                      value={firstname}
                      className="block mt-1 w-full"
                      onChange={event => setFirstName(event.target.value)}
                      required
                      autofocus
                      placeholder="Enter First Name"
                     
                    />
                    <InputError messages={errors.name} className="mt-2" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <Label>Middle Name</Label>
                  <Input
                    id="middleName"
                    type="text"
                    value={middlename}
                    required 
                    onChange={event=>setMiddleName(event.target.value)}
                    placeholder="Enter Middle Name"
                  />
                  <InputError messages={errors.middlename} className="mt-2" />
                   
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <Label>Surname</Label>
                  <Input
                    id="surname"
                    type="text"
                    value={surname}
                    required 
                    onChange={event=>setSurname(event.target.value)}
                    placeholder="Enter Surname"
                  />
                  <InputError messages={errors.surname} className="mt-2" />

                </div>
               
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <Label>Phone Number</Label>
                  <Input
                    id="phone"
                    type="text"
                    value={phone}
                    required 
                    onChange={event=>setPhone(event.target.value)}
                    placeholder="Enter Phone Number"
                  />
                  <InputError messages={errors.phone} className="mt-2" />
                </div>
                </div>
                <div className="mb-4">
                < Label>Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    required 
                    onChange={event=>setEmail(event.target.value)}
                    placeholder="Enter Email Address"
                  />
                  <InputError messages={errors.email} className="mt-2" />
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <Label>Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    required 
                    onChange={event=>setPassword(event.target.value)}
                    placeholder="Enter Password"
                    autoComplete="new-password"
                  />
                  <InputError messages={errors.password} className="mt-2" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <Label>Confirm Password</Label>
                  <Input
                    id="passwordConfirmation"
                    type="password"
                    value={passwordConfirmation}
                    required 
                    onChange={event=>setPasswordConfirmation(event.target.value)}
                    placeholder="Enter Confirm Password"
                  />
                  <InputError messages={errors.password_confirmation} className="mt-2" />
                </div>
                </div>
                <div className="flex justify-between">
                    <div>
                    <input type="checkbox" value={read_t_s} onChange={event=>setTermConditions(event.target.checked)}/> <span className="ml-2"> agree to the Terms of Use</span>I
                    <InputError messages={errors.read_terms_and_conditions} className="mt-2" />
                    </div>
                    
                   
                </div>
                <div className=" py-6">
                  <ButtonSubmit>Submit</ButtonSubmit>
                </div>
                
            </form>
       
        </div>
  </div>
</div> 
  )
}
