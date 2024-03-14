import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Kalku from './miniprj/Kalku';
import Api from './studycase/Api';
import RouterPages from './materi/RouterPages';
function App() {
  return (
    <div>
      <Router>
        <RouterPages />
        <Routes>
          <Route excat path='/' element={<Kalku />} />
          <Route path='/suhu' element={<Api />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
