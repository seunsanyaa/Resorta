import './leftside.scss'
import {leftImage,topRightImage,bottomRightImage} from "./icon";

const Leftside= () =>{
    return(
      <div className='left'>


          <div className='images'>

              <div className='leftImage'>


                  {leftImage}
              </div>

              <div className='rightImage'>

<div className='topImage'>
    {topRightImage}
</div>

                  <div className='bottomImage'>
                      {bottomRightImage}
                  </div>

              </div>

          </div>
      </div>

    )


}

export default Leftside