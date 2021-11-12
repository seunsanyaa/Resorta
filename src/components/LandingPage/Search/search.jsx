
import './search.scss'
import {useRef} from "react";
import {dot, usericon} from "./icon";
import React, { useEffect } from 'react';
import {gsap, TimelineMax} from "gsap";


const SearchMenu = () =>{

    const el = useRef();
    const q = gsap.utils.selector(el);
    // eslint-disable-next-line no-undef
    const tl = new TimelineMax();


    // eslint-disable-next-line no-undef
    useEffect(() => {

        // Target ALL descendants with the class of .box
        tl.from(q(".searchMenu"), {
            y: 20,
            autoAlpha: 0 ,
            duration:0.5},
        3.5);

    });

    return(
        <div ref={el}>
      <div className='searchMenu' >
          <form>
          <label className='locationLabel'>
              <input id='input' type="text" className='location' placeholder="Felhidoo, Maldives"/>
          </label>

              {/*<label className='numberOfUsers'>*/}
              {/*    <input id='input' className='numberOfUsers' placeholder={dot}/>*/}
              {/*</label>*/}
              <label className='numberOfUsersLabel'>
                      <button className='numberOfUsers' id='input'>
                       2 adults  {dot}    2 children  {dot}   1 room
                      </button>
                </label>

          <label className='calenderLabel'>
                <input id='input' className='date1' placeholder=' Wed 15/6/2021'/>
          </label>

          <label className='calenderLabel2'>
              <input className='date2' placeholder='Fri 17/6/2021'/>
          </label>

              <label className='submitLabel'>
              <input id='input' className='submitButton' type='submit' value='   '/>


              </label>
          </form>

      </div>
        </div>

    )


}

export default SearchMenu