import React, { useEffect, useState } from "react";
import basestyle from "./Base.module.css";
import registerstyle from "./ProfileRegistration.module.css";
import axios from "axios";
// import { useParams } from "react-router-dom";

import { useNavigate, NavLink, useParams } from "react-router-dom";
import Cookies from "js-cookie";
const Register = () => {
  const navigate = useNavigate();
 const {id} = useParams;
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const [isProfile, setIsProfile] = useState([""]);


const[jobseekerid,setjobseekerid]=useState();
const[jobseekerfirstname,setjobseekerfirstname]=useState();
const[jobseekerlastname,setjobseekerlastname]=useState();
const[jobseekeremailid,setjobseekeremailid]=useState();
const[jobseekerqualification,setjobseekerqualification]=useState();
const[jobseekermobilenumber,setjobseekermobilenumber]=useState();



  useEffect(()=>{
    axios.post('https://localhost:44354/api/Login/FindEmail',{
      email:Cookies.get('email')
  })
  .then(res => {
   console.log(res.data);
   setjobseekerid(res.data.jobSeekerID);
   setUserDetails(res.data);
})

.catch(err => console.log(err));
  },[])

  const [user, setUserDetails] = useState({
    jobSeekerRegistrationID: 0,
    firstName: "",
    lastName: "",
    emailId:Cookies.get("email"),
    qualification: "",
    experience: "",
    tenthPercentage: "",
    twelvethPercentage: "",
    cgpa: "",
    phoneNumber: "",
    skillSet: "",
    location: "",
    resume:"",
    jobSeekerSignUpModel:jobseekerid,
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
    // if (!values.firstName) {
    //   error.firstName = "Name is required";
    // }
    // if (!values.lastName) {
    //   error.lastName = "Name is required";
    // }
   
    // if (!values.emailId) {
    //   error.emailId = "Email ID is required";
    // } else if (!regex.test(values.emailId)) {
    //   error.emailId = "This is not a valid email format!";
    // }

    // if (!values.qualification) {
    //     error.qualification = "Qualification is required";
    //   }


    
      if (!values.experience) {
        error.experience = "Experience is required";
      }
      if (!values.tenthPercentage) {
        error.tenthPercentage = "Tenth Percentage is required";
      }
      if (!values.twelvethPercentage) {
        error.twelvethPercentage = "Twelveth Percentage is required";
      }

      // if (!values.cgpa) {
      //   error.cgpa = "CGPA is required";
      // } else if (values.cgpa < 2) {
      //   error.cgpa = "CGPA must be 10 ";
      // } else if (values.cgpa > 2) {
      //   error.cgpa = "CGPA cannot exceed more than 10 ";
      // }

    // if (!values.phoneNumber) {
    //   error.phoneNumber = "Phone Number is required";
    // } else if (values.phoneNumber.length < 10) {
    //   error.phoneNumber = "Phonenumber must be 10 characters";
    // } else if (values.phoneNumber.length > 10) {
    //   error.phoneNumber = "Phone Number cannot exceed more than 10 characters";
    // }
    
    if (!values.skillSet) {
      error.skillSet = "SkillSet is required";
    }

    if (!values.location) {
      error.location = "Location is required";
    }
  
    return error;
  };
  const ProfileHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    if (!formErrors) {
      setIsSubmit(true);
    }
  };

//   const handleImages=(e)=>{
//     const file=e.target.files[0]
//     if(file){
//         const reader=new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload=()=>{
//             const base64data= reader.result;
//             const base64array=base64data.toString().split(",");
//             setValues({... values,productImage: base64array[1]})
//         }
//     }
// }

const Email=Cookies.get("email");
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      axios.post("https://localhost:44354/api/Profile" ,user).then((res) => {
        alert(res.data.message);
        console.log(res.data);
        navigate("/SDashboard", { replace: true });
      });
    }
  }, [formErrors]);
 
  
  return (
    <>
    {/* <div className={registerstyle.head}>
      <h1></h1>
    </div> */}

      <div className={registerstyle.register}>
        <form >

        <div><h1 className={registerstyle.line}>Create your Profile</h1></div>
  
          <input 
            type="text"
            name="firstName"
            id="firstname"
            placeholder="Enter your Name"
            onChange={changeHandler}
            value={user.firstName}
          />

         
          <input className={registerstyle.input1}
            type="text"
            name="lastName"
            id="lname"
            placeholder="Enter Last Name"
            onChange={changeHandler}
            value={user.lastName}
          />
          <p className={basestyle.error}>{formErrors.lastName}</p>
         

          <input
            type="email"
            name="emailId"
            id="email"
            placeholder="Enter your Email ID"
            onChange={changeHandler}
            disabled
            value={user.emailId}
          />
          <p className={basestyle.error}>{formErrors.emailId}</p>
          

          <input
            type="text"
            name="qualification"
            id="phoneNumber"
            placeholder="Enter your Qualification"
            onChange={changeHandler}
            value={user.qualification}
          />
          <p className={basestyle.error}>{formErrors.qualification}</p>
          

          <input
            type="text"
            name="experience"
            id="qualification"
            placeholder="Enter your Experience"
            onChange={changeHandler}
            value={user.experience}
          />
          <p className={basestyle.error}>{formErrors.experience}</p>
          

          <input
            type="number"
            name="tenthPercentage"
            id="passwor"
            placeholder="Enter your 10th Percentage "
            onChange={changeHandler}
            value={user.tenthPercentage}
          />
          <p className={basestyle.error}>{formErrors.tenthPercentage}</p>
         

          <input
            type="number"
            name="twelvethPercentage"
            id="passwo"
            placeholder="Enter your 12th Percentage"
            onChange={changeHandler}
            value={user.twelvethPercentage}
          />
          <p className={basestyle.error}>{formErrors.twelvethPercentage}</p>
       
          <input
            type="number"
            name="cgpa"
            id="passw"
            placeholder="Enter your CGPA"
            onChange={changeHandler}
            value={user.cgpa}
          />
          <p className={basestyle.error}>{formErrors.cgpa}</p> 
         
          <input
            type="number"
            name="phoneNumber"
            id="pass"
            placeholder="Enter your Phone Number"
            onChange={changeHandler}
            value={user.phoneNumber}
          />
          
        <p className={basestyle.error}>{formErrors.phoneNumber}</p>
       
          <input
            type="text"
            name="skillSet"
            id="pas"
            placeholder="Enter your Skills"
            onChange={changeHandler}
            value={user.skillSet}
          />
          <p className={basestyle.error}>{formErrors.skillSet}</p>
        
          <input
            type="text"
            name="location"
            id="pa"
            placeholder="Enter your Location"
            onChange={changeHandler}
            value={user.location}
          />
          <p className={basestyle.error}>{formErrors.location}</p>

          <input
            type="text"
            name="resume"
            id="pa"
            placeholder="Whether you submitted the resume or not"
            onChange={changeHandler}
            value={user.resume}
          />
          <p className={basestyle.error}>{formErrors.resume}</p>
          
          {/* <input
            type="id"
            name="jobSeekerID"
            id="confirmPassword"
            placeholder="Enter your id"
            onChange={changeHandler}
            value={user.jobSeekerID}
          />
          <p className={basestyle.error}>{formErrors.jobSeekerID}</p>
      */}
          <button className={basestyle.button_common} onClick={ProfileHandler}>
            Submit
          </button>
        </form>
        {/* <NavLink to="/SDashboard">Already registered? Login</NavLink> */}
      </div>
    </>
  );
};
export default Register;
