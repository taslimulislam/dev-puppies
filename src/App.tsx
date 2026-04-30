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
  const[liked, setLiked] = useState<Puppy["id"][]>([1, 3]);

  return (
    <PageWraper>
      <Container>
        <Header />
        <main>
          <div className="mt-24 grid gap-8 sm:grid-cols-2">
            <Search />
            <Shortlist />
          </div>
          <PuppiesList puppies={puppies} liked={liked} setLiked={setLiked}/>
          <NewPuppyForm />
        </main>
      </Container>
    </PageWraper>
  )
}
