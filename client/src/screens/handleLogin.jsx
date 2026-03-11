import React, { useEffect } from 'react'

const handleLogin = ({email, password, setLoading, setError, setErrorMessage}) => {
  // useEffect(()=>{
  //   setInterval(() => {
  //     setLoading(false)
  //   }, 3000);
  // },[])
  setLoading(true)
  setErrorMessage("Your network connection is not stable. Please check your internet. Thank you!")
  setError(true)
  console.log("API Call Successful :)")
  console.log("Email: ", email, " and Password: ", password)
}

export default handleLogin
