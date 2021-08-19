import { Typography } from "@material-ui/core";
import React, {useState} from "react";

import "../assets/styles/imageSlider.css";


let ImageSlider = ({images}) => {
    const [current, setCurrent] = useState(0);
    const length = images.length
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    /*Not Array or no Image */
    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }
    
    return (
        <section className='slider' onClick={nextSlide}>
            {images.map((input, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && ( 
                            <img src={input} className="image" />
                        )}
                    </div>
                );
            })}
        </section>
    )
}



export default ImageSlider;
