


// import React, { useState, useEffect } from "react";
// import basestyle from "./Base.module.css";
// import loginstyle from "./ProviderLogin.module.css";
// import axios from "axios";
// import { useNavigate, NavLink } from "react-router-dom";
// import Cookies from "js-cookie";


// const Login = ({ setUserState }) => {
//   const navigate = useNavigate();
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [user, setUserDetails] = useState({
//     email: "",
//     password: "",
//   });


//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({
//       ...user,
//       [name]: value,
//     });
//   };

//   const validateForm = (values) => {
//     const error = {};
//     const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.email) {
//       error.email = "Email is required";
//     } else if (!regex.test(values.email)) {
//       error.email = "Please enter a valid email address";
//     }
//     if (!values.password) {
//       error.password = "Password is required";
//     }
//     return error;
//   };


//   const loginHandler = (e) => {
//     e.preventDefault();
//     setFormErrors(validateForm(user));
//     setIsSubmit(true);
//     // if (!formErrors) {

//     // }
//   };

//   useEffect(() => {
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       axios.post("https://localhost:44354/api/ProviderLogin", user)
//       .then(res=>{
//         if(res.data['emailstatus']==true && res.data['passwordstatus']==true){
//           // Cookies.set('email',user.email);
//           navigate('/PDashboard')} 
//         else {
//           alert('Invalid credentials...')}
//       });
//     }
//   }, [formErrors]);


//   return (
//     <div className={loginstyle.login}>
//       <form>
//         <h1>Login</h1>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Enter your Email ID"
//           onChange={changeHandler}
//           value={user.email}
//         />
//         <p className={basestyle.error}>{formErrors.email}</p>
//         <input
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Enter your Password"
//           onChange={changeHandler}
//           value={user.password}
//         />
//         <p className={basestyle.error}>{formErrors.password}</p>
//         <button className={basestyle.button_common} onClick={loginHandler}>
//           Login
//         </button>
//       </form>
//       <NavLink to="/providersignup">Not yet registered? Register Now</NavLink>
//     </div>
//   );
// };
// export default Login;

















import React, { useState, useEffect } from "react";
import basestyle from "./Base.module.css";
import loginstyle from "./ProviderLogin.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import Cookies from "js-cookie";


const Login = ({ setUserState }) => {
 
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
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
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };


  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    
    axios.post('https://localhost:44354/api/JobProviderSignup', user)
    .then(res => {
        Cookies.set("JobProviderID", res.data.jobProviderID);
    })
axios.post('https://localhost:44354/api/ProviderLogin', user)
    .then(res => {
        if (res.data["emailstatus"] === true) {
            if (res.data["passwordstatus"] === true) {
                Cookies.set("email", user.email);
                Cookies.set("password", user.password);
               Cookies.set("admin","admin");
                    alert("Job Provider Logged in successfully..");
                    navigate('/PDashboard');
                    window.location.reload();
                }
            
            else {
                alert("Invalid Credentials");
            }
        }
        else {
            alert("User not availble...");
            navigate('/');
        }
        console.log(res);
    })
    .catch(err => console.log(err));
}
  //   // if (!formErrors) {

  //   // }
  // };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     axios.post("https://localhost:44354/api/ProviderLogin", user)
  //     .then(res=>{
  //       if(res.data['emailstatus']==true && res.data['passwordstatus']==true){
  //         // Cookies.set('email',user.email);
  //         navigate('/PDashboard')} 
  //       else {
  //         alert('Invalid credentials...')}
  //     });
  //   }
  // }, [formErrors]);


  return (
    <div className={loginstyle.login}>
      <form>
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email ID"
          onChange={changeHandler}
          value={user.email}
        />
        <p className={basestyle.error}>{formErrors.email}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}>{formErrors.password}</p>
        <button className={basestyle.button_common} onClick={loginHandler}>
          Login
        </button>
      </form>
      <NavLink to="/providersignup">Not yet registered? Register Now</NavLink>
    </div>
  );
};
export default Login;
