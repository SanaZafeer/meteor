import React, {Component} from 'react';
import {celebrityCards} from '../../dynamicData';

export default class Celebcards extends Component {
    render() {
        return (
            <div className='celebscards-compo-container'>
                {
                    celebrityCards.map((data) => {
                            return <div className='img-cont-container'>
                                <div className='celebcards-compo-img'>
                                    <img src={data.image} className='cc-img'/>
                                </div>
                                <div className='celebcards-compo-content'>
                                    <div className='content-container'>
                                    <h4 className='cc-tag'> {data.style}</h4>
                                    <span className='cc-view-count'>
                                        <span className="fa fa-eye"></span>
                                        {data.view}
                                    </span>

                                    <h4 className='celebcard-compo-head'>{data.heading}</h4>
                                    <span className='cc-john-name'>{data.name} | {data.hour}</span>
                                </div>
                                </div>
                            </div>
                        }
                    )
                }
            </div>

        );
    }

}