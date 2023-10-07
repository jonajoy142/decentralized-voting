import React from 'react'
const Input = ({inputType,title,handleClick}) =>{
  return (
    <div className=''>
        <p className='text-amber-300'>{title}</p>
        {inputType === "text" ?(
            <div className = 'w-full p-2 rounded'>
            <input type="text" 
            placeholder='Type here..'
            className='border-0 outline-0 bg-transparent w-full decoration-white ps-0.5'
            onChange={handleClick}
             /> 
             </div>
        ):(
            ""
        )}
        
    </div>
  )
}

export default Input