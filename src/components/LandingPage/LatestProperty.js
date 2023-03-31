import React from "react";
import { Link } from "react-router-dom";
const totalProperties = [
    "https://s42814.pcdn.co/wp-content/uploads/2019/12/house_styles_xl-1.jpg",
    "https://www.jamesedition.com/stories/wp-content/uploads/2022/03/mansions_main_fin-1.jpg",
    "https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg"
]

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