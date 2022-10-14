import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Openmap from './components/Openmap';
import Login from './components/Login';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/map">Map</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path='*' element={<Login/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/map' element={<Openmap/>}/>
      </Routes>
    </Router>
  );
}

export default App;
