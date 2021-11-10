import './rightside.scss'
import {worldwideConnect,secureTravel,saveOnTravel} from "./icon";
import {useEffect, useRef} from "react";
import {gsap, TimelineMax} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Rightside= () =>{


    const el = useRef();
    const q = gsap.utils.selector(el);

    // const tl = new TimelineMax();


    // eslint-disable-next-line no-undef
    useEffect(() => {

        // Target ALL descendants with the class of .box
        gsap.set(q(".rightSide"),
            {
              opacity:0
            });


        gsap.to(q(".rightSide"),
            {
                opacity:1,
delay: 2,
                duration:0.9 ,
                scrollTrigger:".rightSide"
            });





});




    return(

        <div ref={el}>
      <div className='rightSide'>

<h2>

    Latest travels and explorations
</h2>

          <h4>See our gallery for mind blowing scenery of beautiful places all around the world </h4>



          <button className='seePictures'>
              See Pictures

          </button>
      </div>
        </div>

    )


}

export default Rightside