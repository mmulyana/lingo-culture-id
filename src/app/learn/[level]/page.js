'use client'

import { data } from '@/data'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page({ params }) {
  const router = useRouter()

  const [dataLocal, setDataLocal] = useState(null)
  const [detail, setDetail] = useState(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (typeof window !== undefined) {
      const local = localStorage.getItem('LOCAL')
      if (local) {
        setDataLocal(data)
      } else {
        localStorage.setItem('LOCAL', data)
      }
    }
  }, [])

  useEffect(() => {
    const getData = data.filter((d) => d.slug === params.level)
    setDetail(getData[0])
    return () => setDetail(null)
  }, [])

  return (
    <div className='h-fit pb-20 grid grid-cols-[2fr_1fr] mt-8 gap-4 px-6'>
      <div className='h-fit'>
        <h1 className='text-xl font-semibold'>Baju adat di {params.level}</h1>
        <div className='w-full bg-gray-100 h-80 rounded-xl mt-4'></div>
      </div>
      <div className='mt-11'>
        <p className='text-xl text-slate-800 font-semibold'>Baju {detail?.data[index].title}</p>
        <p className='font-semibold text-slate-700 mt-3'>Deskripsi</p>
        <p className='mt-2 text-slate-500'>{detail?.data[index].description}</p>
        <button onClick={() => {
          if(index === detail.data.length - 1) {
            let local = localStorage.getItem('LEVEL')
            if(local) {
              let tmp = Number(local) + 1
              console.log(tmp)
              localStorage.setItem('LEVEL', tmp)
            } else {
              localStorage.setItem('LEVEL', 1)
            }
            router.push('/')
          } else {
            let local = localStorage.getItem('POIN')
            if(local) {
              let tmp = Number(local) + 1
              localStorage.setItem('POIN', tmp)
            } else {
              localStorage.setItem('POIN', 1)
            }
            setIndex(prev => prev + 1)
          }
        }} className='mt-4 rounded-xl px-6 py-2 bg-indigo-500 text-white shadow-[0_4px_0_0_rgb(67,56,202)]'>Selesai Baca</button>
      </div>
    </div>
  )
}
