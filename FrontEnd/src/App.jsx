import './App.css'
import Layout from './Layout';
import Home from './Home';
import ContactForm from './ContactForm';
import About from './About';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='contact' element={<ContactForm />} />
      <Route path='about' element={<About />} />
    </Route>
  </Routes>
  )
}

export default App
