import { object, string } from "yup";
import * as Yup from 'yup';

export const validationSchemaForSignUp = object().shape({
    name: string().trim().lowercase().required("Name is required").matches(/^[^\d]*$/, ' Name doesnt include number'),
    lastName: string().lowercase().trim().required("Last name is required").matches(/^[^\d]*$/, ' Name doesnt include number'),
    email: string().trim().lowercase().required("Email is required").email("Invalid email format"),
    password: string().trim().lowercase().required("Password is required").min(6, "Password must be longer than 6 characters"),
    rePassword: string().trim().lowercase().required("Password is required").min(6, "Password must be longer than 6 characters").oneOf([Yup.ref('password')], "Passwords must match")

});

export const validationSchemaForLogin = object().shape({
    email: string().trim().lowercase().required("Email is required").email("Invalid email format"),
    password: string().trim().lowercase().required("Password is required").min(6, "Password must be longer than 6 characters"),

})

export const validationSchemaForResetPassword = object().shape({
    email: string().trim().lowercase().required("Email is required").email("Invalid email format")
})

export const validationSchemaForAccountInfo = object().shape({
    birthday: string().trim().required("Birthday is required"),
    phoneNumber: string().trim().required("Phone number is required").matches(/^[0-9]*$/, ' Phone number must include number'),
    email: string().trim().lowercase().required("Email is required").email("Invalid email format")
})