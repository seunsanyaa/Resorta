import './filtercard.scss'
import {filterLine,reviewScoreLine} from "./icon";

const FilterCard= () =>{
    return(
        <div className='filterCard'>
            <div className='filterElements'>

            <div className='budgetPerNight'>
                    <h3 className='budgetPerNightHeader'>
                        Budget per night :

                    </h3>



                {filterLine}

                <div className='budgetPrice'>

                    <h4 className='priceLeft'>$ 200</h4>

                    <h4 className='priceRight'>$ 200</h4>
                </div>
            </div>

            <div className='frequentlyUsed'>
                    <h3 className='frequentlyUsedHeader'>
                        Frequently used :

                    </h3>


                <div className='frequentlyUsedButtons'>
                    <div className='leftSide'>

                        <button>
                            Double bed
                        </button>
                        <button>
                            24-hour reception
                        </button>

                        <button>
                            Breakfast included
                        </button>
                    </div>

                    <div className='RightSide'>

                    <button>
                        Hotels
                    </button>

                    <button>
                        Hostels
                    </button>

                    <button>
                        Apartments
                    </button>
                    </div>

                </div>

                </div>

            <div className='filterRatings'>

                    <h3 className='fiterRatingsHeader'>
                        Ratings :
                    </h3>

                    {filterLine}


                    <div className='filterNumber'>

                        <h4 className='numbers'>+1</h4>

                        <h4 className='numbers'>+2</h4>
                        <h4 className='numbers'>+3</h4>
                        <h4 className='numbers'>+4</h4>
                        <h4 className='numbers'>+5</h4>
                    </div>

                </div>

                <div className='reviewScore'>

                <div className='reviewScoreInline'>
                    <h3 className='reviewScoreHeader'>
                        Review score :
                    </h3>

                    <h3> + 5 </h3>
                </div>

                    {filterLine}

                <div className='reviewScoresNumber'>

                    <h4 className=''>1</h4>
                    <h4 className=''>10</h4>



                </div>


                </div>




        </div>



        </div>

    )


}

export default FilterCard