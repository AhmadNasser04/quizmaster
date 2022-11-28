import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { yahoo_questions } from './questions.js'

function Quiz() {

    const { quiz } = useParams()

    const [current, setCurrent] = useState(0)

    const answers = []
    const questions = quiz === 'yahoo' && yahoo_questions

    const handleSubmit = (e) => {
        e.preventDefault()

        setCurrent(current + 1)
    }

  return (
    <div className='min-h-screen bg-[#131515]'>
        <div className='text-[#339989] text-center p-10 font-bold text-4xl justify-center flex'>{quiz === 'yahoo' && 'Yahoo! Data Breach Quiz'}</div>
        <div className='border-t-2 m-10 border-[#339989] flex items-center justify-center' />
        <div>
            <div className='flex items-center flex-col'>
                <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center space-y-8'>
                    <label className='text-gray-300 font-semibold text-2xl'>{questions[current].question}</label>
                    <div className='space-y-12'>
                        {questions[current].options.map((value) => (
                            <div>
                                <label for={value} className=''>
                                    <input type='radio' id={value} name='option' className='appearance-none text-gray-300 bg-[#24242C] border-2 rounded-md cursor-pointer shadow-md hover:shadow-slate-900 border-[#25252D] focus:border-[#339989] focus:text-[#339989] px-32 py-5 transition-all' />
                                    {value}
                                </label>
                            </div>
                        ))}
                    </div>
                    <input type='submit' value='Next' className='bg-[#339989] rounded-md px-5 py-2 text-lg font-bold text-[#131515] cursor-pointer hover:bg-[#339989]/20 hover:text-[#339989] transition-all' />
                </form>
            </div>
        </div>
    </div>
  )
}



export default Quiz