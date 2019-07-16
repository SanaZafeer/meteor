import React, {Component} from "react";
import Logo1  from '../../assets/images/logo1.png'
import icon01 from '../../assets/images/icon01.png'
import icon02 from '../../assets/images/icon02.png'
import icon03 from '../../assets/images/icon03.png'
import icon04 from '../../assets/images/icon04.png'
import icon05 from '../../assets/images/icon05.png'
import searchicon from '../../assets/images/searchicon.png'
import '../../scss/Style.scss'

class Header extends Component{
    render(){
        return(
            <div className='header-container'>

                <div className='header-top'>

                   <span className='header-top-text'>
                       -5 C  New York     Monday, March 6     Blog     Forums     Contact     Buy now!
                   </span>

                    <span className='header-social-icons'>
                        <a href='#'>  <img src={icon01}/> </a>
                        <a href='#'> <img src={icon02}/></a>
                        <a href='#' > <img src={icon03}/> </a>
                        <a href='#'> <img src={icon04}/> </a>
                        <a href='#'> <img src={icon05} className='sign-in1'/> </a>
                        <span className='sign-in2'>sign in</span>
                        <div className='ham-parent'>
                            <div className='ham1'></div>
                            <div className='ham2'> </div>
                            <div className='ham3'></div>
                        </div>
                    </span>


                </div>

                <div className='navbar-container'>
                    <div className='navbar' >

                     <div className='logo-navbar'>
                         <a href='#'>
                    <span className='logo'>
                        <img
                            src={Logo1}
                            alt='icon'
                        />
                    </span>
                         </a>

                    <ul>
                        <li>
                            Fashion
                        </li>

                        <li>
                            style hunter
                        </li>

                        <li>
                            <select className='li-lifestyle'>
                                <option>
                                    Lifestyle
                                </option>
                            </select>

                        </li>

                        <li>
                            celebrity

                        </li>

                        <li>
                            <select className='li-videos'>
                                <option>
                                    Videos
                                </option>
                            </select>
                        </li>

                        <li className='li-interview'>
                            interviews
                        </li>
                    </ul>
                       </div>

                       <span className='search-icon'>
                           <img
                           src={searchicon}
                           />

                       </span>


                </div>
                </div>
            </div>
        );

    }

}
export default Header;