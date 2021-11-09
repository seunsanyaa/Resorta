import './nav.scss'
import {NavLink} from "react-router-dom"
import {logo} from "./icon";
import { gsap } from "gsap";
import {useRef} from "react";
import React, { useEffect } from 'react';
import {TimelineMax} from "gsap";

const NavBar = () =>{

    const el = useRef();
    const q = gsap.utils.selector(el);
    // eslint-disable-next-line no-undef
    const tl = new TimelineMax();


    // eslint-disable-next-line no-undef
    useEffect(() => {

        // Target ALL descendants with the class of .box
        tl.from(q("nav"), { y: 20,autoAlpha: 0 ,duration:0.58},0.3);

    });


    return(

        <div className='navBar'>
            <div className='container navContainer' ref={el}>


                <nav >
                    <header>
                        {logo}
                    </header>
                    <NavLink to='/'> <span>Home</span></NavLink>
                    <NavLink to='/'> <span>Resources</span></NavLink>
                    <NavLink to='/'> <span>Contact</span></NavLink>
                    <NavLink to='/'> <span>About Us</span></NavLink>


                    <button className='BookReservations'>
                        Book Reservations
                    </button>
                </nav>


            </div>


        </div>
    )


}

export default NavBar