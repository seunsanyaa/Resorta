import './aboutus.scss'
import {worldwideConnect,secureTravel,saveOnTravel} from "./icon";
import {useEffect, useRef} from "react";
import {gsap, TimelineMax} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const AboutUs= () =>{

    const el = useRef();
    const q = gsap.utils.selector(el);

    // const tl = new TimelineMax();


    // eslint-disable-next-line no-undef
    useEffect(() => {

        // Target ALL descendants with the class of .box
        gsap.from(q(".aboutUs"),
            {
                y: 50,
                autoAlpha: 0 ,
                duration:0.6 ,
                scrollTrigger:".aboutUs"
            });

    });




    return(
        <div ref={el}>
        <div className='aboutUs'>
            <div className='aboutUsHeader'>

                        <h1>Lorem ipsum dolor  consectetur adipiscing elit</h1>

                        <h4>Fusce quis nibh eu est tristique fringilla quis fringilla
                            ipsum. Phasellus volutpat mauris justo, non dictum sapien interdum sed.
                            Morbi facilisis elementum risus
                        </h4>

            </div>

            <div className='aboutUsinfo'>

                <div className='worldwideConnect'>
                    <div className='worldwideConnectIcon'>


                        {worldwideConnect}

                    </div>

                    <div className='worldwideConnectInfo'>
                                <h2>

                                    Worldwide Connect
                                </h2>

                                <h4>
                                    ipsum lectus lacus massa dolor libero massa diam velit, leo. Diam velit
                                </h4>

                    </div>

                </div>





                <div className='worldwideConnect'>
                    <div className='worldwideConnectIcon'>


                        {secureTravel}

                    </div>

                    <div className='worldwideConnectInfo'>
                        <h2>

                            Secure Travel
                        </h2>

                        <h4>
                            ipsum lectus lacus massa dolor libero massa diam velit, leo. Diam velit
                        </h4>

                    </div>

                </div>



                <div className='worldwideConnect'>
                    <div className='worldwideConnectIcon'>


                        {saveOnTravel}

                    </div>

                    <div className='worldwideConnectInfo'>
                        <h2>

                            Save On Travel
                        </h2>

                        <h4>
                            ipsum lectus lacus massa dolor libero massa diam velit, leo. Diam velit
                        </h4>

                    </div>

                </div>





            </div>

        </div>
        </div>
    )


}

export default AboutUs