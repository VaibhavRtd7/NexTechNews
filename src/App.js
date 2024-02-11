import Search from "./components/Search"
import Pagination from "./components/Pagination"
import Stories from "./components/Stories"

// import { AppContext } from "./context"
// import { useContext } from "react"
import { useGlobalContext } from "./context";

const App = () => {   
  const data = useGlobalContext();
  return (
    <>
      <div className="m-1 p-5 text-3xl bg-cyan-200"> Welcome to My News Website :-   {data}!!</div>
       <Search />
       <Pagination />
       <Stories />
    </>
  )
}

export default App;