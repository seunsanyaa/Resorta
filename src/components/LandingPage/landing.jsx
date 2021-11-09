import {NavBar} from "./index";
import './landing.scss'
import {BlurryImage, PlayButton, RightImage} from "./icon";
import {SearchMenu} from "./index";
import {useEffect, useRef} from "react";
import {gsap, TimelineMax} from "gsap";

const LandingPage = () =>{



    const el = useRef();
    const q = gsap.utils.selector(el);
    // eslint-disable-next-line no-undef
    const tl = new TimelineMax();


    // eslint-disable-next-line no-undef
    useEffect(() => {

        // Target ALL descendants with the class of .box
        tl.from(q(".leftSide"), { y: 22,autoAlpha: 0 ,duration:0.5},0.8);
        tl.fromTo(q(".rightSide"), {scale:0,autoAlpha:0},{scale:1,autoAlpha:1,duration:0.6},0.9);



    });



    return(
        <div className='landingPage'>
            <NavBar/>

                <div className='container landingPageGrid' ref={el}>

                    <div className='leftSide box' >

                        <p className='bigParagraph'>
                            Book With Us And Experience
                            The Most Awesome Sights.
                        </p>

                        <p className='smallParagraph'>
                            At Resorta we give you the best Value for your money
                            and beautiful moments you’ll never forget.

                        </p>

                        <button className='exploreNow'>
                            Explore Now

                        </button>
                    </div>


                    <div className='box rightSide'>
                        {RightImage}
                        <div className="centered">
                        {BlurryImage}

                        </div>
                        <div className="playButton">
                            {PlayButton}

                        </div>
                    </div>

                </div>
        </div>

    )


}

export default LandingPage