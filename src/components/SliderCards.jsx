import React, { useState } from 'react'
import "../components/sliderCards.css"

const SliderCards = ({ children }) => {
    const [mouseLeaveX, setMouseLeaveX] = useState(0);

    function mouseDown (e) {
        var delta = mouseLeaveX - e.clientX;

        if (delta > 0) {
            var current = e.currentTarget.scrollLeft;
            var newValue = current - 300
            e.currentTarget.scrollTo(newValue, 0);

        } else if (delta < 0) {
            var current = e.currentTarget.scrollLeft;
            var newValue = current + 300
            e.currentTarget.scrollTo(newValue, 0);
        }
    }

    function mouseLeave (e){
        setMouseLeaveX(e.clientX);
    }

    return (
        <div className="slider-container" name="card-slider" 
            onMouseDown={mouseDown} 
            onMouseUp={mouseLeave}>
            <div className='slider-row'>
                {children}
            </div>
        </div>
    )
}

export default SliderCards