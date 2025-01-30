import { object, string } from "yup";
import * as Yup from 'yup';

export const validationSchema = object().shape({
    name: string().trim().lowercase().required("Name is required"),
    lastName: string().lowercase().trim().required("Last name is required"),
    mail: string().trim().lowercase().required("Email is required").email("Invalid email format"),
    password: string().trim().lowercase().required("Password is required").min(6, "Password must be longer than 6 characters"),
    rePassword: string().trim().lowercase().required("Password is required").min(6, "Password must be longer than 6 characters").oneOf([Yup.ref('password')], "Passwords must match")

});