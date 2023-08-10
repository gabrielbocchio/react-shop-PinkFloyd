import './App.css'
import Navbar from './Nav/Navbar'
import Home from './components/Home/Home.jsx'
import DataProvider from './components/Context/DataContext'
import Footer from './components/footer/Footer'



function App() {


  return (
    <DataProvider>
    <Navbar />

    
    <Footer />
    </DataProvider>
  )
}

export default App
