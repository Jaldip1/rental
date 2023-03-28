import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/design/css/register.css";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Loader from "../../common/Loader";
import { ApiService } from "../../services/APIServices";
import { verifyEmail, verifyPass, verifyText } from "../../common/globalutils";


export const Register = () => {
	const _apiService = new ApiService();
	const data = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		gender: "",
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
		password: "",
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
			password: verifyPass((formDetails && formDetails.password) || ""),
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
								<h1 className="title-single">Register with us!</h1>
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

					<Form className="login-wrap">
						<Row className="mb-3">
							<Form.Group as={Col} md="6" controlId="firstName">
								<Form.Label>First name <span className="text-danger">*</span></Form.Label>
								<Form.Control
									type="text"
									placeholder="Please provide your first name"
									name="firstName"
									value={(formDetails && formDetails.firstName) || ""}
									onChange={(e) => onChange(e)}
								/>
							</Form.Group>

							<Form.Group as={Col} md="6" controlId="lastName">
								<Form.Label>Last name <span className="text-danger">*</span></Form.Label>
								<Form.Control
									type="text"
									placeholder="Please provide your last name"
									name="lastName"
									value={(formDetails && formDetails.lastName) || ""}
									onChange={(e) => onChange(e)}
								/>
							</Form.Group>
							<Form.Group as={Col} md="6" controlId="firstNameErr">
								<Form.Text className="text-muted">
									{errors && errors.firstName && (
										<small className="text-danger">
											{errors.firstName || ""}
										</small>
									)}
								</Form.Text>
							</Form.Group>
							<Form.Group as={Col} md="6" controlId="lastNameErr">
								<Form.Text className="text-muted">
									{errors && errors.lastName && (
										<small className="text-danger">
											{errors.lastName || ""}
										</small>
									)}
								</Form.Text>
							</Form.Group>

						</Row>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address <span className="text-danger">*</span></Form.Label>
							<Form.Control
								type="email"
								placeholder="Please provide your email address"
								name="email"
								value={(formDetails && formDetails.email) || ""}
								onChange={(e) => onChange(e)}
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
							{errors && errors.email && (
								<small className="text-danger">
									{errors.email || ""}
								</small>
							)}
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password <span className="text-danger">*</span></Form.Label>
							<Form.Control
								type="password"
								placeholder="Please enter password"
								name="password"
								value={(formDetails && formDetails.password) || ""}
								onChange={(e) => onChange(e)}
							/>
							{errors && errors.password && (
								<small className="text-danger">
									{errors.password || ""}
								</small>
							)}
						</Form.Group>
						<Form.Group>
							<Form.Label md="12">Gender <span className="text-danger">*</span></Form.Label>
							<Form.Check
								className="pl-3"
								inline
								label="Male"
								name="gender"
								type="radio"
								id="Male"
								value="Male"
								onChange={(e) => onChange(e)}
							/>
							<Form.Check
								inline
								label="Female"
								name="gender"
								type="radio"
								id="Female"
								value="Female"
								onChange={(e) => onChange(e)}
							/>
							<Form.Check
								inline
								label="Others"
								name="gender"
								type="radio"
								id="Others"
								value="Others"
								onChange={(e) => onChange(e)}
							/>
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

			}
			
		</>
	)
}


export default Register