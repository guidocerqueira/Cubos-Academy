import React from 'react';
import './App.css';
import Login from './pages/Login/index';
import CreateUser from './pages/CreateUser/index';
import Prod from './pages/Prod/index';
import NewProd from './pages/NewProd/index';
import EditProd from './pages/EditProd/index';
import User from './pages/User/index';
import EditUser from './pages/EditUser/index';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
      <div className="App">
        <AuthProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/cadastro" component={CreateUser} />
              <Route path="/produtos" component={Prod} />
              <Route path="/addproduto" component={NewProd} />
              <Route path="/editarproduto/:id" component={EditProd} useParams={useParams} />
              <Route path="/perfil/:id" component={User} />
              <Route path="/editarperfil/:id" component={EditUser} />
            </Switch>
          </Router>
          
        </AuthProvider>
      </div>
  );
}

export default App;
