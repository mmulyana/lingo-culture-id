import Image from 'next/image'
import img from 'public/img/tamat.jpg'

export default function Finish({ stop, setFinish }) {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex justify-center bg-black/40 z-20'>
      <div className='max-w-[780px] h-80 bg-white rounded-xl mr-4 mt-8'>
        <Image src={img} className='w-full h-full' />
        <button
          className='rounded-lg w-full mt-4 px-6 py-2 bg-indigo-500 text-white shadow-[0_4px_0_0_rgb(67,56,202)]'
          onClick={() => {
            setFinish(false)
            location.reload()
          }}
        >
          Selesai
        </button>
      </div>
    </div>
  )
}
