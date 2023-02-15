import React, {Component} from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Categories from './pages/categories';
import Login from './pages/login';
import Signup from './pages/signup';
import Student from './pages/student';
import Teacher from './pages/teacher';
import Tsignup from './pages/tsignup';
import Scat from './pages/scat';
import English from './pages/english';
import Javascript from './pages/javascript';
import Hindi from './pages/hindi';
import Maths from './pages/maths';
import Cplus from './pages/cplus';
import Java from './pages/java';
import Python from './pages/python';
import Science from './pages/science';
import Creact from './pages/creact';


class App extends Component {

  render() {
      return (
          <div className="App">
              <Router>
                  <Routes>
                      <Route exact path='/' element={<Home/>} />
                      <Route path='/home' element={<Home/>} />
                      <Route path='/categories' element={<Categories/>} />
                      <Route path='/login' element={<Login/>} />
                      <Route path='/signup' element={<Signup/>} />
                      <Route path='/student' element={<Student/>} />
                      <Route path='/teacher' element={<Teacher/>} />
                      <Route path='/tsignup' element={<Tsignup/>} />
                      <Route path='/scat' element={<Scat/>} />
                      <Route path='/english' element={<English/>} />
                      <Route path='/hindi' element={<Hindi/>} />
                      <Route path='/maths' element={<Maths/>} />
                      <Route path='/cplus' element={<Cplus/>} />
                      <Route path='/java' element={<Java/>} />
                      <Route path='/python' element={<Python/>} />
                      <Route path='/science' element={<Science/>} />
                      <Route path='/react' element={<React/>} />
                      <Route path='/javascript' element={<Javascript/>} />
                  </Routes>
              </Router>
          </div>
      );
  }
}

export default App;
