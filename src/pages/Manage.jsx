import React from 'react'
import {NewsList} from '../components'

const Manage = () => {
  return (
    <>
      <h1 className='text-center text-xl mt-3 font-semibold'>Manage the Published News</h1>
      <NewsList />
    </>
  )
}

export default Manage