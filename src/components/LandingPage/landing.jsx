import {NavBar} from "./index";
import './landing.scss'
import {BlurryImage, PlayButton, RightImage} from "./icon";
import {SearchMenu} from "./index";

const LandingPage = () =>{
    return(
        <div className='landingPage'>
            <NavBar/>

                <div className='container landingPageGrid'>

                    <div className='leftSide box'>

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