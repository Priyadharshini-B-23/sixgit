import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

function UserRouting() {
const usercheck = Cookies.get("user")
  return (
   usercheck == "user"?<>
   <Outlet/>
   </>:<>
   <Navigate to='/'/>
   </>
  )
}

export default UserRouting