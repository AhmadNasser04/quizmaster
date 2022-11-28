import React from 'react'

function Footer() {
  return (
    <div className='h-[15vh] bg-[#131515] text-[#339989] space-y-5 items-center justify-center flex flex-col'>
      <div className='w-[90vw] border-t-2 border-[#339989]' />
      <div className='text-center'>
        <a href='https://ahmadnasser.net/' rel="noreferrer" target='_blank'><p className='text-3xl cursor-pointer font-semibold hover:text-[#131515] text-stroke transition-all'>ahmadnasser.net</p></a>
        <p>Be a Quiz Master!</p>
      </div>
    </div>
  )
}

export default Footer