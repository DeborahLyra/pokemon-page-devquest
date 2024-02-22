import { ThemeProvider } from './contexts/theme-context';
import { Header } from './components/header/Header'
import { MainPage } from './components/mainPage/MainPage';

import './App.css'


function App() {

  return (
    <ThemeProvider>
      <Header />
      <MainPage />
    </ThemeProvider>
  )
}

export default App
