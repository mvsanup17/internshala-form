import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import JobApplicationForm from "./components/job.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<JobApplicationForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
