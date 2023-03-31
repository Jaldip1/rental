import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import { verifyEmail, verifyPass } from "../../common/globalutils";
import { ApiService } from "../../services/APIServices";
import "../../assets/design/css/register.css"

export const Login = () => {
	const _apiService = new ApiService();
	const data = {
		email: "admin",
		password: "admin",
	}

	const err = {}

	let errorMessages = {}

	const [formDetails, setFormDetails] = useState(data);
	const [errors, errorsDetails] = useState(err)

	const onChange = (e) => {
		setFormDetails({
			...formDetails,
			[e.target.name]: (e && e.target && e.target.value) || null
		})
	}

	const errCheck = () => {
		errorMessages = {
			...errorMessages,
			email: verifyEmail((formDetails && formDetails.email) || ""),
			password: verifyPass((formDetails && formDetails.password) || ""),
		}

		errorsDetails(errorMessages)
	}

	const onSave = async (event) => {
		event.preventDefault();

		
			const details = await _apiService.postLogin(formDetails) || {}
			if (!details || details.error) {

			} else {

			}
	}

    return (
		<>
			
			<section className="intro-single">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-lg-8">
							<div className="title-single-box">
								<h1 className="title-single">Welcome to Trust Accommodation</h1>
								{/*<span class="color-text-a">Grid Properties</span>*/}
							</div>
						</div>
						<Link to="/register" className="col-md-12 col-lg-4 breadcrumb-box justify-content-lg-end">
							<Badge className="fs-5" pill bg="info">
                                    New User, Register?
                                </Badge>
						</Link>
					</div>
				</div>
			</section>



			<Form className="login-wrap">
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address <span className="text-danger">*</span></Form.Label>
					<Form.Control
						type="email"
						placeholder="Please enter your email address"
						name="email"
						value={(formDetails && formDetails.email) || ""}
						onChange={(e) => onChange(e)}
					/>
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
						placeholder="Please enter your password"
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

				<Button variant="primary" type="submit" onClick={(e) => onSave(e)}>
					Log In
				</Button>
				<Form.Group className="mt-3">
				<Link to="/resetPassword">Forgot Password?</Link>
				</Form.Group>
				
			</Form>
		</>
    )
}