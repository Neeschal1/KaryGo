import React from 'react'

const handleLogin = ({email, password, setLoading, setError, setErrorMessage}) => {
  setLoading(true)
  setErrorMessage("Your network connection is not stable. Please check your internet. Thank you!")
  setError(true)
  console.log("API Call Successful :)")
  console.log("Email: ", email, " and Password: ", password)
  setLoading(false)
}

export default handleLogin
