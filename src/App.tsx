import { useState } from 'react'
import { Container } from './components/Container'
import { Header } from './components/Header'
import { NewPuppyForm } from './components/NewPuppyForm'
import { PageWraper } from './components/PageWraper'
import { PuppiesList } from './components/PuppiesList'
import { Search } from './components/Search'
import { Shortlist } from './components/ShortList'
import { puppies } from './data/puppies'
import { Puppy } from './types'

export default function App() {
  
  return (
    <PageWraper>
      <Container>
        <Header />
        <Main />
      </Container>
    </PageWraper>
  )
}

function Main() {

  const[liked, setLiked] = useState<Puppy["id"][]>([1, 3]);
  const[searchQuery, setSearchQuery] = useState<string>('hello');
  return (
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Shortlist puppies={puppies}  liked={liked} setLiked={setLiked}/>
      </div>
      <PuppiesList searchQuery={searchQuery} puppies={puppies} liked={liked} setLiked={setLiked}/>
      <NewPuppyForm />
    </main>
  )
}
