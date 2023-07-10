'use client'
import Image from 'next/image'
import img from 'public/img/strike.png'
import { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'

export default function Strike() {
  const [poin, setPoin] = useState(0)
  const [level, setLevel] = useState(0)
  useEffect(() => {
    const num = localStorage.getItem('POIN')
    if (num) {
      setPoin(num)
    } else {
      localStorage.setItem('POIN', 0)
    }
  }, [])

  useEffect(() => {
    const num = localStorage.getItem('LEVEL')
    if (num) {
      setLevel(num)
    } else {
      localStorage.setItem('LEVEL', 0)
    }
  }, [])

  return (
    <div className='h-fit bg-gray-100 rounded-xl mt-8 sticky top-4 right-4 duration-200 ease-in p-4 pb-5'>
      <div className='flex gap-3 items-center'>
        <Image src={img} width={32} />
        <p className='text-2xl font-semibold text-amber-500'>{poin}</p>
      </div>
      <ProgressBar num={level} />
    </div>
  )
}
