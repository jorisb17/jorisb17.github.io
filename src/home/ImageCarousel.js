import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class ImageCarousel extends Component {
    render() {
        return (
            <Carousel
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                showArrows={false}
            >
                <div>
                    <img alt="" height="auto" width={"600"} src="assets/1.jpg" />
                </div>
                <div>
                    <img alt="" height="auto" width={"600"} src="assets/2.jpg" />
                </div>
                <div>
                    <img alt={""} height="auto" width={"600"}  src="assets/3.jpg" />
                </div>
            </Carousel>
        );
    }
}

export default ImageCarousel
