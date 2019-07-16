import React, {Component} from 'react';
import {newsCards} from '../../dynamicData';

export default class Newscards extends Component {
    render() {
        return (
            <div className='newscards-compo-container1'>
                {
                    newsCards.map((data, index)=> {
                            return <div className='newscards-compo-container2'>
                        <div className='newscards-compo-img' key={index}>
                                <img src={data.image}/>
                            </div>
                                <div className='newscards-compo-content'>
                                    <span className='n-tag-container'>
                                        <h4 className='n-tag'> {data.style}</h4>
                                    </span>
                                        <span className='n-view-count'><span className="fa fa-eye"></span>
                                            {data.view} </span>

                                    <div className='n-head-text-container'>

                                    <h4 className='newscard-compo-head'>{data.heading}</h4>

                                    <span className='n-john-name'>{data.name} | {data.hour}</span>

                                    <p className='n-description'>
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