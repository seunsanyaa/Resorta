import './App.scss'
import {LandingPage} from "./components";
import {SearchMenu} from "./components/LandingPage";
import {ResortsPage} from "./components";
import {AboutUs} from "./components";
import {Gallery,ClientReview,Footer} from "./components";
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

        <ClientReview/>

        <Footer/>

    </div>


      </BrowserRouter>
  );
}

export default App;
