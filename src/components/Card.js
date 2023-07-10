import Image from 'next/image'
import React from 'react'
import img from 'public/img/thumbnail.png'
import Link from 'next/link'

export default function Card({ data }) {
  return (
    <div className='w-full h-32 rounded-xl bg-gray-100 grid grid-cols-2 overflow-hidden px-4'>
      {/* <div className='h-full overflow-hidden'>
        <Image src={img} className=''/>
      </div> */}
      <div className='pt-4'>
        <p className='text-slate-600 text-xl font-semibold'>{data.title}</p>
        <p className='text-slate-500 text-sm'>{data.desc}</p>
      </div>
      <div className='flex items-end justify-end pb-4'>
        <Link
          href={`/learn/${data.slug}`}
          className='rounded-xl px-6 py-2 bg-indigo-500 text-white shadow-[0_4px_0_0_rgb(67,56,202)]'
        >
          Buka
        </Link>
      </div>
    </div>
  )
}
