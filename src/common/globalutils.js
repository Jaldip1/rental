import { regexEmail, regexPass } from "./const";

export const verifyText = (name, value, isReq) => {
	debugger
	let err = ""
	if (!value) {
		err = `Please enter ${name}`;
	} else if (isReq && (value && value.length) > 20) {
		err = `${name} cannot exceed 20 characters`;
	}
	return err;
}

export const verifyEmail = (value) => {
	let err = ""
	if (!value) {
		err = "Please enter a email";
	} else if (!regexEmail.test(value)) {
		err = "Please enter a valid email";
	}
	return err;
}

export const verifyPass = (value) => {
	let err = ""
	if (!value) {
		err = "Please enter a password";
	} else if (!regexPass.test(value)) {
		err = "Please enter a minimum of eight characters, including letter, number, and special character.";
	}
	return err;
}