import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { verifyEmail } from "../../common/globalutils";
import "../../assets/design/css/register.css"

export const ResetPassword = () => {
    const data = {
		email: ""
	}

	const err = {
		email: ""
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
			email: verifyEmail((formDetails && formDetails.email) || "")
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
								<h1 className="title-single">Reset Password?</h1>
								{/*<span class="color-text-a">Grid Properties</span>*/}
							</div>
						</div>
					</div>
				</div>
			</section>
            <Form className="login-wrap">
                <Form.Group>
                    <Form.Label>Please enter your email address below and we will send you an email to change your password.</Form.Label>
                </Form.Group>
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

				<Button variant="primary" type="submit" onClick={(e) => onSave(e)}>
					Reset Password
				</Button>
			</Form>
        </>
        
    )
}