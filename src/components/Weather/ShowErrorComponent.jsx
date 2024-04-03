import React from 'react'

const ShowErrorComponent = ({error}) => {
  return (
    <div className='position-center error'>
      <p>{error}</p>
    </div>
  )
}

export default ShowErrorComponent
