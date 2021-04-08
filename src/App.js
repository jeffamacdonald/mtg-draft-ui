import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation/Navigation';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import ImportCubePage from './components/ImportCubePage/ImportCubePage';
import DraftsPage from './components/DraftsPage/DraftsPage';
import CubesPage from './components/CubesPage/CubesPage';
import JoinDraftPage from './components/JoinDraftPage/JoinDraftPage';
import CreateDraftPage from './components/CreateDraftPage/CreateDraftPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlertComponent from './components/AlertComponent/AlertComponent';
function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
    <div className="App">
      <Navigation title={title}/>
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/importcube">
              <ImportCubePage />
            </Route>
            <Route path="/mydrafts">
              <DraftsPage />
            </Route>
            <Route path="/mycubes">
              <CubesPage />
            </Route>
            <Route path="/joindraft">
              <JoinDraftPage />
            </Route>
            <Route path="/createdraft">
              <CreateDraftPage />
            </Route>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
    </div>
    </Router>
  );
}

export default App;
