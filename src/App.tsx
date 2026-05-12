import { Suspense, use, useEffect, useState } from 'react'
import { Container } from './components/Container'
import { Header } from './components/Header'
import { NewPuppyForm } from './components/NewPuppyForm'
import { PageWraper } from './components/PageWraper'
import { PuppiesList } from './components/PuppiesList'
import { Search } from './components/Search'
import { Shortlist } from './components/ShortList'
import { puppies as puppiesData } from './data/puppies'
import { Puppy } from './types'
import { getPuppies } from './queries'
import { LoaderCircle } from 'lucide-react'
import { ErrorBoundary } from "react-error-boundary"

export default function App() {
  
  return (
    <PageWraper>
      <Container>
        <Header />
        <ErrorBoundary 
          fallbackRender={({error}) => (
            <div className="mt-12 bg-red-100 p-6 shadow ring ring-black/5">
              <p className="text-red-500">
                {error.message}: {error.details}
              </p>
            </div>
          )}>

          <Suspense fallback={
            <div className="mt-12 bg-white-100 p-6 shadow ring ring-black/5">
              <LoaderCircle className='animate-spin stroke-slate-300'/>
            </div>
            }>
            <Main />
          </Suspense>
        </ErrorBoundary>
      </Container>
    </PageWraper>
  )
}

const puppyPromise = getPuppies();

function Main() {

  const apiPupies = use(puppyPromise);
  const[liked, setLiked] = useState<Puppy["id"][]>([1, 3]);
  const[searchQuery, setSearchQuery] = useState<string>('');
  const [puppies, setPuppies] = useState<Puppy[]>(apiPupies) 
  return (
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Shortlist puppies={puppies}  liked={liked} setLiked={setLiked}/>
      </div>
      <PuppiesList searchQuery={searchQuery} puppies={puppies} liked={liked} setLiked={setLiked}/>
      <NewPuppyForm puppies={puppies} setPuppies={setPuppies}/>
    </main>
  )
}
