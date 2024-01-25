import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Layout from './layout/Layout'
import Component from './pages/Component';
import '../src/assets/scss/app.scss'
import Test from './pages/Test';
import './i18n';
import Home from './pages/Home';


function App() {

  return (
    <main>  
       <Routes>
      <Route path='/' element={<Layout />} >
      <Route index path='/' element={<Home />} />

      <Route path="component" element={<Component />} />
      <Route path="test" element={<Test />} />

      </Route>
    </Routes>
    </main>
 
 
  )
}

export default App
