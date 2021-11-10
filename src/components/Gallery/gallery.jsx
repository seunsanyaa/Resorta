import './gallery.scss'

import {LeftSide} from "./index";
import  {RightSide} from "./index";
import {useEffect, useRef} from "react";
import {gsap, TimelineMax} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Gallery= () =>{





    const el = useRef();
    const q = gsap.utils.selector(el);

    // const tl = new TimelineMax();


    // eslint-disable-next-line no-undef
    useEffect(() => {

        // Target ALL descendants with the class of .box
        // gsap.from(q(".gallery"),
        //     {
        //         y: 10,
        //
        //         duration:0.6 ,
        //         scrollTrigger: ".gallery",
        //
        //     });
        //
        // gsap.utils.toArray(".gallery").forEach((gallery, i) => {
        //     ScrollTrigger.create({
        //         trigger: gallery,
        //         start: "top top",
        //         pin: true
        //         // pinSpacing: false
        //     });
        // });
        //
        // ScrollTrigger.create({
        //     snap: 1 / 4 // snap whole page to the closest section!
        // });


    });







    return(
        <div ref={el}>
      <div className='gallery'>



          <LeftSide/>


          <RightSide/>

      </div>

        </div>

    )


}

export default Gallery