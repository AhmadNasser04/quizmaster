import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { yahoo_questions } from './questions.js'
import QuizContainer from './QuizContainer.jsx'
import Statistic from './Statistic.jsx'
import { Link } from 'react-router-dom'

function Quiz() {

    const { quiz } = useParams()

    const [current, setCurrent] = useState(0)
    const [checked, setChecked] = useState(0)
    const [score, setScore] = useState(0)
    const [done, setDone] = useState(false)
    const questions = quiz === 'yahoo' && yahoo_questions

    const onOptionChange = e => {
        setChecked(e.target.value)
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (checked !== 'none') {
            if (checked === questions[current].correct) { setScore(score + 1) }
            if (current < 9) { setCurrent(current + 1) } else { setDone(true) }
            setChecked('none')
        }
    } 

  return (
    <div className='min-h-screen bg-[#131515]'>
        <div className='text-[#339989] text-center p-10 font-bold text-4xl justify-center flex'>{quiz === 'yahoo' && 'Yahoo! Data Breach Quiz'}</div>
        <div className='border-t-2 mb-10 mx-10 border-[#339989] flex items-center justify-center' />
        <div className=''> 
            {done ? <Statistic percentage={score * 10} text={`${score} / 10`}/> : <QuizContainer onClick={handleSubmit} current={current} questions={questions} checked={checked} onOptionChange={onOptionChange} /> }
            {done && 
                <div className='flex items-center justify-center mt-[10%]'>
                    <Link to='/'><div className='menuButton'>Go Back</div></Link>
                </div>
            }
        </div>
    </div>
  )
}



export default Quiz