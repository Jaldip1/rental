import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import slider_1 from "../../assets/image/slider_1.jpg"

function PropertyDetails() {
    return (
        <>
            <section className="intro-single">
                <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-8">
                    <div className="title-single-box">
                        <h1 className="title-single">11 Fedrick street</h1>
                        <span className="color-text-a">Kitchener, ON N2T 2L8</span>
                    </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                    <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/properies">Properties</Link>
                        </li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </section>

            <section className="property-single nav-arrow-b">
                <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    <div id="property-single-carousel" className="owl-carousel owl-arrow gallery-property">
                        <div className="carousel-item-b">
                        <img src="img/slide-2.jpg" alt=""/>
                        </div>
                        <div className="carousel-item-b">
                        <img src="img/slide-3.jpg" alt=""/>
                        </div>
                        <div className="carousel-item-b">
                        <img src="img/slide-1.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-md-5 col-lg-4">
                        <div className="property-price d-flex justify-content-center foo">
                            <div className="card-header-c d-flex">
                            <div className="card-box-ico">
                                <span className="ion-money">$</span>
                            </div>
                            <div className="card-title-c align-self-center">
                                <h5 className="title-c">15000</h5>
                            </div>
                            </div>
                        </div>
                        <div className="property-summary">
                            <div className="row">
                            <div className="col-sm-12">
                                <div className="title-box-d section-t4">
                                <h3 className="title-d">Quick Summary</h3>
                                </div>
                            </div>
                            </div>
                            <div className="summary-list">
                            <ul className="list">
                                <li className="d-flex justify-content-between">
                                <strong>Property ID:</strong>
                                <span>1134</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                <strong>Location:</strong>
                                <span>Chicago, IL 606543</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                <strong>Property Type:</strong>
                                <span>House</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                <strong>Status:</strong>
                                <span>Sale</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                <strong>Area:</strong>
                                <span>340m
                                    <sup>2</sup>
                                </span>
                                </li>
                                <li className="d-flex justify-content-between">
                                <strong>Beds:</strong>
                                <span>4</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                <strong>Baths:</strong>
                                <span>2</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                <strong>Garage:</strong>
                                <span>1</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-7 col-lg-7 section-md-t3">
                        <div className="row">
                            <div className="col-sm-12">
                            <div className="title-box-d">
                                <h3 className="title-d">Property Description</h3>
                            </div>
                            </div>
                        </div>
                        <div className="property-description">
                            <p className="description color-text-a">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                            type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <p className="description color-text-a no-margin">
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="row section-t3">
                            <div className="col-sm-12">
                            <div className="title-box-d">
                                <h3 className="title-d">Amenities</h3>
                            </div>
                            </div>
                        </div>
                        <div className="amenities-list color-text-a">
                            <ul className="list-a no-margin">
                            <li>Balcony</li>
                            <li>Outdoor Kitchen</li>
                            <li>Cable Tv</li>
                            <li>Deck</li>
                            <li>Tennis Courts</li>
                            <li>Internet</li>
                            <li>Parking</li>
                            <li>Sun Room</li>
                            <li>Concrete Flooring</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-10 offset-md-1">
                        <Carousel>
                            <Carousel.Item className="property-item">
                                <img
                                    src="https://s42814.pcdn.co/wp-content/uploads/2019/12/house_styles_xl-1.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item className="property-item">
                                <img
                                    src="https://www.jamesedition.com/stories/wp-content/uploads/2022/03/mansions_main_fin-1.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item className="property-item">
                                <img
                                    src={ slider_1 }
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    {/*<div className="col-md-10 offset-md-1">
                        <ul className="nav nav-pills-a nav-pills mb-3 section-t3" id="pills-tab" role="tablist">
                            <li className="nav-item">
                            <a className="nav-link active" id="pills-video-tab" data-toggle="pill" href="#pills-video" role="tab"
                                aria-controls="pills-video" aria-selected="true">Video</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" id="pills-plans-tab" data-toggle="pill" href="#pills-plans" role="tab" aria-controls="pills-plans"
                                aria-selected="false">Floor Plans</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" id="pills-map-tab" data-toggle="pill" href="#pills-map" role="tab" aria-controls="pills-map"
                                aria-selected="false">Ubication</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
                            <iframe src="https://player.vimeo.com/video/73221098" width="100%" height="460" frameborder="0"
                                webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                            </div>
                            <div className="tab-pane fade" id="pills-plans" role="tabpanel" aria-labelledby="pills-plans-tab">
                            <img src="img/plan2.jpg" alt="" className="img-fluid"/>
                            </div>
                            <div className="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834"
                                width="100%" height="460" frameborder="0" style="border:0" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>*/}
                    {/*<div className="col-md-12">
                        <div className="row section-t3">
                            <div className="col-sm-12">
                            <div className="title-box-d">
                                <h3 className="title-d">Contact Agent</h3>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                            <img src="img/agent-4.jpg" alt="" className="img-fluid"/>
                            </div>
                            <div className="col-md-6 col-lg-4">
                            <div className="property-agent">
                                <h4 className="title-agent">Anabella Geller</h4>
                                <p className="color-text-a">
                                Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                dui. Quisque velit nisi,
                                pretium ut lacinia in, elementum id enim.
                                </p>
                                <ul className="list-unstyled">
                                <li className="d-flex justify-content-between">
                                    <strong>Phone:</strong>
                                    <span className="color-text-a">(222) 4568932</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <strong>Mobile:</strong>
                                    <span className="color-text-a">777 287 378 737</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <strong>Email:</strong>
                                    <span className="color-text-a">annabella@example.com</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <strong>Skype:</strong>
                                    <span className="color-text-a">Annabela.ge</span>
                                </li>
                                </ul>
                                <div className="socials-a">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                            <div className="property-contact">
                                <form className="form-a">
                                <div className="row">
                                    <div className="col-md-12 mb-1">
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg form-control-a" id="inputName"
                                        placeholder="Name *" required/>
                                    </div>
                                    </div>
                                    <div className="col-md-12 mb-1">
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-lg form-control-a" id="inputEmail1"
                                        placeholder="Email *" required/>
                                    </div>
                                    </div>
                                    <div className="col-md-12 mb-1">
                                    <div className="form-group">
                                        <textarea id="textMessage" className="form-control" placeholder="Comment *" name="message" cols="45"
                                        rows="8" required></textarea>
                                    </div>
                                    </div>
                                    <div className="col-md-12">
                                    <button type="submit" className="btn btn-a">Send Message</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>*/}
                </div>
                </div>
            </section>
        </>
  
  
    );
}

export default PropertyDetails;