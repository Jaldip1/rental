import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { verifyEmail, verifyPass } from "../../common/globalutils";
import "../../assets/design/css/register.css"

export const Login = () => {
	const data = {
		email: "",
		password: "",
	}

	const err = {
		email: "",
		password: ""
	}

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
								<h1 className="title-single">Welcome to Estate Agency</h1>
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
			</Form>
		</>
    )
}