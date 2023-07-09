import Image from 'next/image'
import React from 'react'
import img from 'public/img/thumbnail.png'

export default function Card() {
  return (
    <div className='w-full h-32 rounded bg-gray-100 grid grid-cols-3 overflow-hidden'>
      <div className='h-full overflow-hidden'>
        <Image src={img} className=''/>
      </div>
      <div className='pt-4'>
        <p className='text-slate-600 text-xl font-semibold'>Baju adat jawa</p>
        <p className='text-slate-500 text-sm'>Pada setiap suku di Jawa, terdapat pakaian tradisional yang unik dan khas</p>
      </div>
      <div className='flex items-end justify-end pb-4 pr-4'>
        <button className='rounded-xl px-6 py-2 bg-indigo-500 text-white shadow-[0_4px_0_0_rgb(67,56,202)]'>Buka</button>
      </div>
    </div>
  )
}
