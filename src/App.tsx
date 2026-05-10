import { useEffect, useState } from 'react'
import { Container } from './components/Container'
import { Header } from './components/Header'
import { NewPuppyForm } from './components/NewPuppyForm'
import { PageWraper } from './components/PageWraper'
import { PuppiesList } from './components/PuppiesList'
import { Search } from './components/Search'
import { Shortlist } from './components/ShortList'
import { puppies as puppiesData } from './data/puppies'
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
  const[searchQuery, setSearchQuery] = useState<string>('');
  const [puppies, setPuppies] = useState<Puppy[]>(puppiesData) 
  return (
    <main>
      <ApiPuppies/>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Shortlist puppies={puppies}  liked={liked} setLiked={setLiked}/>
      </div>
      <PuppiesList searchQuery={searchQuery} puppies={puppies} liked={liked} setLiked={setLiked}/>
      <NewPuppyForm puppies={puppies} setPuppies={setPuppies}/>
    </main>
  )
}

function ApiPuppies() {
  const [apiPuppies, setApiPuppies] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(
    () => {
        async function getPuppies() {
          setIsLoading(true);
          try {
            const response = await fetch("http://react-from-scratch-api.test/api/puppies");

            if (!response.ok) {
              const errorData = await response.json();
              setError(`${errorData.message} : ${errorData.details}`);
              throw errorData;
            }

            const data = await response.json();
            setApiPuppies(data);
            
          } catch (error) {
            console.error(error);
          }
          setIsLoading(false);
        }
        getPuppies();
    },
    [
     //re-run the effect 
    ]
  )
}
