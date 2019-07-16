import React, {Component} from 'react';
import {newsCards2} from '../../dynamicData';

export default class Newscards2 extends Component {
    render() {
        return (
            <div className='newscards2-compo-container1'>
                {
                    newsCards2.map((data, index)=> {
                            return <div className='newscards2-compo-container2'>
                                <div className='newscards2-compo-img' key={index}>
                                    <img src={data.image}/>
                                </div>
                                <div className='newscards2-compo-content'>
                                    <span className='n2-tag-container'>
                                        <h4 className='n2-tag'> {data.style}</h4>
                                    </span>
                                    <span className='n2-view-count'><span className="fa fa-eye"></span>
                                        {data.view} </span>

                                    <div className='n2-head-text-container'>

                                        <h4 className='newscard2-compo-head'>{data.heading}</h4>
                                        <span className='n2-john-name'>{data.name} | {data.hour}</span>
                                        <p className='n2-description'>
                                            {data.description}
                                        </p>
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