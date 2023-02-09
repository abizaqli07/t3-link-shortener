import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className=' w-screen fixed top-0 left-0 text-white bg-[#05000a]'>
        <div className=' flex justify-between w-[90%] mx-auto p-4 items-center'>
          <div>Menu</div>
          <div>T3 Shortener</div>
          <div className='btn bg-purple-600 hover:bg-purple-800'>Login</div>
        </div>
      </div>
    </>
  )
}

export default Navbar