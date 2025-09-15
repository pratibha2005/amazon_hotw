// import React from 'react'

// const App = () => {
//   return (
//     <>
//       <h1>HOTW Online Test Platform</h1>
//     </>
//   )
// }

// export default App



import React from "react";
import { Routes, Route } from "react-router-dom";
import { TestProvider } from "./context/TestContext.jsx";  

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import Condition from "./pages/Condition"
// import Dec1 from "./Declaration/Dec1.jsx"
// import Dec2 from "./Declaration/Dec2.jsx"
import Declaration from "./Declaration/Declaration.jsx";
import FormPage from "./pages/FormPage";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import PracticeIntro from "./PracticeIntro/PracticeIntro.jsx";
import One from "./TestQuestions/One.jsx";
import Result from "./pages/Result";
import Timer from "./components/test/Timer"; // 



function App() {
  return (

    <TestProvider>
      <Navbar />


      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test/:id" element={<TestPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/condition" element={<Condition />} />
          <Route path="/" element={<FormPage />} />
          <Route path="/declaration" element={<Declaration/>}/> 

          <Route path="/form" element={<FormPage />} />
          <Route path="/step1" element={<Step1 />} />

          <Route path="/step2" element={<Step2 />} />
          <Route path= "/practiceintro" element={<PracticeIntro/>}/>
          <Route path= "/One" element={<One/>}/>
          <Route path="/result" element={<Result />} />
          <Route path="/Timer" element={<Timer/>}/>
          <Route path="/TestPage" element={<TestPage/>}/>
          <Route path="/ResultPage" element={<ResultPage/>}/>

        </Routes>
      </div>
    </TestProvider>
  );
}

export default App;
