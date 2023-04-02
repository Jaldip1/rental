import React from "react";
import { Link, useNavigate } from "react-router-dom";
const totalProperties = [
    "https://s42814.pcdn.co/wp-content/uploads/2019/12/house_styles_xl-1.jpg",
    "https://www.jamesedition.com/stories/wp-content/uploads/2022/03/mansions_main_fin-1.jpg",
    "https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg"
]

const LatestProperty = () => {
    return(
        <section className="section-property section-t8">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-wrap d-flex justify-content-between">
                            <div className="title-box">
                                <h2 className="title-a">Latest Properties</h2>
                            </div>
                            <div className="title-link">
                                <Link className="nav-link" to="/properties">All Property</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        (totalProperties || []).map(cards => {
                            return (
                                <div className="col-md-4">
                                    <div className="card-box-a card-shadow">
                                        <div className="img-a">
                                            <img src={cards} alt="" className="img-a img-fluid"/>
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-overlay-a-content">
                                                <div className="card-header-a">
                                                    <h2 className="card-title-a">
                                                        <Link to="/property/1134">204 Mount
                                                            <br /> Olive Road Two</Link>
                                                    </h2>
                                                </div>
                                                <div className="card-body-a">
                                                    <div className="price-box d-flex">
                                                        <span className="price-a">rent | $ 1200.00</span>
                                                    </div>
                                                    <Link to="/property/1134" className="link-a">Click here to view property in details
                                                        <span className="ion-ios-arrow-forward"></span>
                                                    </Link>
                                                </div>
                                                <div className="card-footer-a">
                                                    <ul className="card-info d-flex justify-content-around">
                                                        <li>
                                                            <h4 className="card-info-title">Area</h4>
                                                            <span>340m
                                                                <sup>2</sup>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Beds</h4>
                                                            <span>2</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Baths</h4>
                                                            <span>4</span>
                                                        </li>
                                                        <li>
                                                            <h4 className="card-info-title">Garages</h4>
                                                            <span>1</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </section>
    )
}


export default LatestProperty