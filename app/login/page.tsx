'use client'
import axios from 'axios'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BsGoogle } from 'react-icons/bs'
import Alert from '@mui/material/Alert';  

const Login : React.FC = () =>  {
    const [email, setEmail] = useState<String>('')
    const [password, setPassword] = useState<String>('')
    const { data } = useSession();
    const [showAlert, setShowAlert] = useState(false);

    const [isUser, setIsUser] = useState(false)
    const router = useRouter()


    useEffect(() => {
        if (data?.user) {
            setIsUser(true);
        }
        console.log(isUser, "is user")
    }, [data?.user])


    if (isUser) {
        router.push('/')
    }

    const submitData = async () => {
        try {
            const response = await signIn("credentials", { email, password })
            console.log("Submitting data");
            console.log(response)
        } catch (error) {
            console.log("error is this", error)
            setShowAlert(true);  // Show the alert
            setTimeout(() => {
                setShowAlert(false);  // Hide the alert after 4 seconds
            }, 4000);
        }
    }
    return (
        <div className='flex flex-col justify-center  h-screen  bg-black '>
            <div className='flex justify-center  '>
                <div className='shadow rounded-xl rounded-tr-none px-16 py-10 bg-white login-block  '>
                    <h1 className='text-center text-2xl mb-4'>Log In</h1>

                    
                    {showAlert && (
                        <Alert severity="warning" className='mt-10 mb-10' onClose={() => setShowAlert(false)}>
                            User doesn&apos;t exist
                        </Alert>
                    )}  

                    <div className='flex flex-col gap-3'>
                        <input
                            type="text"
                            className='p-2 border border-gray-300 rounded-lg outline-none text-slate-500'
                            placeholder='Email'
                            onChange={(e) => {
                                e.preventDefault();
                                setEmail(e.target.value);
                            }}
                        />
                        <input
                            type="password"
                            className='p-2 border border-gray-3x00 rounded-lg outline-none text-slate-500'
                            placeholder='Password'
                            onChange={(e) => {
                                e.preventDefault();
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className='flex justify-center items-center my-6'>
                        <button className='login-block text-white rounded-lg px-4 py-2 w-full font-semibold text-lg ' onClick={submitData}>Submit</button>
                    </div>
                    <hr />
                    <p className='my-4 text-200  '>Don&apos;t have an Account? <Link href={'/register'} className='font-bold hover:underline'>Register</Link></p>



                </div>

            </div>
        </div>
    )
}

export default Login
