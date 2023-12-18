import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Layout from './layout/Layout'
import Component from './pages/Component';
import '../src/assets/scss/app.scss'

function App() {

  return (
    <main>  
       <Routes>
      <Route path='/' element={<Layout />} >
      <Route path="component" element={<Component />} />
      </Route>
    </Routes>
    </main>
 
 
  )
}

export default App
