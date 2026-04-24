import './App.css'
import { Container } from './components/Container'
import { Header } from './components/Header'
import { NewPuppyForm } from './components/NewPuppyForm'
import { PageWraper } from './components/PageWraper'
import { PuppiesList } from './components/PuppiesList'
import { Search } from './components/Search'
import { Shortlist } from './components/ShortList'

export default function App() {

  return (
    <PageWraper>
      <Container>
        <Header />
        <main>
          <div className="mt-24 grid gap-8 sm:grid-cols-2">
            <Search />
            <Shortlist />
          </div>
          <PuppiesList />
          <NewPuppyForm />
        </main>
      </Container>
    </PageWraper>
  )
}
