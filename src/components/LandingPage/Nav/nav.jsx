import './nav.scss'
import {NavLink} from "react-router-dom"
import {logo} from "./icon";

const NavBar = () =>{
    return(

        <div className='navBar'>
            <div className='container navContainer'>


                <nav>
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