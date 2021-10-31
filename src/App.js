import './App.scss'
import {LandingPage} from "./components";
import {SearchMenu} from "./components/LandingPage";
import {ResortsPage} from "./components";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const App = () => {
  return (
      <BrowserRouter>
    <div className="app">
<LandingPage/>

{/*<div className='SecondSection'>*/}
{/*    hello*/}
{/*</div>*/}


<SearchMenu/>

<ResortsPage/>

    </div>


      </BrowserRouter>
  );
}

export default App;
