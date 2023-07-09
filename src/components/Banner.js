import Image from 'next/image'
import React from 'react'
import img from 'public/img/thunder.png'

export default function Banner() {
  return (
    <div className='w-full h-fit rounded-xl bg-teal-300 mb-2 p-4'>
        <Image src={img} width={32}/>
        <h1 className='text-xl text-gray-800 font-bold mt-4'>Jelajahi Keindahan Baju Adat Suku-Suku</h1>
        <p className='text-sm text-gray-700 font-semibold mt-1 max-w-[400px]'>Explore lebih dalam tentang pakaian tradisional dari berbagai suku-suku di Indonesia</p>
    </div>
  )
}
