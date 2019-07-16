import React, {Component} from 'react';
import {instaShotsCards} from '../../../dynamicData';

export default class Instagramshots extends Component {
    render() {
        return (
            <div className='insta-shots-container'>
                <ul>
                {
                    instaShotsCards.map((data)=> {
                            return <div className='insta-shots-parent'>
                                <li className='insta-shots-img'
                                    style={{background: `${data.color}`}}>
                                    <img src={data.image}
                                         className='is-img'

                                    />
                                    <div className='insta-shots-content'>
                                        <h2 className='insta-shots-head'>
                                            {data.heading}
                                        </h2>
                                        <p className='insta-shots-description'>
                                            {data.description}
                                        </p>
                                    </div>
                                </li>



                            </div>
                        }
                    )

                }

                </ul>
            </div>
        );

    }
}