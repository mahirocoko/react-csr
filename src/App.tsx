import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
    </Routes>
  )
}

export default App
