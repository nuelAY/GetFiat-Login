import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Home() {
    return (
    <div className='bg-black h-full'>
        <div className='text-center bg-zinc-950 mb-10 pb-3'> 
            <h1 className='py-3 text-white text-5xl md:text-7xl font-bold'>GetFiat</h1>
            <h2 className='text-white font-semibold'>Get Local Cash with Crypto</h2>
                <p className='font-light text-xs text-zinc-200'>Seamlessly get FIAT in your local currency in minutes</p>
                
                <div className='grid mx-[8rem] sm:mx-[20rem] my-5 py-3'>
                    <p className='border border-slate-400 text-slate-500 w-[10rem] py-3 sm:w-[20rem]'>Powered by:</p>
                    <h1 className='text-slate-200 text-2xl font-extrabold'>Swyft</h1>
                    <div className='flex mx-10 my-2'>
                        <FaInstagram fontSize={30} className='bg-white mx-2'/>
                        <FaTwitter fontSize={30} className='bg-white'/>
                    </div>
                    
                </div>
        
        </div>

        <div className='bg-zinc-950 w-[23rem] mx-4'>
            <div className='mx-6 pt-10'>
                <h2 className='text-white font-bold align-middle'>Get Started</h2>
                <p className='text-zinc-200 font-extralight text-sm'>Register with your email to get started</p>
                </div>
            <div className="flex items-center mb-[-3rem]">
                <label for="email" className="block text-gray-200 text-sm font-bold mb-2 sr-only">Email:</label>
                <div className="mx-6 sm:mx-[33rem] my-5">
                    <input type="email" id="email" name="email" placeholder="example@example.com" class="w-[20rem] p-2 pl-8  bg-zinc-900"/>
                </div>
            </div>

            <Link type="submit" to="/Transaction" className="w-[20rem] mx-6 sm:mx-[33rem] bg-white text-zinc-500 py-2 my-[2rem] mb-[10rem] rounded hover:bg-zinc-800 text-center focus:outline-none focus:shadow-outline-blue">
                Continue
            </Link>
        </div>
            
    </div>
  )
}

export default Home