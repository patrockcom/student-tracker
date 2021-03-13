import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, MainStyled, FormStyled, TitleStyled, InputStyled, ButtonStyled, SignupFormTwoStyled, SignupFormThreeStyled, InputSmallStyled} from './style.js';
import { useHistory } from 'react-router-dom';
import { signupStepAction, signupRegistration, signupValidation } from '../../Store/actions/auth.js';
import emailIcon from '../../Assets/email.svg'

const SignUp = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const step = useSelector(state => state.signupStep)
    const email = useSelector(state => state.signupEmail)
    const [username, setUsername] = useState("") 
    const [password, setPassword] = useState("") 
    const [passwordRepeat, setPasswordRepeat] = useState("") 
    const [userFeedback, setUserFeedback] = useState("") 

    const usernameInputHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordInputHandler = (e) => {
        setPassword(e.target.value)
    }

    const passwordRepeatInputHandler = (e) => {
        setPasswordRepeat(e.target.value)
    }
    
    const signUpHandler = (e) => {
        e.preventDefault()
        setUserFeedback("")
        if (step === 1 ) {
            dispatch(signupRegistration({email: e.target.elements.email.value}))
            .then(result => result ? setUserFeedback(result.email) : dispatch(signupStepAction(2)))
        } else if (step === 2) {
            dispatch(signupStepAction(3))
        } else {
            if (password !== passwordRepeat) {
                setUserFeedback("Password repeat not matching")
            } else {
                dispatch(signupValidation({
                    email: email,
                    code: e.target.elements.code.value,
                    username: username,
                    location: e.target.elements.location.value,
                    password: password,
                    password_repeat: passwordRepeat,
                }))
                .then(result => {
                    if (!result) {
                        dispatch(signupStepAction(1))
                        history.push("/")
                    } else {
                        let feedback = Object.keys(result).map(key => result.hasOwnProperty(key) ? result[key] : "").join(" & ")
                        setUserFeedback(feedback)
                    }
                    
                })
            }
        }
    }
    return (
        <Layout>
            <MainStyled>
                {
                    step === 1 ?
                    <FormStyled id = "sign-up-form" onSubmit={signUpHandler}>
                        <TitleStyled>REGISTRATION</TitleStyled>
                        <div className='email-icon'>
                            <img src={emailIcon} alt="Email" />
                            <InputStyled name="email" type = "email" placeholder="Email" required/>
                        </div>
                        <ButtonStyled>Register</ButtonStyled>
                        <p>{userFeedback}</p>
                    </FormStyled>
                    : null
                }
                
                {
                    step === 3 ?
                    <SignupFormThreeStyled id="sign-up-form" onSubmit={signUpHandler}>
                        <TitleStyled>VERIFICATION</TitleStyled>
                        <div className='input-field'>
                            <InputSmallStyled name="email" type="email" placeholder="E-Mail address" value={email} readOnly/>
                            <InputSmallStyled name="code" type="number" placeholder="Validation code"  required/>
                            <InputSmallStyled name="username" type="text" placeholder="Username" onChange={usernameInputHandler} required/>
                            <InputSmallStyled name="location" type="text" placeholder="Location" />
                            <InputSmallStyled name="password" type="password" placeholder="Password" onChange={passwordInputHandler} required/>
                            <InputSmallStyled name="passwordrepeat" type="password" placeholder="Password repeat" onChange={passwordRepeatInputHandler} required/>
                        </div>
                        <ButtonStyled>Finish Registration</ButtonStyled>
                    </SignupFormThreeStyled>
                    : null
                }
            </MainStyled>
        </Layout>
    )
}

export default SignUp;

