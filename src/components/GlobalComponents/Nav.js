import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { Link, useLocation } from 'react-router-dom';


function SearchBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button type="button" class="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block" onClick={handleShow}>
                <span class="fa fa-search" aria-hidden="true"></span>
            </button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Search Properties</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Keyword</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Please provide your keywords"
                                name="firstName"
                            /*value={(formDetails && formDetails.firstName) || ""}
                            onChange={(e) => onChange(e)}*/
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Bedrooms</Form.Label>
                            <select name="state" className="selctCSS" >
                                <option value="">Pick Bedrooms</option>
                                {["Any", "1", "2", "3"].map((a, i) => (
                                        <option key={i} value={a}>
                                            {a}
                                        </option>
                                ))}
                            </select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Bathrooms</Form.Label>
                            <select name="state" className="selctCSS" >
                                <option value="">Pick Bathroom</option>
                                {["Any", "1", "2", "3"].map((a, i) => (
                                        <option key={i} value={a}>
                                            {a}
                                        </option>
                                ))}
                            </select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Min. Price</Form.Label>
                            <select name="state" className="selctCSS" >
                                <option value="">Pick price</option>
                                {["$1000", "$2000", "$5000"].map((a, i) => (
                                    <option key={i} value={a}>
                                        {a}
                                    </option>
                                ))}
                            </select>
                        </Form.Group>
                        <div className="text-end">
                            <Button variant="success" type="submit">Search</Button>
                        </div>
                        
                        </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}


const Nav = (props) => {
    const location = useLocation();

    const [path, setPath] = useState("")

    useEffect(() => {
        setPath((location && location.pathname) || "")
      }, [location]);

    return (
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div className="container">
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbarDefault"
                        aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <Link className="navbar-brand text-brand" to="/">Estate<span
                        className="color-b">Agency</span></Link>
                    <button type="button" className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo01" aria-expanded="false">
                        <span className="fa fa-search" aria-hidden="true"></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className={`nav-link ${path === "/" ? 'nav-act' : ''}`} to="/">Home</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className={`nav-link ${path === "/properties" ? 'nav-act' : ''}`} to="/properties">Property</Link>
                            </li>
                            {/*<li className="nav-item">
                                <a className="nav-link" href="blog-grid.html">Blog</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Pages
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="property-single.html">Property Single</a>
                                    <a className="dropdown-item" href="blog-single.html">Blog Single</a>
                                    <a className="dropdown-item" href="agents-grid.html">Agents Grid</a>
                                    <a className="dropdown-item" href="agent-single.html">Agent Single</a>
                                </div>
                            </li>*/}
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contact</Link>
                                {/*<a className="nav-link" href='http://localhost:3006'>Contact</a>*/}
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${path === "/login" ? 'nav-act' : ''}`} to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${path === "/register" ? 'nav-act' : ''}`} to="/register">Register</Link>

                            </li>
                        </ul>
                    </div>
                    <SearchBar placement="end" />
                </div>
            </nav>
        )
}

export default Nav