import './App.css'
import Navbar from './components/Navbar/Navbar'
import { ShopProvider } from './context'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <ShopProvider>
        <Navbar />
        <div className='navSpacer'/>
        <Outlet />
      </ShopProvider>
    </>
  )
}

export default App
