import React from 'react'
import Quiz from './@quiz/page'
import Ranking from './@ranking/page'
import Result from './@result/page'

export default function page() {
  return (
    <div className='container mx-auto grid grid-cols-2 gap-5 p-4'>
       <Quiz />
       <Ranking />
       <Result />   
    </div>
  )
}
