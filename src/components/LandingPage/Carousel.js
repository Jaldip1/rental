import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import slider_1 from "../../assets/image/slider_1.jpg"

const sliderData = [
    {
        imageURL: "https://s42814.pcdn.co/wp-content/uploads/2019/12/house_styles_xl-1.jpg",
        address: "10 King St W, Kitchener, ON N2G 1A3",
        altText: "First Slide"
    },
    {
        imageURL: "https://www.jamesedition.com/stories/wp-content/uploads/2022/03/mansions_main_fin-1.jpg",
        address: "10 Huron Rd, Kitchener, ON N2P 2R7",
        altText: "Second Slide"
    },
    {
        imageURL: "https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg",
        address: "11 Floral Crescent, Kitchener, ON N2G 2N9",
        altText: "Third Slide"
    },
]

export const Slider = () => (
    <Carousel className="slider">
        {
            sliderData.map(slide => (
                <Carousel.Item className="sr-item">
                    <img
                        src={slide.imageURL}
                        alt={slide.altText}
                    />
                    <Carousel.Caption>
                        <p className="fs-3">{slide.address}</p>
                        {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                    </Carousel.Caption>
                </Carousel.Item>
            ))
        }
    </Carousel>
);