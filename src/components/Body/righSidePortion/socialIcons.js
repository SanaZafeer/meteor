import React, {Component} from 'react';
import {socialImage} from "../../../dynamicData";


export default class Socialicons extends Component {
    render() {
        return (
            <div className='socialicon-container'>
                <div className='socialicon-container2'>
                    <ul className='socialicon-ul'>
                        {
                            socialImage.map((data, index) => {
                                console.log(data.image)
                                    return (
                                        <li key={index}>
                                            <div className='img-container'>
                                            <span className='socialicon-img'>
                                                <img src={data.image}  className='si-img'/>
                                             </span>
                                            </div>
                                           <div className='view-desc-container'>
                                            <span className='s-view'>
                                                {data.view}
                                            </span>
                                            <span className='s-description'>
                                                {data.description}
                                            </span>
                                           </div>

                                        </li>
                                    )

                                }
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }


}