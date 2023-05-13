import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import ViewMode from './pages/ViewMode';
import Settings from "./pages/Settings"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="app-brand">Charts App</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="app-nav">
              <NavLink to="/view-mode" className="app-nav-link">View Mode</NavLink>
              <NavLink to="/settings" className="app-nav-link">Settings</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="app-content">
          <Routes>
            <Route exact path="/view-mode" element={<ViewMode />} />
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
