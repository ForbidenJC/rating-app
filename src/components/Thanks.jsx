import React from 'react'
import imagen from '../images/illustration-thank-you.svg'

const Thanks = ({puntuacion, SetmostrarOcultar}) => {
  return (
    <div className='bg-Dark-Blue h-[360px] w-[325px] rounded-2xl grid justify-items-center px-5 md:w-[410px] md:h-[415px]'>
        <div>
        <img src={imagen} alt="" className='mt-8 w-[90%] md:w-[100%]' />
        </div>
        <div className='h-[30px] w-[165px] bg-button-container flex items-center justify-center rounded-3xl mt-2'>
          <p className='text-orange-400 text-sm'>  You selected {puntuacion} out of 5</p>  
          </div>
          <h2 className='text-White text-2xl font-bold mt-3 md:text-3xl '>  Thank you!</h2>
          <p className='text-Light-Grey text-center text-[14px] md:text-[15px]  mb-5 md:mb-10'>
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
          </p>

       <button className='text-White w-[278px] md:w-[340px] h-[45px] bg-Orange hover:bg-White hover:text-Orange rounded-3xl mt-4 tracking-[1px] font-semibold text-sm hover:scale-110 ease-in duration-200 mb-5' type='submit' onClick={()=>SetmostrarOcultar(false)} >
        RETURN</button>
      

    </div>
  )
}

export default Thanks
