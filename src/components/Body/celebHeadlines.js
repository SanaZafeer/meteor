import React, {Component} from 'react';
import {headlines} from '../../dynamicData';

export default class Celebheadlines extends Component{
    render() {
        return(
            <div className='celebheadlines-compo-container'>
                <ul className='celebheadlines-compo-ul'>
                {
                    headlines.map((data,index) => {
                            return (
                                <div className='cleb-parent'>
                        <li className='celebheadlines-compo-img' key={index}>
                                    <img src={data.image} className='l-img'/>
                                </li>

                                <div className='celebheadlines-compo-content'>
                                    <h4 className='celebheadlines-compo-head'>{data.heading}</h4>
                                    <span className='ch-john-name'>{data.name} | {data.hour}</span>
                                </div>
                        </div>

                            )
                        }
                    )
                }
                </ul>

            </div>

        );
    }

}