import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";

import NavBar from './Components/NavBar'
import Car from './Components/Car'

import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <NavBar />
        <Switch>
          <Route exact path="/" component={Car} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
