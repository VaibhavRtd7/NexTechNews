import React from 'react'
import { useGlobalContext } from '../context';

function Pagination() {

  const { page, nbPages, getPrevPage, getNextPage} = useGlobalContext();
  return (
    <>
      <div className='flex justify-center items-center my-4 font-mono'>
                <button onClick={ () => getPrevPage()} className='mx-2 bg-transparent hover:bg-gray-600 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-zinc-700 hover:border-transparent rounded'> PREVIOUS</button>
                    
                <p> 
                   {page} of {nbPages}
                </p>

                <button onClick={ () => getNextPage()} className='mx-2 bg-transparent hover:bg-gray-600 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-zinc-700 hover:border-transparent rounded'> NEXT</button>
      </div>
    </>
  )
}

export default Pagination
