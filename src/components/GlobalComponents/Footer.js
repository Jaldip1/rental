import React from "react";
import { Link } from "react-router-dom";
class Footer extends React.Component {

    render() {
        return(
            <>
                <section className="section-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="widget-a">
                                    <div className="w-header-a">
                                        <h3 className="w-title-a text-brand">TrustAccommodation</h3>
                                    </div>
                                    <div className="w-body-a">
                                        <p className="w-text-a color-text-a">
                                            {/*<h1>{process.env.JWTSECRET}</h1>*/}
                                            Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat duis
                                            sed aute irure.
                                        </p>
                                    </div>
                                    <div className="w-footer-a">
                                        <ul className="list-unstyled">
                                            {/*<li className="color-a"><span className="color-text-a">Phone .</span> +1 (123) 123 3333 </li>*/}
                                            <li className="color-a">
                                                <span className="color-text-a">Email </span> trust.accommodate@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 section-md-t3">
                                <div className="widget-a">
                                    <div className="w-header-a">
                                        <h3 className="w-title-a text-brand">The Company</h3>
                                    </div>
                                    <div className="w-body-a">
                                        <div className="w-body-a">
                                            <ul className="list-unstyled">
                                                <li className="item-list-a">
                                                    <i className="fa fa-angle-right"></i> Site Map
                                                </li>
                                                <li className="item-list-a">
                                                    <i className="fa fa-angle-right"></i> About
                                                </li>
                                                <li className="item-list-a">
                                                    <i className="fa fa-angle-right"></i> <Link to="/login">Join Us</Link>
                                                </li>
                                                <li className="item-list-a">
                                                    <i className="fa fa-angle-right"></i> Privacy Policy
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="col-sm-12 col-md-4 section-md-t3">
                                <div className="widget-a">
                                    <div className="w-header-a">
                                        <h3 className="w-title-a text-brand">International sites</h3>
                                    </div>
                                    <div className="w-body-a">
                                        <ul className="list-unstyled">
                                            <li className="item-list-a">
                                                <i className="fa fa-angle-right"></i> <a href="#">Venezuela</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="fa fa-angle-right"></i> <a href="#">China</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="fa fa-angle-right"></i> <a href="#">Hong Kong</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="fa fa-angle-right"></i> <a href="#">Argentina</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="fa fa-angle-right"></i> <a href="#">Singapore</a>
                                            </li>
                                            <li className="item-list-a">
                                                <i className="fa fa-angle-right"></i> <a href="#">Philippines</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <nav className="nav-footer">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">About</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">Property</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                                {/*<div className="socials-a">
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
                                </div>*/}
                                <div className="copyright-footer">
                                    <p className="copyright color-text-a">
                                        &copy; Copyright &nbsp;
                                        <span className="color-a">TrustAccommodation</span> All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer