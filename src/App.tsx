import { Route, Routes } from 'react-router-dom'

import { DefaultLayout, DocumentLayout } from './layouts'
import { ThemeProvider } from './components/Providers/ThemeProvider'
// Pages
import HomePage from './pages/HomePage'
import StyleSheetPage from './pages/StyleSheetPage'

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
        <Route element={<DocumentLayout />}>
          <Route path="/stylesheets" element={<StyleSheetPage />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
