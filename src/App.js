import './App.scss'
import {LandingPage} from "./components";
import {SearchMenu} from "./components/LandingPage";
import {ResortsPage} from "./components";
import {AboutUs} from "./components";
import {Gallery} from "./components";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
      <BrowserRouter>
    <div className="app">
<LandingPage/>




        <SearchMenu/>

        <ResortsPage/>

        <AboutUs/>

        <Gallery/>

    </div>


      </BrowserRouter>
  );
}

export default App;
