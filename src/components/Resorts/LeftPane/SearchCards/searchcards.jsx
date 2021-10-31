import './searchcards.scss'
import {wifi,location,bath,dot,line} from "./icon";

const SearchCards= () =>{
    return(
        <div className='searchCards'>

                    <div className='imageSection pane'>
<img src='https://res.cloudinary.com/seunsanyaa/image/upload/v1635682363/Rectangle_11_ku90mh.png' className='houseImage'/>
                    </div>

                    <div className='information pane'>

                        <h3 className='rersortName'>Cheval Blank Randhelli</h3>
                        <h4 className='resortLocation'>North central province, Felhindoo</h4>
                        <div className='icons'>
                        {wifi} {location} {bath}
                        </div>
                        <div className='smallInfo'>
                            <h6 className='smallInfoText'>
                                {dot}
                                <span className='text'>
                                    Only 2 of these prices left
                                </span>
                            </h6>
                            <h6 className='smallInfoText'>
                                {dot}
                                <span className='text'>
                                    Only 2 of these prices left
                                </span>
                            </h6>

                        </div>

                        <div className='bottomSection'>
                                    <div className='price'>
                                            <h3 className='priceFee'>$500</h3>
                                            <p className='perNight'>Per Night</p>
                                    </div>

 {line}
                            <div className='bookings'>
                                <h3 className='details'>View Details</h3>
                                <button className='book'>Book Now</button>
                            </div>
                                    {/*<div className='perNight'>*/}

                                    {/*</div>*/}

                        </div>
                    </div>




        </div>

    )


}

export default SearchCards