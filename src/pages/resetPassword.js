import React from 'react';
import { useEffect, useState } from 'react';
import {ReactComponent as YourSvg} from '../images/undraw_icon_design_re_9web.svg';
import { signInWithEmailAndPassword , sendPasswordResetEmail } from "firebase/auth";
import { auth, db } from '../App';
import { SignInContainer,SignInForm, IconWrap, Icon,LoginForm,ImgWrapper,FormButton, Text, FormGroup, FormInput, FormLabel, FormH1, SignInContent } from '../components/Signin/SigninElements';
import { useNavigate } from 'react-router-dom';


function ResetPassword() {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    function ChangePassword(e) {
        sendPasswordResetEmail(auth, email).then(() =>{
            navigate("/signin");
        })
    }
        return (
            <>
            <SignInContainer style ={{ backgroundImage: 'url('+ require('../images/login_back.jpg') + ')',
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'cover',
                                                            backgroundRepeat: 'no-repeat'}}>
                    <IconWrap>
                        <Icon to="/home">advis</Icon>
                    </IconWrap>
                    <SignInContent>
                        <SignInForm>
                            <FormH1>Resetează parola</FormH1>
                            <LoginForm>
                                <FormGroup style={{height:"40%"}}>
                                    <FormLabel htmlFor='for'>Email</FormLabel>
                                    <FormInput type='email' value={email} onChange={handleEmail} placeholder="example@email.com" required/>
                                    <FormButton onClick={ChangePassword}>Resetează</FormButton>
                                </FormGroup>
                                <ImgWrapper style={{display:'flex', alignContent:'center',alignItems:'center'}}>
                                    <YourSvg style={{width: "75%", margin:'auto'}}/>
                                </ImgWrapper>
                            </LoginForm>
                        </SignInForm>
                    </SignInContent>
                </SignInContainer>
            </>
          )
    }

export default ResetPassword