import React from 'react'

const handleLogin = ({email, password, setLoading, setError}) => {
  setLoading(true)
  setError(true)
  console.log("API Call Successful :)")
  console.log("Email: ", email, " and Password: ", password)
  setLoading(false)
}

export default handleLogin
