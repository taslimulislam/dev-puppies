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
import { LikedContext } from './context/liked-context'

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
  return (
    <main>
      <LikedContext value={{liked, setLiked}}>
        <div className="mt-24 grid gap-8 sm:grid-cols-2">
          <Search />
          <Shortlist puppies={puppies}/>
        </div>
        <PuppiesList puppies={puppies}/>
      </LikedContext>
      <NewPuppyForm />
    </main>
  )
}
