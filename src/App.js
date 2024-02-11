import Search from "./components/Search"
import Pagination from "./components/Pagination"
import Stories from "./components/Stories"


const App = () => {   

  return (
    <>
      <div className="m-1 p-5 text-xl bg-cyan-200"> Welcome to My News Website !!</div>
       <Search />
       <Pagination />
       <Stories />
    </>
  )
}

export default App;