// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
// import Login from './components/login';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route expect path = '/'> 
//             <Login />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} /> */}
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;