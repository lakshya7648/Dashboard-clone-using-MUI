/**
 * Node Modules
 */
// Other than Material UI Components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Material UI Components
import CssBaseline from '@mui/material/CssBaseline';

/**
 * Components
 */
import Dashboard from './Components/Pages/Overview/Dashboard';
import Error from './Components/Common/Error';
import Signup from './Components/Pages/Authentication/SignUp/Signup';
import SignIn from './Components/Pages/Authentication/SignIn/SignIn';
import ProtectedComponent from './Components/Common/ProtectedComponent';
import Home from './Components/Home';
import Customers from './Components/Pages/Customers/Customers';

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Routes>
          <Route
            path="signin"
            element={<SignIn />}
          />
          <Route
            path="signup"
            element={<Signup />}
          />
          <Route
            path="/*"
            element={<Error />}
          />
          <Route
            path="/"
            element={<Home />}>
            <Route
              path="/dashboard"
              element={<ProtectedComponent Component={Dashboard} />}
            />
            <Route
              path="/customers"
              element={<ProtectedComponent Component={Customers} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
