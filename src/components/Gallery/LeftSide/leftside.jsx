import './leftside.scss'
import {leftImage,topRightImage,bottomRightImage} from "./icon";
import {useEffect, useRef} from "react";
import {gsap, TimelineMax} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Leftside= () =>{





    const el = useRef();
    const q = gsap.utils.selector(el);

    // const tl = new TimelineMax();


    // eslint-disable-next-line no-undef
    useEffect(() => {


        gsap.from(q(".leftImageImg"), 0.8, {
            scrollTrigger:'.left',
            opacity: 0 ,

            duration:0,
        });



        gsap.to(q('.cover'), 0.8, {
            scrollTrigger:'.cover',
            scaleX: 0,
            transformOrigin: "right",
            duration:0.4,
        }, "reveal");

        gsap.from(q(".topRightImageImg"), 0.8, {
            scrollTrigger:'.left',
            opacity: 0 ,
delay:0.6,
            duration:0,
        });



        gsap.to(q('.cover2'), 1.65, {
            scrollTrigger:'.cover2',
            scaleY: 0,
            transformOrigin: "bottom",
            duration:0.45,
            delay:0.3,
        }, "reveal");

        gsap.from(q(".bottomRightImageImg"), 0.8, {
            scrollTrigger:'.left',
            opacity: 0 ,
            delay:1.7,
            duration:0,
        });



        gsap.to(q('.cover3'), 1.65, {
            scrollTrigger:'.cover3',
            scaleY: 0,
            transformOrigin: "top",
            duration:0.45,
            delay:1.4,
        }, "reveal");

//
//         gsap.from(q(".leftImageImg"),
//             {
//                 opacity:0,
//
// autoAlpha:0,
//                 duration:1 ,
//                 scrollTrigger: ".left",
//                 delay:0
//
//             });
//
//
//
//       gsap.to(q(".leftImageImg"),
//
//           { scaleX: 0,
// delay:0.7,
//                 transformOrigin: "right",
//                 duration:1},
//             "reveal");
//
//
//


    });






    return(

        <div ref={el}>
      <div className='left'>


          <div className='images'>

              <div className='leftImage'>


                  {leftImage}
                  <div className="cover">  </div>
              </div>

              <div className='rightImage'>

<div className='topImage'>
    {topRightImage}

    <div className="cover2">  </div>
</div>

                  <div className='bottomImage'>
                      {bottomRightImage}

                      <div className="cover3">  </div>
                  </div>

              </div>

          </div>
      </div>
        </div>
    )


}

export default Leftside