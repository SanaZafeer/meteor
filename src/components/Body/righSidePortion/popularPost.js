import React, {Component} from 'react';
import {mediumSizeCompo} from '../../../dynamicData';
import Celebritytips from '../celebrityTips'
export default class Popularpost extends Component {
    render() {
        return (
            <div className='popularPost-compo-container'>
                {
                    mediumSizeCompo.map((data, index) => {
                            return <div className='popularPost-parent'>
                                <div className='pp-head'>
                                <h2 className='pp-h2'>Popular Post</h2>
                                </div>

                                <div className='popularPost-compo-img' key={index}>
                                    <img src={data.image} className='pp-img'/>
                                </div>

                                <div className='pp-celeb-container'>
                                <Celebritytips/>
                                </div>

                            </div>
                        }
                    )
                }
            </div>
        );
    }
}

