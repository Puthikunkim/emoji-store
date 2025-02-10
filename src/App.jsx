import './App.css'
import Navbar from './components/Navbar/Navbar'
import { ShopProvider } from './context'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <ShopProvider>
        <Navbar />
        <Outlet />
      </ShopProvider>
    </>
  )
}

export default App
