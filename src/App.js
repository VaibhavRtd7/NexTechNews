import Search from "./components/Search"
import Pagination from "./components/Pagination"
import Stories from "./components/Stories"
import styles from "./index.css"

const App = () => {   
  return (
    <>
      <div className="p-4 text-2xl bg-cyan-200 text-gray-900 font-bold text-center "> Tech News</div>
       <Search />
       <Pagination />
       <Stories />
    </>
  )
}

export default App;