import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Transaction() {
  return (
    <div className='bg-zinc-950 h-full'>
      <h1 className='py-3 text-white text-5xl md:text-7xl text-center font-bold'>GetFiat</h1>
        <div className='bg-zinc-950 w-[23rem] mx-4'>
            <div className='mx-6 pt-10'>
                <p className='text-zinc-200 font-extralight text-small'>Get Fiat in minutes</p>
                </div>
            <div className="flex-col items-center mb-[-2rem]">
              <label for="email" className="block text-gray-200 text-sm font-bold mb-2 sr-only">Email:</label>
              <div className="mx-6 sm:mx-[33rem] my-3">
            <input type="number" name=" number" placeholder="Amount to receive (NGN) 500.000" class="w-[20rem] p-2 pl-8  bg-zinc-900" />
            
              </div>
              <div className="mx-6 sm:mx-[33rem] my-3">
                <input type="number" name=" number" placeholder="Amount to send (BTC-BTC) 0.02472367234636424623465" class="w-[20rem] p-2 pl-8  bg-zinc-900"/>
              </div>
        </div>
        <p className='text-zinc-200 font-extralight text-small mx-[5rem] my-12 mb-[-1rem]'>You Will Receive NGN56000</p>
            <Link type="submit" to="/Verification" className="w-[20rem] mx-6 sm:mx-[33rem] bg-white text-zinc-500 py-2 my-[2rem] mb-[10rem] rounded hover:bg-zinc-800 text-center focus:outline-none focus:shadow-outline-blue">
                Continue
            </Link>
      </div>
      


      <div className='bg-zinc-950'>
        <h1 className='py-3 text-white md:text-7xl text-center underline'>Get Transaction history</h1>
        <div className='mx-6 text-center'>
          <p className='text-zinc-200 font-extralight text-small'>billclinton@gmail.com</p>
        </div>

        <div className='flex mx-[3rem] sm:mx-[20rem] my-5 py-3'>
          <div className='flex mx-3 my-2'>
            <FaInstagram fontSize={30} className='bg-white mx-2'/>
            <FaTwitter fontSize={30} className='bg-white'/>
          </div>
          <p className='border border-slate-400 text-slate-500 w-[20rem] px-12 py-3 sm:w-[20rem] mx-2'>Powered by:</p>
          <h1 className='text-slate-200 text-2xl font-extrabold py-1'>Swyft</h1>
                    
                    
                </div>
      </div>
            
    </div>
  )
}

export default Transaction