import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardCard = ({text, number, btnText, uri}) => {

    const navigate = useNavigate()


  return (
    <>
        <div className="card flex flex-col border border-blue-200 p-3 m-2 rounded-lg bg-blue-50 gap-3 md:gap-5 md:w-1/3">
            <div className="card-header mt-3 md:mt-7">
                <h3 className='text-center font-semibold'>{text}</h3>
            </div>
            <div className="card-body">
                <p className='text-center font-bold'> {number} </p>
            </div>
            <div className="card-footer mb-3 flex md:mb-7">
                <button 
                className='bg-blue-500 text-white p-2 rounded-md w-2/3 mx-auto hover:bg-blue-700'
                onClick={() => navigate(uri)}
                >
                    {btnText}
                </button>
            </div>
        </div>
    </>
  )
}

export default DashboardCard