
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import  Contact  from './components/Contact'
import  Education  from './components/Education'
import Skills  from './components/Skills'
import  About  from './components/About'


function App() {

  return (
    <>
   <nav> 
      <ul><li>
     <Link to='/'>About </Link>
        </li>
        <li>
     <Link to='/edu'>Education </Link>
        </li>
        <li>
     <Link to='/skill'>Skills </Link>
        </li>
        <li>
     <Link to='/contact'>Contact </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<About />}/>
      <Route path='/edu' element={<Education />}/>
      <Route path='/skill' element={<Skills />}/>
      <Route path='/contact' element={<Contact />}/>

    </Routes>
       </>
  )
}

export default App


