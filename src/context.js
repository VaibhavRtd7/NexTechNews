
import React, { useContext } from 'react'
// now here it is mandatory to import useContext


const AppContext = React.createContext();

const AppProvider = ({children}) => {
  return (
    <>
        <AppContext.Provider value={"Daily News"}>
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