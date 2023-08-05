import React from 'react'

function Tasks(props) {

    const deleteClick=()=>{
        props.delete(props.id)
    }

  return (
    <>
    <div className='container justify-center mx-auto  relative items-center text-center'>
        <div className='grid grid-cols-3  mt-20 ml-24 relative '>
            <div className='inline-block border-2 border-black rounded-t-lg w-80 h-72 mb-10'>
                <div className='text-center mt-5'>
                    <input className='w-full border-t-2 h-9 border-b-2 border-black mt-1' value={props.title}/>
                </div>
                <div>
                    <textarea className='w-full border-t-2 h-36 border-b-2 border-black mt-1'>{props.task}</textarea>
                </div>
                <button onClick={deleteClick} className='w-full h-10 hover:bg-gray-800 text-white relative mt-8 ease-in-out transition-transform delay-150 bg-gray-900'>Delete</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Tasks