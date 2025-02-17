import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { ShopProvider } from './context'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <ShopProvider>
        <Navbar />
        <div className='navSpacer'/>
        <Outlet />
        <Footer />
      </ShopProvider>
    </>
  )
}

export default App
