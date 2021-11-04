import './searchcards.scss'
import {wifi,location,bath,dot,line,star} from "./icon";
import {cardInfo} from "./dynamiccard";

const SearchCards= () =>{


    const renderCard=(card, index)=>{
                return(

                    <div className='searchCards' key={index}>

                        <div className='imageSection pane'>
                            <img src={card.houseImage} className='houseImage'/>
                        </div>

                        <div className='information pane'>
                            <div className='titleAndRatings'>
                                <h3 className='rersortName'>Cheval Blank Randhelli</h3>
                                <div className='ratings'>

                                    <button> 4.5 <span>{star}</span></button>
                                </div>
                            </div>
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



    return(
        <div>
        {cardInfo.map(renderCard)}
        </div>
    )


}

export default SearchCards