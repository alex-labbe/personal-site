import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About/About.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Projects from './components/Projects.jsx'
import AlbumList from './components/AlbumList/AlbumList.jsx'
import PoemifyApp from './components/PoemifyComponents/PoemifyApp.jsx'

function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path= "/projects" element={<Projects />}  />
          <Route path= "/music" element={<AlbumList />}/>
          <Route path= "/poemify" element={<PoemifyApp />}/>
        </Routes>
      </>
    )
}

export default App
