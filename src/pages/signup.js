import React from 'react';
import {ReactComponent as YourSvg} from '../images/undraw_sign_in_re_o58h.svg';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Container, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Form, Text, InfoRow, Column1, Column2, ImgWrap, IconWrap } from '../components/Signup/SignupElements'
import { auth } from '../App';


export default class Signup extends React.Component{

    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            passwordConfirmed: "",
            textError: ""
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmedPassword = this.handleConfirmedPassword.bind(this);
        this.CreateAccount = this.CreateAccount.bind(this);
    }

    componentDidMount(){
        console.log(auth);
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }
    
    handlePassword(event) {
        this.setState({password: event.target.value});
      }

    handleConfirmedPassword(event) {
        this.setState({passwordConfirmed: event.target.value});
      }

    CreateAccount(e) {
        e.preventDefault();
        if(this.state.password === this.state.passwordConfirmed){
            createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then(() => {
                this.setState({email: ''});
                this.setState({password: ''});
                this.setState({passwordConfirmed: ''});
                this.setState({textError: "Cont creat cu succes!"});
            })
            .catch((error) => {
                console.log(error.message);
                switch (error.code){
                    case "auth/email-already-in-use":
                        this.setState({textError: "Exista deja un user cu acest email!"});
                        break;
                    case "auth/invalid-email":
                        this.setState({textError: "Email invalid!"});
                        break;
                    case "auth/weak-password":
                        this.setState({textError: "Parola este prea slaba!"});
                        break;
                };
                this.setState({email: ""});
                this.setState({password: ""});
                this.setState({passwordConfirmed: ""});
            });
        }else{
            this.setState({textError: "Parolele trebuie să coincidă!"});
        }
        
    }

    render(){
        return (
            <>
                <Container>
                    <IconWrap>
                        <Icon to="/">advis</Icon>
                    </IconWrap>
                    <FormWrap>
                        <InfoRow imgStart={false}>
                            <Column1>
                            <ImgWrap style={{display:'flex', alignContent:'center',alignItems:'center'}}>
                                <YourSvg style={{width: "100%"}}/>
                                </ImgWrap>
                            </Column1>
                            <Column2>
                                <FormContent>
                                    <Form action="#">
                                        <FormH1>Înregistrează-te acum!</FormH1>
                                        <FormLabel htmlFor='for'>Email</FormLabel>
                                        <FormInput type='email' value={this.state.email} onChange={this.handleEmail}/>
                                        <FormLabel htmlFor='for'>Parolă</FormLabel>
                                        <FormInput type='password'value={this.state.password} onChange={this.handlePassword}/>
                                        <FormLabel htmlFor='for'>Confirmă parola</FormLabel>
                                        <FormInput type='password' value={this.state.passwordConfirmed} onChange={this.handleConfirmedPassword}/>
                                        <FormButton onClick={this.CreateAccount}>Crează cont</FormButton>
                                        <Text to="/">Deja am cont!</Text>
                                        <FormLabel htmlFor='for' style={{color:"#ffffff", fontWeight: "normal", textAlign: "center"}}>{this.state.textError}</FormLabel>
                                    </Form>
                                </FormContent>
                            </Column2>
                        </InfoRow>
                    </FormWrap>
                </Container>
            </>
          )
    }
}