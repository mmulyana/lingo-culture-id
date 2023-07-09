'use client'

import Image from 'next/image'
import Link from 'next/link'
import img1 from 'public/img/men.png'
import img2 from 'public/img/brain.png'
import img3 from 'public/img/profile.png'
import img4 from 'public/img/close.png'
import imgLogo from 'public/img/id.png'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className='sticky top-0 h-screen p-4 pt-6 border-r-2 border-gray-100'>
      <div className='w-full h-full'>
        <Link
          href='/'
          className='text-emerald-500 text-2xl font-semibold flex gap-3 items-center'
        >
          <p>Lingo Culture</p>
          <Image src={imgLogo} width={24} />
        </Link>
        <div className='mt-12 flex flex-col gap-4'>
          <Link
            href='/'
            className={[
              'w-full py-3 rounded-lg border-2 grid grid-cols-[1fr_8fr] gap-2 px-4 font-semibold',
              pathname === '/'
                ? ' bg-emerald-100 border-emerald-300'
                : 'hover:bg-gray-200 border-transparent',
            ].join(' ')}
          >
            <Image src={img1} width={24} />
            <p className='text-lg'>Baju Adat</p>
          </Link>

          <Link
            href='/'
            className={[
              'w-full py-3 rounded-lg border-2 grid grid-cols-[1fr_8fr] gap-2 px-4 font-semibold',
              pathname === '/quiz'
                ? ' bg-emerald-100 border-emerald-300'
                : 'hover:bg-gray-200 border-transparent',
            ].join(' ')}
          >
            <Image src={img2} width={24} />
            <p className='text-lg'>Kuis</p>
          </Link>

          <Link
            href='/'
            className={[
              'w-full py-3 rounded-lg border-2 grid grid-cols-[1fr_8fr] gap-2 px-4 font-semibold',
              pathname === '/profile'
                ? ' bg-emerald-100 border-emerald-300'
                : 'hover:bg-gray-200 border-transparent',
            ].join(' ')}
          >
            <Image src={img3} width={24} />
            <p className='text-lg'>Profile</p>
          </Link>

          <Link
            href='/'
            className='w-full py-3 rounded-lg border-2 grid grid-cols-[1fr_8fr] gap-2 px-4 font-semibold hover:bg-gray-200 border-transparent'
          >
            <Image src={img4} width={24} />
            <p className='text-lg'>Keluar</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
