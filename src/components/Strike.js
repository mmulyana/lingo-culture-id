'use client'
import Image from 'next/image'
import img from 'public/img/strike.png'

export default function Strike() {
  return (
    <div className='h-80 bg-gray-100 rounded-xl mt-8 sticky top-4 right-4 duration-200 ease-in p-4'>
      <div className='flex gap-3 items-center'>
        <Image src={img} width={32} />
        <p className='text-2xl font-semibold text-amber-500'>1</p>
      </div>
    </div>
  )
}
