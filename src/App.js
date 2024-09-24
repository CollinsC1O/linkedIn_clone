import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route expect path = '/'> 
            <Login />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Login from './components/login';
// import Home from './components/Home';
// import Header from './components/Header';

// function App() {
//   return (
//     <div className="App">
//           {/* {/* <Route path="/" element={<Login />} />
//           <Route path="/Home" element={<Home />} /> 
//           <Route path="/" element={<Header />} /> */}
//           <BrowserRouter>
//             <Routes>
//           <Route exact path="/">
//             <Login />
//           </Route>
//           <Route path="/home">
//             <Home />
//           </Route>

//             </Routes>
//           </BrowserRouter>
       
//     </div>
//   );
// }

// export default App;