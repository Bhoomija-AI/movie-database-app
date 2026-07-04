import {useState} from 'react'
import Header from './components/Header'
import PopularMovies from './pages/PopularMovies'
import Search from './pages/Search'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearch, setIsSearch] = useState(false)

  return (
    <>
      <Header setSearchQuery={setSearchQuery} setIsSearch={setIsSearch} />

      {!isSearch ? <PopularMovies /> : <Search query={searchQuery} />}
    </>
  )
}

export default App
