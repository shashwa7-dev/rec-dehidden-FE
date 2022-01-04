import React from "react";
import MicroSite from "./components/Microsite";
import NotFound from "./components/404";
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path='/rcb/:plyrID' element={<MicroSite />} />
        <Route path="*" element ={<NotFound />}/>
       </Routes>
    </div>
  );
}

export default App;
