import '../css/Main.css'
import Favorites from './Favorites'
import SearchResults from './SearchResults'

export default function Main () {
  return (
    <main>
        <Favorites />
        <SearchResults />
    </main>
  )
}