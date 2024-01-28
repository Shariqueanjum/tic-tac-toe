import React from 'react'

const Squares = ({squareText,onClick }) => {
  return (
    <div className='w-[33.33%] p-6 mr-0 h-1/3 border border-black border-collapse  '>
      <h1 className='p-6 ml-2 ' onClick={ onClick} >{squareText}</h1>
      
    </div>
  )
}

export default Squares;