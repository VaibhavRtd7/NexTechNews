import Search from "./components/Search"
import Pagination from "./components/Pagination"
import Stories from "./components/Stories"

import { AppContext } from "./context"
import { useContext } from "react"

const App = () => {   
  const data = useContext(AppContext);

  return (
    <>
      <div className="m-1 p-5 text-xl bg-cyan-200"> Welcome to My News Website  {data}!!</div>
       <Search />
       <Pagination />
       <Stories />
    </>
  )
}

export default App;