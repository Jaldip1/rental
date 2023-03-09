import React from "react";
import "../../assets/design/ionicons/css/ionicons.css"
import "../../assets/design/animate/animate.css"
import "../../assets/design/font-awesome/css/font-awesome.css"
import "../../assets/design/bootstrap/css/bootstrap.css"
import "../../assets/design/owlcarousel/assets/owl.carousel.css"
import "../../assets/design/css/style.css"
import Nav from "./Nav";
import Services from "./Services";
import LatestProperty from "./LatestProperty";
import Agents from "./Agents";
import News from "./News";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { Slider } from "./Carousel";
import { ApiService } from "../../services/APIServices";
import Loader from "../../common/Loader";

class Landing extends React.Component {
    _apiService = new ApiService();
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        this.getDetails();
    }

    getDetails = async () => {
        this.setState({
            isLoading: true
        })
        const details = await this._apiService.getFruitDetail()
       
        if (!details || details.error) {
            this.setState({
                isLoading: false
            })
        } else {
            console.log("details", details)
            this.setState({
                isLoading: false
            })
        }
        
    }

    render() {
        const { isLoading } = this.state
        return(
            <>
                {
                    isLoading ?
                        <Loader /> :
                        <>
                            <Nav />

                            {/* Carousel Start */}
                            <Slider />
                            {/* Carousel end */}

                            {/* Services Start */}
                            <Services />
                            {/* Services end */}

                            {/* Property Start */}
                            <LatestProperty />
                            {/* Property End */}

                            {/* Agents Start */}
                            <Agents />
                            {/* Agents End */}

                            {/* News Start */}
                            <News />
                            {/* News End */}

                            {/* Testimonials Start */}
                            <Testimonials />
                            {/* Testimonials End */}

                            {/* footer Start */}
                            <Footer />
                            {/* Footer End */}
                        </>
                }
                
            </>
        )
    }
}

export default Landing