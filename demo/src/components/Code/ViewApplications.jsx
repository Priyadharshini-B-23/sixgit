

//Dashboard for getting the values 

import Cookies from 'js-cookie';

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import SearchForm from './SearchForm';

 function ViewApplications() {



  const [values, setValues] = useState({})

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get('https://localhost:44354/api/ApplicationDetails')

      .then(res => {

        setData(res.data);

      })

      .catch(err => console.log(err));

  }, [])



  const cookieCheck = () => {

    var email = Cookies.get("email");

    // var password = Cookies.get("password"); 

    setValues.email = email;

    // setValues.password = password; 

    console.log(email);

    // window.reload(); 

  }



  const logOutFromDashBoard = (event) => {

    Cookies.remove("email");

    Cookies.remove("password");

    Cookies.remove("UserID");

    navigate('/home');

    window.location.reload();

  };

  const handleDelete = (id) => {

    const confirm = window.confirm("Would you like to delete?");

    if (confirm) {

      axios.delete('http://localhost:3001/users/' + id)

        .then(res => {

          window.location.reload();

        }).catch(err => console.log(err));

    }

  };



  return (

    <>

      {/* <div className="container-fluid" onLoadStart={cookieCheck}> 

                <div className="row"> 

                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse show" > 

                        <div className="position-sticky pt-3"> 

                            <ul className="nav flex-column"> 

                                <li className="nav-item"> 

                                    <a className="nav-link active" aria-current="page" href="dashboard"> 

                                        Dashboard 

                                    </a> 

                                </li> 

                                <li className="nav-item"> 

                                    <a className="nav-link" href="/policy"> 

                                       

                                    </a> 

                                </li> 

                                <li className="nav-item"> 

                                    <a className="nav-link" href="/add-on-policy"> 

                                        Add-On Policy 

                                    </a> 

                                </li> 

                            </ul> 

                        </div> 

                    </nav>  */}



      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>

        <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">

          <h1 className="h2">Find your perfect job</h1>
          
   
          {/* <div className="btn-toolbar mb-2 mb-md-0"> 

  

                                <button type="button" className="btn btn-sm btn-outline-danger mr-3" onClick={logOutFromDashBoard}>Logout</button> 

                            </div>  */}
        </div>

        <h1>List of Applications</h1>

        <div>

          {/* <div className="d-flex justify-content-end "> 

                                <Link to="/postjob" className="btn btn-sm btn-success">Add +</Link> 

                            </div>  */}

          <table className="table table-striped">

            <thead>

              <tr>

                <th>ID</th>

                <th>Job ID</th>

                <th>Job Seeker Name</th>

                <th>Preferred Location</th>

                <th>Job Seeker ID</th>

              </tr>

            </thead>

            <tbody>

              {

                data.map((d, i) => (

                  <tr key={i}>

                    <td>{d.id}</td>

                    <td>{d.jobID}</td>

                    <td>{d.jobProviderName}</td>

                    <td>{d.preferredLocation}</td>

                    <td>{d.jobSeekerID}</td>

                    <td>

                      {/* <Link to={`/read/${d.id}`} className="btn btn-info m-1">Read</Link> */}

                      <Link to={`/email`} className="btn btn-success m-1">Hire</Link>

                      <Link to={`/pdfdownload`} className="btn btn-primary m-1">Resume</Link>
              
                      <Link to={`/delete/:id`} className="btn btn-danger m-1">Delete</Link>

                      {/* <button onClick={e => handleDelete(d.vehicleId)} className="btn btn-danger m-1">Apply</button>  */}

                    </td>

                  </tr>

                ))

              }

            </tbody>

          </table>

        </div>



      </main>
      {/* 
                </div> 

            </div>  */}

    </>

  );

}
export default ViewApplications;