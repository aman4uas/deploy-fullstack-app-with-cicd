import { Route, Routes } from 'react-router-dom'
import { PageNotFound, Home, FetchData } from './components'

const App = () => {
  return (
    <Routes>
      <Route path="/data" element={<FetchData />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
