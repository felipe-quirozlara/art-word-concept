import React from 'react'
import "../components/sliderCards.css"

const SliderCards = ({ children }) => {
    return (
        <div className="slider-container" name="card-slider" >
            <div className='slider-row'>
                {children}
            </div>
        </div>
    )
}

export default SliderCards