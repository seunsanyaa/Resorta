import './footer.scss'

import {logo,twitter,facebook,instagram} from "./icon";

const Footer= () =>{
    return(
      <div className='footer'>
         <div className='topFooter'>

             <div className='logoSection'>

                 {logo}

                 <h5>© Copyright 2021 Resorta</h5>

                 <div className='socials'>
                     {twitter}
                     {facebook}
                     {instagram}
                 </div>



             </div>


             <div className='column'>



                 <h4>About Us</h4>
                         <p>Gallery</p>
                         <p>Products</p>
                         <p>Stories</p>

             </div>
    <div className='column'>

        <h4>Resources</h4>
                        <p>FAQ</p>
                        <p>Features</p>
                        <p>How it works</p>
                        <p>Send feedback</p>
             </div>
    <div className='column'>

        <h4>Contact</h4>
                    <p>123 456 789 0</p>
                    <p>info@resorta.com</p>
                    <p>1704 Guild street, London</p>
                    <p>WI - 552 90 86</p>
             </div>

             <div className='column'>

                 <h4>Transparency</h4>
                 <p>Terms & Conditions</p>
                 <p>Privacy Policy</p>
                 <p>Cookie Policy</p>
             </div>
         </div>





          {/*<div className='bottomFooter'>*/}
          {/*    <h4>© Copyright 2021 Resorta</h4>*/}


          {/*    <div className='socials'>*/}
          {/*        {twitter}*/}
          {/*        {facebook}*/}
          {/*        {instagram}*/}
          {/*    </div>*/}
          {/*</div>*/}



      </div>

    )


}

export default Footer