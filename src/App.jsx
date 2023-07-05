import './App.css'
import Navbar from './Nav/Navbar'
import Home from './components/Home/Home.jsx'
import DataProvider from './components/Context/DataContext'



function App() {


  return (
    <DataProvider>
    <Navbar />

    

    </DataProvider>
  )
}

export default App
