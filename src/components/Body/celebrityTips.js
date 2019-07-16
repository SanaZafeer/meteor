import React, {Component} from 'react';
import {celebTips} from '../../dynamicData';

export default class Celebritytips extends Component{
    render() {
        return(
            <div className='celebritytips-compo-container'>
                <ul className='celebritytips-compo-ul'>
                {
                    celebTips.map((data,index) => {
                            return <div className='celebritytips-parent'>

                                <li className='celebritytips-compo-img' key={index}>
                                    <img src={data.image} className='ct-img'/>
                                </li>
                                <div className='celebritytips-compo-content'>
                                    <h4 className='celebritytips-compo-head'>{data.heading}</h4>
                                    <span className='ct-john-name'>{data.name} | {data.hour}</span>
                                </div>
                            </div>
                        }
                    )
                }
                </ul>
            </div>

        );
    }

}