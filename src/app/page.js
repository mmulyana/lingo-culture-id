'use client'

import Banner from '@/components/Banner'
import Card from '@/components/Card'
import Strike from '@/components/Strike'
import { data } from '@/data'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-fit pb-20 grid grid-cols-[2fr_1fr]'>
      <div className='mt-8 px-6 pr-10 flex flex-col gap-3'>
        <Banner />
        {data.map((d, index) => (
          <Card key={index} data={d} />
        ))}
      </div>
      <Strike />
    </div>
  )
}
