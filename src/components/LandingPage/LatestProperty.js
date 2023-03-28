import React from "react";
import { Link } from "react-router-dom";

class LatestProperty extends React.Component {

    render() {
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
                    <div id="property-carousel" className="owl-carousel owl-theme">
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default LatestProperty