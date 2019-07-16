import React,{Component} from 'react';
import '../../scss/Style.scss'
import footlogo from '../../assets/images/logo2.png'
import twit from '../../assets/images/foot/iconT.png'
import inst from '../../assets/images/foot/iconI.png'
import faceb from '../../assets/images/foot/iconF.png'
import vid from '../../assets/images/foot/iconW.png'
import pin from '../../assets/images/foot/iconP.png'


export default class Footer extends Component {
    render(){
        return(
            <div className='footer-container'>
                <div className='footer-box'>

                    <div className='service-bar'>
                        <h2 className='foot-logo'>
                            <img
                                src={footlogo}
                            alt='icon'
                            />

                        </h2>

                        <ul className='foot-ul-services'>
                        <li className='foot-li-services'> Business</li>
                        <li className='foot-li-services'> Investing</li>
                        <li className='foot-li-services'>Technology</li>
                        <li className='foot-li-services'> Entrepreneurs</li>
                        <li className='foot-li-services'>Op/ed</li>
                        <li className='foot-li-services'>Leadership</li>
                        <li className='foot-li-services'>Lifestyle</li>
                        <li className='foot-li-services'> Lists</li>
                        </ul>

                        <select className='country'>
                            <option>England</option>
                            <option>India</option>
                            <option>China</option>
                            <option>Us</option>
                        </select>

                    </div>


                    <div className='social-widget'>

                        <div className='social-widget-box' >
                            <div>
                            <p className='foot-para'>
                                meteor is your news, entertainment, music fashion website.
                                We provide you with the latest breaking news and videos straight
                                from the entertainment.
                            </p>

                            <ul className='social-ul'>
                                <li className='foot-li-1'>
                                    <img
                                        src={twit}
                                    />
                                </li>

                                <li className='foot-li-2'>
                                    <img
                                        src={faceb}
                                    />
                                </li>

                                <li className='foot-li-3'>
                                    <img
                                        src={vid}
                                    />
                                </li>

                                <li className='foot-li-4'>
                                    <img
                                        src={inst}
                                    />
                                </li> <li className='foot-li-5'>
                                    <img
                                        src={pin}
                                    />
                                </li>
                            </ul>
                            </div>

                            <ul className='foot-ul-2'>
                                <li> Business</li>
                                <li>Culture</li>
                                <li>Gadgets</li>
                                <li>Future</li>
                                <li> Startups</li>

                            </ul>

                            <ul className='foot-ul-3'>
                                <li>Stars</li>
                                <li>Screen</li>
                                <li> Binge</li>
                                <li>Culture</li>
                                <li> Media</li>
                            </ul>

                            <ul className='foot-ul-4'>
                                <li>45</li>
                                <li>Congress</li>
                                <li>SecurityT</li>
                                <li> he Nine</li>
                                <li>Trumpmerica</li>
                            </ul>

                            <ul className='foot-ul-5'>
                                <li>Video news</li>
                                <li>Feature shows</li>
                                <li> HLN</li>
                                <li>  TV shows</li>
                                <li>TV schedule</li>
                                <li>Faces of CNN Worldwide</li>
                            </ul>
                        </div>
                    </div>

                    <div className='footer-help-and-more'>
                        <div className='copy-right'>
                            <p className='foot-p1'>
                                © 2018 Themexpert Inc. TX Broadcasting System, Inc. All Rights Reserved.</p>
                            <p className='foot-p2'> Meteor TX ™ & © 2018 Cable News Network.</p>
                        </div>

                        <div className='edition'>
                            <span>
                                <h4>meteor</h4>International Edition +
                            </span>
                        </div>

                        <div className='footer-service-help'>
                            <ul className='footer-service-help-ul'>
                                <li>Terms and Conditions </li>
                                <li>Privacy Statement</li>
                                <li>Market Data  </li>
                                <li>AdChoices</li>
                                <li>Newslatter </li>
                                <li>Help </li>
                                <li>About Us </li>
                                <li>Meteor Newsource </li>
                                <li>Terms </li>
                                <li>Site Map</li>

                            </ul>
                        </div>

                    </div>
                </div>

            </div>






        );
    }

}