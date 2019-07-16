import React, {Component} from 'react';
import {banner} from '../../dynamicData';
import '../../scss/Style.scss';
import Vougecompo from './vougeCompo'
import Newscards from './newsCompo'
import Newscards2 from './newsCompo2'
import Celebcards from './celebCards'
import Celebritytips from './celebrityTips'
import Celebheadlines from './celebHeadlines'
import Socialicons from './righSidePortion/socialIcons';
import Popularpost from './righSidePortion/popularPost';
import Instagramshots from './righSidePortion/instagramShots';
import Imgcard from './righSidePortion/imgCard';


export default class Body extends Component {
    render() {
        return (
            <div className='body-wrapper'>
                <div className='banner-container'>
                    <ul className='banner-ul'>
                        {banner.map((data) => {
                                return <li className='banner-li' >
                                    <img src={data.image}/>

                                    <div className='bnr-text-container'>
                                        <div className='vouge-views'>
                                            <h4 className='vouge'
                                                style={{background: `${data.background}`}}> {data.style} </h4>
                                            <span className='views'>
                                           <span className="fa fa-eye"></span> {data.view} </span>
                                        </div>
                                        <p className='bnr-text'>
                                            Congress Is About To Hand Over Your
                                            Personal Browsing Data
                                        </p>
                                        <span className='bnr-time'>Jhon | 2 hours ago</span>
                                    </div>
                                </li>

                            }
                        )
                        }

                    </ul>

                </div>

                <div className='right-left-wrapper'>

                <div className='body-left-part'>

                    <div className='style-hunter'>
                        <div className='style-hunter-head'>
                            <span className='sh-logo-name'>Style Hunter</span>
                            <ul className='style-hunter-head-ul'>
                                <li><a href='#' className='active-element'> World</a></li>
                                <li><a href='#'>PEOPLE</a></li>
                                <li><a href='#'>FOOD</a></li>
                                <li><a href='#'>ANIMALS</a></li>

                            </ul>
                        </div>
                        <div className='sh-gradient'></div>

                        <Vougecompo/>
                        <div className='newscards-wrapper'>
                        <Newscards/>
                        </div>
                    </div>

                    <div className='life-style'>

                        <div className='life-style-head'>
                            <span className='ls-logo-name'>Lifestyle</span>
                            <ul className='life-style-head-ul'>
                                <li><a href='#' className='active-element'> World</a></li>
                                <li><a href='#'>PEOPLE</a></li>
                                <li><a href='#'>FOOD</a></li>
                                <li><a href='#'>ANIMALS</a></li>
                            </ul>
                        </div>
                        <div className='ls-gradient'></div>
                        <Vougecompo/>
                        <div className='celeb-body-wrapper'>
                        <Celebheadlines/>
                        <Celebheadlines/>
                       </div>
                    </div>

                    <div className='celebrity'>
                        <div className='celebrity-head'>
                            <span className='celeb-logo-name'>Celebrity</span>
                            <ul className='celebrity-head-ul'>
                                <li><a href='#'  className='active-element'> World</a></li>
                                <li><a href='#'>PEOPLE</a></li>
                                <li><a href='#'>FOOD</a></li>
                                <li><a href='#'>ANIMALS</a></li>
                            </ul>
                        </div>
                        <div className='celb-gradient'></div>
                        <Celebcards/>
                        <div className='news-tips-wrapper'>
                        <Newscards2/>
                        <Celebritytips/>
                        </div>

                    </div>

                    <div className='videos'>

                        <div className='videos-head'>
                            <span className='ls-logo-name'>Videos</span>
                            <ul className='videos-head-ul'>
                                <li><a href='#' className='active-element'> World</a></li>
                                <li><a href='#'>PEOPLE</a></li>
                                <li><a href='#'>FOOD</a></li>
                                <li><a href='#'>ANIMALS</a></li>
                            </ul>
                        </div>
                        <div className='vid-gradient'>

                        </div>
                        <Vougecompo/>
                        <div className='video-celebheadlines-wrapper'>
                        <Celebheadlines/>
                        <Celebheadlines/>
                        </div>


                    </div>

                </div>

                <div className='body-right-part'>
                    <Socialicons/>
                    <Popularpost/>
                    <Instagramshots/>
                    <Imgcard/>
                </div>
            </div>
            </div>
        );
    }

}