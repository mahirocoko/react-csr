import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts'
import HomePage from './pages/HomePage'
import { ThemeProvider } from './components/Providers/ThemeProvider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
