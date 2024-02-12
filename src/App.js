import Search from "./components/Search"
import Pagination from "./components/Pagination"
import Stories from "./components/Stories"
import styles from "./index.css"

const App = () => {   
  return (
    <>
      <div className="m-1 p-5 text-2xl bg-cyan-200"> Welcome to My News Website</div>
       <Search />
       <Pagination />
       <Stories />
    </>
  )
}

export default App;