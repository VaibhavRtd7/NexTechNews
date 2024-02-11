
import React from 'react'
// import { createContext } from 'react'


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

export {AppContext, AppProvider}



// create context
// provider
// use context