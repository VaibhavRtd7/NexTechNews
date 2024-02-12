
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

        default:  
    }

    return state;
  }

  export default reducer;