import './rightpane.scss'
import {FilterCard} from "./index";

const RightPane= () =>{
    return(
        <div className='rightPane'>
            <div className='filterHeader'>


                <h3 className='filterHeading'> Filter </h3>


            </div>
<FilterCard/>
        </div>

    )


}

export default RightPane