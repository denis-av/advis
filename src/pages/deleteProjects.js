import React from 'react';
import { useEffect, useState } from 'react';
import { auth, db } from '../App';
import { SignInContainer,SignInForm, IconWrap, Icon,LoginForm,FormButton, FormGroup, FormInput, FormLabel,TabElementCreate, FormH1, SignInContent, FormSelect, Container, ServicesIcon } from '../components/DeleteProjects/DeleteProjectsElements';
import { useNavigate } from 'react-router-dom';
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";
import { doc, updateDoc, deleteField, collection, query, getDocs, getDoc } from "firebase/firestore";
import IconIMG from '../images/loading.png';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
  };
  
  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  };

function DeleteProjects() {

    let navigate = useNavigate();

    const [ type, setType] = useState("");
    const [textError, setTextError] = useState("");
    const [selectTypeProject, setSelectProject] = useState(false);
    const [selectTypeDoc, setSelectTypeDoc] = useState(false);
    const [project , setProject] = useState("");
    const [documentFormProject, setDocumentFormProject] = useState("");
    const [userProjects, setUserProjects] = useState([]);
    const [userFiles, setUserFiles] = useState([]);
    const [user, setUser] = useState("");
    const [isLoading, setLoading] = useState(true)

    const handleType = event => {
        event.preventDefault();
        setType(event.target.value);
        if(event.target.value === "project") setSelectProject(true);
        else if(event.target.value === "document") setSelectTypeDoc(true);
    }
    
    const handleDelete = event => {
        const docRef = doc(db, 'cities', 'BJ');
    }

    useEffect(async () => {
        setUserFiles([]);
        const result = localStorage.getItem("user");
        setUser(result);
        try{
                const docRef = doc(db, "users", result);
                const docSnap = await getDoc(docRef);
                const test = docSnap.data();
                const q = query(collection(db, result));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach(async (docum) => {
                    userProjects.push(docum.id);
                    const object = {
                        projectName: docum.id,
                        projectDocument: docum.data()
                    }
                    userFiles.push(object);
                });
                setLoading(false) //stop loading when data is fetched
            }catch(error){

            }
    }, [])

    const getProjectsFromUser = () => {
        const elem = localStorage.getItem("userFiles");
        console.log(elem);
        let items = [];
        for (let i = 0; i < userFiles.length; i++) {              
            items.push(
                <FormLabel htmlFor='for'>{userFiles[i].projectName}</FormLabel>
            )
        }
        return items;
    }

        return (
            isLoading ? (
                <Container>
                    <ServicesIcon src={IconIMG} />
                </Container>
            ) : (
                    <>
                    <SignInContainer>
                            <IconWrap>
                                <Icon to="/">advis</Icon>
                            </IconWrap>
                            <SignInContent>
                                <SignInForm>
                                    <FormH1>Editare documente</FormH1>
                                    <LoginForm>
                                        <FormGroup>
                                            <FormLabel htmlFor='for'>Tipul elementului</FormLabel>
                                            <FormSelect value={type} onChange={handleType} required>
                                                <option value="default">Selecteaza</option>
                                                <option value="project">Proiect</option>
                                                <option value="document">Document</option>
                                            </FormSelect>
                                            <Transition in={selectTypeProject} timeout={300}>
                                                {(state) => (
                                                <TabElementCreate
                                                    style={{
                                                    ...defaultStyle,
                                                    ...transitionStyles[state]
                                                    }}
                                                >
                                                    <FormLabel htmlFor='for'>Proiectul</FormLabel>
                                                    <FormSelect value={project} onChange={handleType} required>
                                                        <option value="default">Selecteaza</option>
                                                        {getProjectsFromUser()}
                                                    </FormSelect>
                                                </TabElementCreate>
                                                )}
                                            </Transition>
                                            <Transition in={selectTypeDoc} timeout={300}>
                                                {(state) => (
                                                <TabElementCreate
                                                    style={{
                                                    ...defaultStyle,
                                                    ...transitionStyles[state]
                                                    }}
                                                >
                                                    <FormLabel htmlFor='for'>Documentul</FormLabel>
                                                    <FormSelect value={document} onChange={handleType} required>
                                                        <option value="default">Selecteaza</option>
                                                    </FormSelect>
                                                </TabElementCreate>
                                                )}
                                            </Transition>
                                            <FormButton onClick={handleDelete}>Șterge</FormButton>
                                            <FormLabel htmlFor='for' style={{color:"#000000", fontWeight: "normal", textAlign: "center"}}>{textError}</FormLabel>
                                        </FormGroup>
                                    </LoginForm>
                                </SignInForm>
                            </SignInContent>
                        </SignInContainer>
                    </>
            )
          )
    }

export default DeleteProjects