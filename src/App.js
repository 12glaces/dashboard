import './App.scss';
import {React, useEffect, useState} from 'react';
import Openmap from './pages/Openmap';
import Login from './pages/Login';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from './Firebase/firebase';
import Trade from './pages/Trade';
import Iot from './pages/Iot';
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
              <Nav.Link href="/trade">Trade chart</Nav.Link>  
              <Nav.Link href="/iot">IOT settings</Nav.Link>        
              {user? <Nav.Link className="logoff" onClick={logout}> Sign Out </Nav.Link>
              :               
              <Nav.Link href="/login">Login</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
      <Route exact path='/iot' element={<Iot/>}/>
        {user? <Route exact path='*' element={<Openmap/>}/> : 
        <Route exact path='*' element={<Login/>}/>}
        {user? <Route exact path='/login' element={<Openmap/>}/> : 
        <Route exact path='/login' element={<Login/>}/>}
        {user? <Route exact path='/map' element={<Openmap/>}/> :
        null}
        <Route exact path='/trade' element={<Trade/>}/> 
      
      </Routes>
    </Router>
    </div>
  );
}

export default App;
