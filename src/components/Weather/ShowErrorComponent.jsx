import React from 'react'

const ShowErrorComponent = ({error}) => {
  return (
    <div className='error'>
      <p>{error}</p>
    </div>
  )
}

export default ShowErrorComponent
