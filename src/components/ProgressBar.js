export default function ProgressBar({ num }) {
  return (
    <div className='mt-4'>
      <p className="text-lg text-slate-800">Progress kamu</p>
      <div className='mt-2 grid grid-cols-6 gap-2'>
        {[1, 2, 3, 4, 5, 6].map((d, index) => {
          if (index + 1 <= num) {
            return <div key={index} className='h-8 bg-blue-600 rounded' />
          } else {
            return <div key={index} className='h-8 bg-gray-300 rounded' />
          }
        })}
      </div>
    </div>
  )
}
