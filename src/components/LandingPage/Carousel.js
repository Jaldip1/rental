import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import slider_1 from "../../assets/image/slider_1.jpg"


export const Slider = () => (
    <Carousel className="slider">
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://s42814.pcdn.co/wp-content/uploads/2019/12/house_styles_xl-1.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://www.jamesedition.com/stories/wp-content/uploads/2022/03/mansions_main_fin-1.jpg"
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src={ slider_1 }
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);