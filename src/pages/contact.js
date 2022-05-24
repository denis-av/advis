import React from 'react';
import { useEffect, useState } from 'react';
import {ReactComponent as YourSvg} from '../images/undraw_icon_design_re_9web.svg';
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth, db } from '../App';
import { useNavigate } from 'react-router-dom';
import { BigContainer } from '../components/Signup/SignupElements';
import { ContactContent, FormContent, IconsDetails, IconWrapper, InfoWrapperForm, InfoContent, InfoWrapper, FormButton, RowCell,RowCellForm, SocialIconLink,LabelInput, FormInput, FormLabel, SocialIconLink2, TopLine, ServicesIcon} from '../components/Contact/ContactElements';
import {FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaMailBulk, FaSearchLocation, FaUserMinus, FaUserPlus, FaTextHeight} from 'react-icons/fa';
import Icon from '../images/logo_white.png';


function Contact() {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [textError, setTextError] = useState("");

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    
    const handleFirstName = event => {
        setFirstName(event.target.value);
    }

    const handleLastName = event => {
        setLastName(event.target.value);
    }

    const handlePhone = event => {
        setPhone(event.target.value);
    }

    const handleMessage = event => {
        setMessage(event.target.value);
    }

        return (
            <>
            <BigContainer>
                <ContactContent>
                    <InfoContent>
                        <IconWrapper>
                            <ServicesIcon src={Icon} />
                        </IconWrapper>
                        <InfoWrapper>
                            <RowCell>
                                <SocialIconLink target="_blank" aria-label="Phone"><FaPhone /></SocialIconLink>
                                <TopLine>
                                    +40725 333 999
                                </TopLine>
                            </RowCell>
                            <RowCell>
                                <SocialIconLink target="_blank" aria-label="Mail" style={{marginLeft:"5%"}}><FaMailBulk /></SocialIconLink>
                                <TopLine style={{fontSize:"10px"}}>
                                    adviscompany.adim@gmail.com
                                </TopLine>
                            </RowCell>
                            <RowCell>
                                <SocialIconLink target="_blank" aria-label="Location"><FaSearchLocation /></SocialIconLink>
                                <TopLine>
                                    Timișoara, România
                                </TopLine>
                            </RowCell>
                        </InfoWrapper>
                        <IconsDetails>
                                    <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                                    <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                                    <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                        </IconsDetails>
                    </InfoContent>
                    <FormContent>
                        <InfoWrapperForm>
                            <RowCellForm>
                                <SocialIconLink2 target="_blank" aria-label="Phone"><FaUserMinus /></SocialIconLink2>
                                <LabelInput>
                                    <FormLabel htmlFor='for'>Nume</FormLabel>
                                    <FormInput type='text' value={lastName} onChange={handleLastName} placeholder="Popescu" required/>
                                </LabelInput>
                            </RowCellForm>
                            <RowCellForm>
                                <SocialIconLink2 target="_blank" aria-label="Phone"><FaUserPlus /></SocialIconLink2>
                                <LabelInput>
                                    <FormLabel htmlFor='for'>Prenume</FormLabel>
                                    <FormInput type='text' value={firstName} onChange={handleFirstName} placeholder="Ana" required/>
                                </LabelInput>
                            </RowCellForm>
                            <RowCellForm>
                                <SocialIconLink2 target="_blank" aria-label="Phone"><FaMailBulk /></SocialIconLink2>
                                <LabelInput>
                                    <FormLabel htmlFor='for'>Mail</FormLabel>
                                    <FormInput type='email' value={email} onChange={handleEmail} placeholder="adviscompany.adim@gmail.com" required/>
                                </LabelInput>
                            </RowCellForm>
                            <RowCellForm>
                                <SocialIconLink2 target="_blank" aria-label="Phone"><FaPhone /></SocialIconLink2>
                                <LabelInput>
                                    <FormLabel htmlFor='for'>Telefon</FormLabel>
                                    <FormInput type='tel' value={phone} onChange={handlePhone} placeholder="+40725 333 999" required/>
                                </LabelInput>
                            </RowCellForm>
                            <RowCellForm>
                                <SocialIconLink2 target="_blank" aria-label="Phone"><FaTextHeight /></SocialIconLink2>
                                <LabelInput>
                                    <FormLabel htmlFor='for'>Mesaj</FormLabel>
                                    <FormInput type='text' value={message} onChange={handleMessage} placeholder="Mesajul tău" required/>
                                </LabelInput>
                            </RowCellForm>
                            <RowCellForm>
                                <FormButton>Trimite</FormButton>
                            </RowCellForm>
                        </InfoWrapperForm>
                    </FormContent>
                </ContactContent>
            </BigContainer>
            </>
          )
    }

export default Contact