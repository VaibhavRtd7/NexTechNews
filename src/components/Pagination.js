import React from 'react'
import { useGlobalContext } from '../context';

function Pagination() {

  const { page, nbPages, getPrevPage, getNextPage} = useGlobalContext();
  return (
    <>
      <div className='flex justify-center my-4'>
                <button onClick={ () => getPrevPage()} className='mx-2 bg-transparent hover:bg-gray-600 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-zinc-700 hover:border-transparent rounded'> PREVIOUS</button>
                    
                   {page} of {nbPages}

                <button onClick={ () => getNextPage()} className='mx-2 bg-transparent hover:bg-gray-600 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-zinc-700 hover:border-transparent rounded'> NEXT</button>
      </div>
    </>
  )
}

export default Pagination
