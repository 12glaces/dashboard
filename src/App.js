import './App.scss';
import {React, useEffect, useState} from 'react';
import Openmap from './components/Openmap';
import Login from './components/Login';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from './Firebase/firebase';
const App = () => {
  
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    });
  }, []) 
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div className="App">
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/map">Map</Nav.Link>              
              {user? <Nav.Link className="logoff" onClick={logout}> Sign Out </Nav.Link>
              :               
              <Nav.Link href="/login">Login</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path='*' element={<Login/>}/>
        <Route exact path='/login' element={<Login/>}/>
        {user? <Route exact path='/map' element={<Openmap/>}/> :
        null}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
