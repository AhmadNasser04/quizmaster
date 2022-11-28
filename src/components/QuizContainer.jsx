import React from 'react'

function QuizContainer({ onClick, current, questions, checked, onOptionChange }) {
  return (
    <div className='flex items-center flex-col'>
    <form onSubmit={onClick} className='flex flex-col items-center justify-center space-y-8'>
        <label className='text-gray-300 font-semibold text-2xl'>{questions[current].question}</label>
        <div className='space-y-12'>
            {questions[current].options.map((value, index) => (
                <div className='flex group items-center justify-center'>
                    <input type='radio' value={value} checked={checked === value} onChange={onOptionChange} id={value} name='option' className='absolute appearance-none text-gray-300 bg-[#24242C] border-2 rounded-md cursor-pointer shadow-md hover:shadow-gray-900 border-[#25252D] checked:border-[#339989] group-hover:text-[#339989] peer px-32 py-7 transition-all' />
                    <label for={value} className='flex items-center justify-center select-none z-10 cursor-pointer text-gray-300 group-hover:text-[#339989] peer-checked:text-[#339989]'>
                        {value}
                    </label>
                </div>
            ))}
        </div>
        <input type='submit' value={current === 9 ? 'Submit' : 'Next'} className='bg-[#339989] rounded-md px-5 py-2 text-lg font-bold text-[#131515] cursor-pointer hover:bg-[#339989]/20 hover:text-[#339989] transition-all w-32' />
    </form>
</div>
  )
}

export default QuizContainer