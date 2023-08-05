import React from 'react'

function Footer() {
    const date = new Date(); 
  return (
    <>
        <footer className='w-full p-3 bg-teal-900 mt-96 scroll-mt-0'>
            <div className='text-center text-white'><h1>CopyRight {date.getFullYear()} | <a href="https://github.com/Ufukkuru">Ufuk Kuru</a></h1></div>
        </footer>
    </>
  )
}

export default Footer