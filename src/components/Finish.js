import Image from 'next/image'
import img from 'public/img/tamat.jpg'

export default function Finish() {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/40 z-20'>
      <div className='max-w-[780px] h-80 bg-white rounded-xl mr-4'>
        <Image src={img} className='w-full h-full' />
      </div>
    </div>
  )
}
