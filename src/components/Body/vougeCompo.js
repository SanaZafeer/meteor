import React, {Component} from 'react';
import {mediumSizeCompo} from '../../dynamicData';

export default class Vougecompo extends Component{
    render() {
        return(
            <div className='vouge-compo-container'>
                {  mediumSizeCompo.map((data)=>{
                   return <div className='vouge-compo-container'>
                        <div className='vouge-compo-img' >
                      <img src={data.image} />
                    </div>
                    <div className='vouge-compo-content'>
                        <div className='v-views'>
                            <h4 className='tag'> {data.style} </h4>
                            <span className='view-count'>
                                <span className="fa fa-eye"></span>
                                {data.view}
                            </span>
                        </div>

                        <h4 className='vouge-compo-head'>{data.heading}</h4>
                        <span className='v-john-name'>{data.name} | {data.hour}</span>
                        <p className='v-description'>
                            {data.description}
                        </p>

                    </div>

                        </div>
                }
                )
                }
            </div>
        );
    }

}