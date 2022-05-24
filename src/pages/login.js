import React from 'react';
import { useEffect, useState } from 'react';
import {ReactComponent as YourSvg} from '../images/undraw_icon_design_re_9web.svg';
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth, db } from '../App';
import { SignInContainer,SignInForm, IconWrap, Icon,LoginForm,ImgWrapper,FormButton, Text, FormGroup, FormInput, FormLabel, FormH1, SignInContent } from '../components/Signin/SigninElements';
import { useNavigate } from 'react-router-dom';


function Login() {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [textError, setTextError] = useState("");

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    
    const handlePassword = event => {
        setPassword(event.target.value);
    }



    async function LoginUser(e) {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            if(email === "adviscompany.adim@gmail.com"){
                localStorage.setItem("AdminLogged","true");
                navigate("/adminMainPage");
                localStorage.setItem('user', "admin");
            }else{
                const user = email.substring(0,email.indexOf("@"));
                localStorage.setItem("UserLogged","true");
                navigate("/mainPage");
                localStorage.setItem('user', user);
            }
        })
        .catch((error) => {
            console.log(error.message);
            switch (error.code){
                case "auth/invalid-email":
                    setTextError("Email invalid!");
                    break;
                case "auth/wrong-password":
                    setTextError("Parola incorecta!");
                    break;
                case "auth/user-not-found":
                    setTextError("Contul nu a fost gasit!");
                    break;
            };
            setEmail("");
            setPassword("");
        });       
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
                            <FormH1>Autentificare</FormH1>
                            <LoginForm>
                                <FormGroup>
                                    <FormLabel htmlFor='for'>Email</FormLabel>
                                    <FormInput type='email' value={email} onChange={handleEmail} placeholder="example@email.com" required/>
                                    <FormLabel htmlFor='for'>Parolă</FormLabel>
                                    <FormInput type='password'value={password} onChange={handlePassword} placeholder="*******" required/>
                                    <FormButton onClick={LoginUser}>Autentificare</FormButton>
                                    <Text to="/signin/resetPassword">Am uitat parola</Text>
                                    <Text to="/signup">Vreau sa mă înregistrez!</Text>
                                    <FormLabel htmlFor='for' style={{color:"#000000", fontWeight: "normal", textAlign: "center"}}>{textError}</FormLabel>
                                </FormGroup>
                                <ImgWrapper style={{display:'flex', alignContent:'center',alignItems:'center'}}>
                                    <YourSvg style={{width: "100%", margin:'auto'}}/>
                                </ImgWrapper>
                            </LoginForm>
                        </SignInForm>
                    </SignInContent>
                </SignInContainer>
            </>
          )
    }

export default Login