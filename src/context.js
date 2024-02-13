import React, { useContext, useEffect, useReducer } from 'react'
import reducer from "./reducer"

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading : true,
  query : '',
  nbPages : 0,
  page : 0,
  hits : [],
}

const AppContext = React.createContext();
const AppProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchApiData = async (url) => {
      
      dispatch({ type : "SET_LOADING"})
      try {
          const res = await fetch(url);
          const data = await res.json();
          console.log("Data : ", data);

          dispatch({
            type : "GET_STORIES",
            payLoad : {
                isLoading : false,
                hits : data.hits,
                nbPages : data.nbPages,
            }
        })

      } catch (error) {
          console.log("Error : ", error)
      }

  }

// remove the post
const removePost = (post_id) => {
  console.log('Remove post triggered - context.js')
  dispatch({
    type : "REMOVE_POST",
    payload : post_id
  });
}

// search the query
const searchPost = (searchQuery) => {
  dispatch ({ type : "SEARCH_POST", payload : searchQuery})
  console.log("Search Query : ", searchQuery)
}
  useEffect( () => {
      fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page])

  return (
    <>
        <AppContext.Provider value={{...state, removePost, searchPost}}>
            {children}
        </AppContext.Provider>
    </>
  );
}

// custom hook create
const useGlobalContext = () => {
   return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}

// create context
// provider
// use context