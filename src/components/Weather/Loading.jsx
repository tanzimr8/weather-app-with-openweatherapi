import React from 'react'
import spinner from './../../images/spinner.gif'
const Loading = () => {
  return (
    <div className='loader'>
      <img src={spinner} alt='Loader spinner' />
    </div>
  )
}

export default Loading
