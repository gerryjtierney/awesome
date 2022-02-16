//styles
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

//components
import Home from "./Components/Home/Home.js"
import Show from "./Components/Idea/Idea.js"
import SideBar from './Components/SideBar/SideBar';


function App() {  
  return (
    <div className="App">
      <BrowserRouter >
        <SideBar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/ideas/:id">
              <Show />
          </Route>

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
