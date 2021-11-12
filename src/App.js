import './App.scss'
import {LandingPage} from "./components";
import {SearchMenu} from "./components/LandingPage";
import {ResortsPage} from "./components";
import {AboutUs} from "./components";
import {Gallery,ClientReview,Footer} from "./components";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { gsap } from "gsap";
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



        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js"/>

    </div>


      </BrowserRouter>
  );
}

export default App;
