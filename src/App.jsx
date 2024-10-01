import react from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Client from './pages/Client';
import Service from './pages/Service';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/client' element={<Client />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
