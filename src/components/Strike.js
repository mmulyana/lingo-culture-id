'use client'
import Image from 'next/image'
import img from 'public/img/strike.png'
import { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'
import Finish from './Finish'
import useSound from 'use-sound'
import music from './tamat.mp3'

export default function Strike() {
  const [play, { stop }] = useSound(music)
  const [poin, setPoin] = useState(0)
  const [level, setLevel] = useState(0)
  const [finish, setFinish] = useState(false)

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
    <div className='h-fit mt-8 sticky top-4 right-4 duration-200 ease-in'>
      <div className='bg-gray-100 rounded-xl p-4 pb-5'>
        <div className='flex gap-3 items-center'>
          <Image src={img} width={32} />
          <p className='text-2xl font-semibold text-amber-500'>{poin}</p>
        </div>
        <ProgressBar num={level} />
      </div>
      {level === '6'
        ? !finish && (
            <button
              onClick={() => {
                play()
                setFinish(true)
              }}
              className='rounded-lg w-full mt-4 px-6 py-2 bg-indigo-500 text-white shadow-[0_4px_0_0_rgb(67,56,202)]'
            >
              Tamat
            </button>
          )
        : null}
      <button
        onClick={() => {
          localStorage.removeItem('LEVEL')
          localStorage.removeItem('POIN')
          location.reload()
        }}
        className='block ml-auto px-2 hover:bg-gray-100 text-indigo-500 font-semibold text-mt mt-4'
      >
        Reset
      </button>
      {!!finish && <Finish stop={stop} setFinish={setFinish} />}
    </div>
  )
}
