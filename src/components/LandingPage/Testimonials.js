import React from "react";
class Testimonials extends React.Component {

    render() {
        return(
            <section className="section-testimonials section-t8 nav-arrow-a">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap d-flex justify-content-between">
                                <div className="title-box">
                                    <h2 className="title-a">Testimonials</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="testimonial-carousel" className="owl-carousel owl-arrow">
                        <div className="carousel-item-a">
                            <div className="testimonials-box">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="testimonial-img">
                                            <img src="img/testimonial-1.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="testimonial-ico">
                                            <span className="ion-ios-quote"></span>
                                        </div>
                                        <div className="testimonials-content">
                                            <p className="testimonial-text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                                                debitis hic ber quibusdam
                                                voluptatibus officia expedita corpori.
                                            </p>
                                        </div>
                                        <div className="testimonial-author-box">
                                            <img src="img/mini-testimonial-1.jpg" alt="" className="testimonial-avatar"/>
                                            <h5 className="testimonial-author">Albert & Erika</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item-a">
                            <div className="testimonials-box">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="testimonial-img">
                                            <img src="img/testimonial-2.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="testimonial-ico">
                                            <span className="ion-ios-quote"></span>
                                        </div>
                                        <div className="testimonials-content">
                                            <p className="testimonial-text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium
                                                debitis hic ber quibusdam
                                                voluptatibus officia expedita corpori.
                                            </p>
                                        </div>
                                        <div className="testimonial-author-box">
                                            <img src="img/mini-testimonial-2.jpg" alt="" className="testimonial-avatar"/>
                                            <h5 className="testimonial-author">Pablo & Emma</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Testimonials