import './leftpane.scss'
import {line} from "./icon";
import {SearchCards} from "./index";

const LeftPane= () =>{
    return(
        <div className='leftPane'>
                    <div className='searchResultHeader'>


                            <h3 className='headingName'> Resorts </h3>
                        {line}
<h4 className='results'> 180 results found</h4>
                    </div>

            <SearchCards/>

        </div>

    )


}

export default LeftPane