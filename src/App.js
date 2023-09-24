//App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Sidebar';
import Home from './Home';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './Header';

// import DashboardCards from './DashboardCards';


function App() {
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className="row">
        <div className="col-2 bg-dark vh-100">
          <Sidebar />
        </div>
        <div className="col bg-light">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;




// <Router>
//       <div className="App">
//         <Header />
//         <div className="main-content">
//           <Sidebar />
//           <Switch>
//             <Route path="/dashboard">
//               <DashboardCards />
//             </Route>
//             <Route path="/analytics">
//               {/* Analytics Content */}
//             </Route>
//             <Route path="/graphs">
//               {/* Graphs content */}
//             </Route>
//             <Route path="/settings">
//               {/* Settings Contewent */}
//             </Route>
//             <Route path="/" exact>
//               {/* A default landing page */}
//             </Route>
//           </Switch>
//         </div>
//       </div>
//     </Router>
