
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

        case "PREV_PAGE" :
            let pageNumber = state.page-1;
            if(pageNumber <= 0){
                pageNumber=0;
            }
            return {
                ...state,
                page : pageNumber
            }

        case "NEXT_PAGE" :
            let pageNum = state.page+1;
            if(pageNum >= state.nbPages){
                pageNum=0;
            }
            return {
                ...state,
                page : pageNum
            }
        

        default:  
    }

    return state;
  }

  export default reducer;