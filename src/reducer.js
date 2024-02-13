
const reducer = (state, action) => {

    switch(action.type) {

        case "SET_LOADING" :
            return {
               ...state,
               isLoading : true,
            };

        case "GET_STORIES" :
            return {
              ...state,
              isLoading : false,
              nbPages : action.payLoad.nbPages,
              hits : action.payLoad.hits,
            };

        case "REMOVE_POST" :
            return {
                ...state,
                hits : state.hits.filter(
                    (curEle) => curEle.objectID !== action.payload,
                )
            }
        
        case "SEARCH_POST" :
            return  {
                ...state,
                query : action.payload
            }
        

        default:  
    }

    return state;
  }

  export default reducer;