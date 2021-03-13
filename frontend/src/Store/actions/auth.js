import { USER_LOGIN, SIGNOUT, SIGNUP_REGISTRATION, SIGNUP_STEP } from '../actionTypes'
import { baseURL } from '../constants'

export const authAction = (token) => {
    console.log('action')
    return {
      type: USER_LOGIN,
      payload: token,
    };
};
  
export const signIn = (data) => async (dispatch, getState) => {
    console.log('signin')
    const headers = new Headers({
      "Content-Type": "application/json"
    })

    const body = JSON.stringify(data)
    const config = {
      method: "POST",
      headers: headers,
      body: body,
    }
    const response = await fetch(`${baseURL}/auth/token`, config)
    const json = await response.json()
    console.log(json.access)
    if (json.access) {
       localStorage.setItem("currentUser", JSON.stringify(json))
       dispatch(authAction( json.access))
    } else {
       dispatch(authAction("", "", false))
    }
    return json
} 


export const signoutAction = () => {
   return {
       type: SIGNOUT,
   }
}


export const signupStepAction = (step) => {
    return {
       type: SIGNUP_STEP,
       step: step,
    }  
}

export const signupRegistrationAction = (registrationData) => {
    return {
       type: SIGNUP_REGISTRATION,
       email: registrationData.email,
    }
}

export const signupRegistration = (data) => async (dispatch, getState) => {
    const headers = new Headers({ 
       "Content-Type": "application/json" 
  })
    const body = JSON.stringify(data)
    const config = {
       method: "POST",
       headers: headers,
       body: body,
  }
    const response = await fetch(`${baseURL}/registration/`, config)
    if (!response.ok) {
       const json = await response.json()
       return json
  }
    dispatch(signupRegistrationAction(data))

    return null
}


export const signupValidation = (data) => async (dispatch, getState) => {
    const headers = new Headers({
        "Content-Type": "application/json"
    })
    const body = JSON.stringify(data)
    const config = {
        method: "PUT",
        headers: headers,
        body: body,
    }
    const response = await fetch(`${baseURL}/registration/validation/`, config)

    if (!response.ok) {
        const json = await response.json()
        return json
    }
    return null
}