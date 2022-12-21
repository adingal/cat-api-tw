import React from 'react'
import spinnerImage from 'assets/images/spinner.gif'

const Loading = ({ isLoading }) => {
  return (
    <div
      className={`${
        isLoading ? 'flex' : 'hidden'
      } fixed top-0 right-0 left-0 bottom-0 flex-row items-center justify-center bg-[rgba(0,0,0,0.5)]`}
    >
      <img className="max-w-[100px]" src={spinnerImage} alt="Loading" />
    </div>
  )
}

export default Loading
