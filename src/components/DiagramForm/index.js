import React from 'react';
import { useEffect, useState } from 'react';
import { auth, db } from '../../App';
import { Route, Redirect } from 'react-router'
import { collection, query, getDocs, doc, setDoc, getDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import { Container,
    Wrapper, 
    FormArea, 
    CircleImage, 
    CircleGroup, 
    FullCircle, 
    FullCircle3, 
    EmptyCircle, 
    CircleGroup2,
    FullCircle4, 
    FullCircle2, 
    FormWrap,
    FormH1,
    DiagramFormWrap,
    FormLabel, 
    FormInput,
    FormButton,
    FormSelect,
    ProjectSelection,
    FormSelect2
} from './DiagramFormElements';

function DiagramForm() {

    let navigate = useNavigate();

    const [projectName, setProjectName] = useState("");
    const [diagramType, setDiagramType] = useState("");
    const [fileName, setFileName] = useState("");
    const [fileContent, setFileContent] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [newProjectLabel, setNewProjectLabel] = useState("");
    const [diagramName, setDiagramName] = useState("");
    const [newProject, setNewProject] = useState("");
    const [userProjects, setUserProjects] = useState([]);
    const [userProjectsCount, setUserProjectsCount] = useState(0);


     useEffect(async ()=>{
        //user
        const user = localStorage.getItem("user");
        // preluare date din FireStore
        const q = query(collection(db, user));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            userProjects.push(doc.id);
        });
      },[]) //notice the empty array here

    const handleProjectName = event => {
        event.preventDefault();
        setProjectName(event.target.value);
    }

    const handleNewProject = event => {
        if(event.target.value === "Da") {
            setNewProject(false);
            setNewProjectLabel("Da");
        }
        else{
            setNewProject(true);
            setNewProjectLabel("Nu");
        }
    }
    
    const handleDiagramType = event => {
        setDiagramType(event.target.value);
    }

    const handleDiagramName = event => {
       setDiagramName(event.target.value);
    }

    const handleFileName = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            const completeFileName = file.name;
            console.log(completeFileName);
            if(completeFileName.endsWith(".json")){
                setFileName(completeFileName);
                setErrorMessage("");
                setFileContent(text);
            }
            else{
                setErrorMessage("Fișierul ales nu este de tip JSON");
            }
        };
        reader.readAsText(event.target.files[0]);
    }

    const ResetInputsFormUser = event => {
        setProjectName("");
        setDiagramName("");
        setFileContent("");
        setDiagramType("");
        setFileName("");
        setNewProject("");
    }

    async function CreateDiagramInDB(e){
        //user
        const user = localStorage.getItem("user");
        if(newProject  === false){
            //construire obiect
            const docData = {
                //diagramType: diagramType,
                jsonContent: fileContent
            }
            const map = new Map();
            map.set(diagramName, docData);
            //transformare din map in object
            const objectDiagram = Object.fromEntries(map);
            // preluare date din FireStore
            const docRef = doc(db, user, projectName);
            const docSnap = await getDoc(docRef);
            const docReceived = docSnap.data();
            const newProj = {};
            if(docReceived != null){
                docReceived[diagramName] = docData;
                await setDoc(docRef, docReceived);
            }
            else{
            newProj[diagramName] = docData;
            await setDoc(docRef, newProj);
            }
            
        }else{
            //construire obiect
            const docData = {
                //diagramType: diagramType,
                jsonContent: fileContent
            }
            const map = new Map();
            map.set(diagramName, docData);
            //transformare din map in object
            const objectDiagram = Object.fromEntries(map);
            await setDoc(doc(db, user, projectName), objectDiagram);
        }
        ResetInputsFormUser();
        setErrorMessage("Diagrama a fost creată cu succes!")
        navigate("/mainPage");
    }

    const createSelectItems = () => {
        let items = [];    
        items.push(<option key="def" value="default">Selecteaza</option>);
        for (let i = 0; i < userProjects.length; i++) {             
             items.push(<option  key={i} value={userProjects[i]}>{userProjects[i]}</option>);   
        }
        return items;
    }

    return (
        <>
        <Container>
                <Wrapper>
                    <FormArea>
                        <FormWrap>
                            <FormH1>Crează o nouă diagramă</FormH1>
                            <DiagramFormWrap>
                                <ProjectSelection>
                                    <FormLabel htmlFor="for" style={{marginTop:'3px'}}>Aparține aceasă diagramă de un proiect creat anterior?</FormLabel>
                                    <FormSelect2 type="text" value={newProjectLabel} onChange={handleNewProject} required>
                                            <option value="default">
                                                Selectează
                                            </option>
                                            <option value="Da">Da</option>
                                            <option value="Nu">Nu</option>
                                    </FormSelect2>
                                </ProjectSelection>
                                <FormLabel htmlFor="for">Nume proiect</FormLabel>
                                {
                                    newProject ?
                                    <FormSelect2 type="text" value={projectName} onChange={handleProjectName} required>
                                            {createSelectItems()}
                                    </FormSelect2> :
                                    <FormInput type="text" value={projectName} onChange={handleProjectName} required/>

                                }
                                <FormLabel htmlFor="for">Numele diagramei</FormLabel>
                                <FormInput type="text" value={diagramName} onChange={handleDiagramName} required/>
                                <FormLabel htmlFor="for">Fișier JSON</FormLabel>
                                <FormInput type="file" onChange={handleFileName} required/>
                                <FormLabel htmlFor="for">{errorMessage}</FormLabel>
                                <FormButton onClick={CreateDiagramInDB}  style={{marginBottom:"-10px"}}>Crează</FormButton>
                            </DiagramFormWrap>
                        </FormWrap>
                    </FormArea>
                    <CircleImage>
                        <CircleGroup>
                            <FullCircle />  
                            <FullCircle3 />  
                            <EmptyCircle />  
                        </CircleGroup>
                        <CircleGroup2>
                            <FullCircle4 />  
                            <FullCircle2 />
                        </CircleGroup2>
                    </CircleImage>
                </Wrapper>
            </Container>
        </>
        )
}

export default DiagramForm