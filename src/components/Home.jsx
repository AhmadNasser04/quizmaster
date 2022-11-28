import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col bg-[#131515] h-screen justify-center items-center text-[#339989] space-y-10'>
        {/* HEADINGS */}
        <h1 className='mainHeading text-5xl md:text-6xl font-semibold'>Quiz Master</h1>
        {/* BUTTONS */}
        <div className='flex flex-col'>
            <Link to='/quiz/yahoo'><div className='menuButton'>Yahoo! Data Breach Quiz</div></Link>
        </div>
    </div>
  )
}

export default Home