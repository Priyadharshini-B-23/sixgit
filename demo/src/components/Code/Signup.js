
import React, { useEffect, useState } from "react";
import basestyle from "./Base.module.css";
import registerstyle from "./Signup.module.css";
import axios from "axios";
import Cookies from "js-cookie";

import { useNavigate, NavLink } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    jobSeekerEmailId:"",
    jobSeekerPhoneNumber: "",
    jobSeekerQualification: "",
    jobSeekerPassword: "",
    jobSeekerConfirmPassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      error.firstName = "Name is required";
    }
    if (!values.lastName) {
      error.lastName = "Name is required";
    }
    // if (!values.lname) {
    //   error.lname = "Last Name is required";
    // }
    if (!values.jobSeekerEmailId) {
      error.jobSeekerEmailId = "Email ID is required";
    } else if (!regex.test(values.jobSeekerEmailId)) {
      error.jobSeekerEmailId = "This is not a valid email format!";
    }

    if (!values.jobSeekerPhoneNumber) {
      error.jobSeekerPhoneNumber = "Phone Number is required";
    } else if (values.jobSeekerPhoneNumber.length < 10) {
      error.jobSeekerPhoneNumber = "Phonenumber must be 10 characters";
    } else if (values.jobSeekerPhoneNumber.length > 10) {
      error.jobSeekerPhoneNumber = "Phone Number cannot exceed more than 10 characters";
    }

    if (!values.jobSeekerQualification) {
      error.jobSeekerQualification = "Qualification is required";
    }

    if (!values.jobSeekerPassword) {
      error.jobSeekerPassword = "Password is required";
    } else if (values.jobSeekerPassword.length < 4) {
      error.jobSeekerPassword = "Password must be more than 4 characters";
    } else if (values.jobSeekerPassword.length > 14) {
      error.jobSeekerPassword = "Password cannot exceed more than 14 characters";
    }

    if (!values.jobSeekerConfirmPassword) {
      error.jobSeekerConfirmPassword = "Confirm Password is required";
    } else if (values.jobSeekerConfirmPassword !== values.jobSeekerConfirmPassword) {
      error.jobSeekerConfirmPassword = "Confirm password and password should be same";
    }
    return error;
  };
  const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    if (!formErrors) {
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("https://localhost:44354/api/JobSeekerSignup", user).then((res) => {
        alert(res.data);
        console.log(res.data);
        navigate("/seekerlogin", { replace: true });
      })
      .catch(err=>{
        if(err.response.status===500){
          alert("Already user registered")
        }
      }) ;
    }
  }, [formErrors]);
//   const adduser = async () => {
//   try {
//     const response = await axios.post('https://localhost:44354/api/JobSeekerSignup', user);
//     console.log(response);
//     alert(`The survey is successfully Created. Your survey id is ${response.data.jobSeekerID}`);
   
//     // Store the newly generated survey ID in cookies
//     Cookies.set('jobSeekerID', response.data.jobSeekerID);
//     Cookies.set('firstName', response.data.firstName);
//     Cookies.set('lastName', response.data.lastName);
//     Cookies.set('jobSeekerEmailId', response.data.jobSeekerEmailId);
//     Cookies.set('jobSeekerPhoneNumber', response.data.jobSeekerPhoneNumber);
//     Cookies.set('jobSeekerQualification', response.data.jobSeekerQualification);
//     navigate('/seekerlogin');
// } catch (error) {
//     console.error(error);
// }
// };


  return (
    <>
    {/* <div className={registerstyle.head}>
      <h2>Profile</h2>
    </div> */}
    <div className={registerstyle.container}>
      <div className={registerstyle.register}>
        <form>
          <h1 className={registerstyle.head} >Create your account</h1>
          <input
            type="text"
            name="firstName"
            id="firstname"
            placeholder="Enter your Name"
            onChange={changeHandler}
            value={user.firstName}
          />
          <p className={basestyle.error}>{formErrors.firstName}</p>
          <input
            type="text"
            name="lastName"
            id="lname"
            placeholder="Last Name"
            onChange={changeHandler}
            value={user.lastName}
          />
          <p className={basestyle.error}>{formErrors.lastName}</p>
          <input
            type="email"
            name="jobSeekerEmailId"
            id="email"
            placeholder="Enter your Email ID"
            onChange={changeHandler}
            value={user.jobSeekerEmailId}
          />
          <p className={basestyle.error}>{formErrors.jobSeekerEmailId}</p>
          <input
            type="number"
            name="jobSeekerPhoneNumber"
            id="phoneNumber"
            placeholder="Enter your Phone Number"
            onChange={changeHandler}
            value={user.jobSeekerPhoneNumber}
          />
          <p className={basestyle.error}>{formErrors.jobSeekerPhoneNumber}</p>
          <input
            type="text"
            name="jobSeekerQualification"
            id="qualification"
            placeholder="Enter your Qualifiction"
            onChange={changeHandler}
            value={user.jobSeekerQualification}
          />
          <p className={basestyle.error}>{formErrors.jobSeekerQualification}</p>
          <input
            type="password"
            name="jobSeekerPassword"
            id="password"
            placeholder="Enter your Password"
            onChange={changeHandler}
            value={user.jobSeekerPassword}
          />
          <p className={basestyle.error}>{formErrors.jobSeekerPassword}</p>
          
          <input
            type="password"
            name="jobSeekerConfirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={user.jobSeekerConfirmPassword}
          />
          <p className={basestyle.error}>{formErrors.jobSeekerConfirmPassword}</p>

          <button className={basestyle.button_common} onClick={signupHandler}>
            Register
          </button>
        </form>
        <NavLink to="/seekerlogin">Already registered? Login</NavLink>
      </div>
      </div>
    </>
  );
  }
export default Register;
