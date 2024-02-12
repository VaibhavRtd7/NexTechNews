import { useGlobalContext } from '../context';
// import reducer from "../reducer"

const Stories = () =>  {
   
  const { hits, isLoading, removePost } = useGlobalContext();   
  if(isLoading) {
        return(
            <>
              <h1 className="text-center text-2xl font-bold "  > Loading ..... </h1>
            </>
        );
      }

      return (
        <>

      <div className='bg-gray-200 grid justify-items-center mx-2 '>


      {hits.map((curPost) => {
                const { title, author, num_comments, points, url, objectID} = curPost;
                return (

                  <div className='bg-slate-300 mt-4 w-[60%] shadow-lg rounded-sm' key={objectID}> 
                  <div className='my-5 mx-10 border-solid'> 
                      
                        <h2 className='text-xl font-bold'> {title}</h2>
                        <p>By  {author} | <span> {num_comments}</span> comments </p>
                        <p>  {points} : views </p>
                        
                       
                        <div className='flex justify-between'> 
                        <a href={url} className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-zinc-500 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-500">
                          Read more

                         </a>  
                        <a href='##' onClick={ () => removePost(objectID)} className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-red-400 bg-zinc-800 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">
                          Delete
                         </a>  
                         
                        </div>

                      </div>
                  </div>
                )
              })} 
      
        </div>
        </>
      );
    }
    

export default Stories


