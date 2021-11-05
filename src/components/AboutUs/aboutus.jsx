import './aboutus.scss'
import {worldwideConnect,secureTravel,saveOnTravel} from "./icon";

const AboutUs= () =>{
    return(
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

    )


}

export default AboutUs