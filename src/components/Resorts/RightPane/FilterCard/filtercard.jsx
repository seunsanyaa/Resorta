import './filtercard.scss'
import {filterLine} from "./icon";

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


        </div>
        </div>

    )


}

export default FilterCard