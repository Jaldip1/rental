import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/design/css/register.css";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Loader from "../../common/Loader";
import Badge from 'react-bootstrap/Badge';
import { ApiService } from "../../services/APIServices";
import { verifyEmail, verifyText } from "../../common/globalutils";
import Figure from 'react-bootstrap/Figure';


export const Profile = () => {
	const _apiService = new ApiService();
	const data = {
		firstName: "Adam",
		lastName: "Gilchrist",
		email: "adam@gmail.com",
		gender: "Male",
		street1: "",
		street2: "",
		city: "",
		state: "",
		zip: ""
	}

	const err = {
		firstName: "",
		lastName: "",
		email: "",
		gender: "",
		street1: "",
		street2: "",
		country: "",
		city: "",
		state: "",
		zip: ""
	}

	let errorMessages = {}

	const [formDetails, setFormDetails] = useState(data);
	const [errors, errorsDetails] = useState(err)
	const [isLoading, setIsLoading] = useState(false)
	const [countryDropDown, setCountryDropDown] = useState({})

	useEffect(() => {
		loadCountries();
	}, []);

	const loadCountries = async () => {
		setIsLoading(true)
		const details = await _apiService.getStateCountry() || {}

		if (!details || details.error) {
			setIsLoading(false)
		} else {
			setCountryDropDown(details)
			setIsLoading(false)
		}

	}


	const onChange = (e) => { 
		setFormDetails({
			...formDetails,
			[e.target.name]: (e && e.target && e.target.value) || null
			})
	}

	const errCheck = () => {
		errorMessages = {
			...errorMessages,
			firstName: verifyText("First Name", (formDetails && formDetails.firstName) || "", true),
			lastName: verifyText("Last Name", (formDetails && formDetails.lastName) || "", true),
			email: verifyEmail((formDetails && formDetails.email) || ""),
			gender: verifyText("Gender", (formDetails && formDetails.gender) || "")
		}

		errorsDetails(errorMessages)
	}

	const onSave = (event) => {
		event.preventDefault();

		errCheck()
		
		if (errors) {
			return
		} else {
			console.log(formDetails)
		}
	}

	return (
		<>
			<section className="intro-single">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-lg-8">
							<div className="title-single-box">
								<h1 className="title-single">Profile</h1>
								{/*<span class="color-text-a">Grid Properties</span>*/}
							</div>
						</div>
						{/*<div class="col-md-12 col-lg-4">
                    <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Properties Grid
                            </li>
                        </ol>
                    </nav>
                </div>*/}
					</div>
				</div>
			</section>

			{
				isLoading ? <Loader /> :

				<div class="container">
					<div class="row justify-content-center">
						<div class="col-2">
							<div>
								<div class="d-flex justify-content-center mb-4">
									<Figure>
										<Figure.Image
											width={180}
											height={180}
											alt="180x180"
											src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
										/>
									</Figure>
								</div>
								<div class="d-flex justify-content-center">
									<div class="btn btn-primary btn-rounded">
										<label class="form-label text-white m-1" for="customFile2">Choose file</label>
										<input type="file" class="form-control d-none" id="customFile2" />
									</div>
								</div>
							</div>
							
						</div>
						<div class="col-8">
							<Form>
								<Row className="mb-3">
									<Form.Group as={Col} md="6" controlId="firstName">
										<Form.Label>First name</Form.Label>
										<Form.Control
											type="text"
											name="firstName"
											value={(formDetails && formDetails.firstName) || ""}
											disabled
										/>
									</Form.Group>

									<Form.Group as={Col} md="6" controlId="lastName">
										<Form.Label>Last name</Form.Label>
										<Form.Control
											type="text"
											name="lastName"
											value={(formDetails && formDetails.lastName) || ""}
											disabled
										/>
									</Form.Group>

								</Row>
								<Row className="mb-3">
									<Form.Group as={Col} md="8" controlId="email">
										<Form.Label>Email address <span className="text-danger">*</span></Form.Label>
										<Form.Control
											type="email"
											placeholder="Please provide your email address"
											name="email"
											value={(formDetails && formDetails.email) || ""}
											disabled
										/>

										{errors && errors.email && (
											<small className="text-danger">
												{errors.email || ""}
											</small>
										)}
									</Form.Group>
									<Form.Group as={Col} md="4" controlId="Badefe">
										<Badge className="fs-6" pill bg="info">
											Change Email Address?
										</Badge>
									</Form.Group>
								</Row>
				
								<Form.Group>
									<Form.Label md="12">{`Gender: ${formDetails && formDetails.gender}`}</Form.Label>
								</Form.Group>
								<Form.Group>
									{errors && errors.gender && (
										<small className="text-danger">
											{errors.gender || ""}
										</small>
									)}
								</Form.Group>

								<Form.Group className="mb-3" controlId="streetAddress1">
									<Form.Label>Street 1</Form.Label>
									<Form.Control type="text"
										placeholder="Please enter address"
										name="street1"
										value={(formDetails && formDetails.street1) || ""}
										onChange={(e) => onChange(e)}
									/>
								</Form.Group>


								<Row className="mb-3">
									<Form.Group as={Col} md="8" controlId="streetAddress2">
										<Form.Label>Street 2</Form.Label>
										<Form.Control
											type="text"
											placeholder="Please enter address"
											name="street2"
											value={(formDetails && formDetails.street2) || ""}
											onChange={(e) => onChange(e)}
										/>
									</Form.Group>
									<Form.Group as={Col} md="4" controlId="Country">
										<Form.Label>Country</Form.Label>
										<select name="country" className="selctCSS" onChange={(e) => onChange(e)}>
											<option value="">Pick Country</option>
											{countryDropDown && Object.keys(countryDropDown)
												? Object.keys(countryDropDown).map((name, i) => (
													<option key={i} value={name}>
														{name}
													</option>
												))
												: null}
										</select>
									</Form.Group>
								</Row>


								<Row className="mb-3">
									<Form.Group as={Col} md="4" controlId="state">
										<Form.Label>State</Form.Label>
										<select name="state" className="selctCSS" onChange={(e) => onChange(e)}>
											<option value="">Pick State</option>
											{countryDropDown && formDetails.country
												? countryDropDown[formDetails.country].map((a, i) => (
													<option key={i} value={a.name}>
														{a.name}
													</option>
												))
												: null}
										</select>
									</Form.Group>
									<Form.Group as={Col} md="4" controlId="city">
										<Form.Label>City</Form.Label>
										<Form.Control
											type="text"
											placeholder="City"
											name="city"
											value={(formDetails && formDetails.city) || ""}
											onChange={(e) => onChange(e)}
										/>
									</Form.Group>
									
									<Form.Group as={Col} md="4" controlId="zip">
										<Form.Label>Zip Code</Form.Label>
										<Form.Control
											type="text"
											placeholder="Zip code"
											name="zip"
											value={(formDetails && formDetails.zip) || ""}
											onChange={(e) => onChange(e)}
										/>
									</Form.Group>
								</Row>

								<Button variant="primary" type="submit" onClick={(e) => onSave(e)}>
									Register
								</Button>
							</Form>
						</div>
					</div>
				</div>

			}
			
		</>
	)
}


export default Profile