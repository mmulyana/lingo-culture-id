'use client'

import Banner from '@/components/Banner'
import Card from '@/components/Card'
import Finish from '@/components/Finish'
import Strike from '@/components/Strike'
import { data } from '@/data'

export default function Home() {
  return (
    <div className='h-fit pb-20 grid grid-cols-[2fr_1fr]'>
      <div className='mt-8 px-6 flex flex-col gap-3'>
        <Banner />
        {data.map((d, index) => (
          <Card key={index} data={d} />
        ))}
      </div>
      <Strike />
    </div>
  )
}
