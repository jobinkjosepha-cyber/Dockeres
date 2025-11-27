import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dockerss from './component/Dockerss';

function App() {
  return (
    <div><BrowserRouter>
      <Routes>

        <Route path="/dock" element={<Dockerss />} ></Route>










      </Routes>
    </BrowserRouter></div>

  );
}

export default App;
