import React, {Component} from 'react';
import {imgCard} from '../../../dynamicData';

export default class Imgcard extends Component {
    render() {
        return (
            <div className='imgcard-container'>
                    {
                        imgCard.map((data)=> {
                                return <div className='imgcard-parent'>
                                    <div className='imgcard-img'>
                                        <img src={data.image}
                                             className='ic-img'
                                        />

                                    </div>
                                </div>
                            }
                        )

                    }

            </div>
        );

    }
}