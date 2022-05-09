import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonProj, ButtonWrap, Container, DiagramsDetails,TopLine, ProjectBttn, DiagramWrapp,ColorSelect,BtnNew, DimensionWrap, Heading,HeadingTitle, ProjectForm, ProjectMessage, ProjectsDocuments, ProjectsName, ProjectsWrappers, ServicesIcon, Settings, TabButtonCreate, TabColor, TabDiagramType, TabDimension, Tabs, Title, DimensionSection, Label, Input, BtnText, ProjectsWrapp } from './ProjectUserElements';
import Icon from '../../images/loading.png';
import "./style.css"
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";

import {
    CircleImage, 
    CircleGroup, 
    FullCircle, 
    FullCircle3, 
    EmptyCircle, 
    CircleGroup2,
    FullCircle4, 
    FullCircle2, 

} from '../DiagramForm/DiagramFormElements';

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

function ProjectUser({isLoading, userName, userFiles}){

    let navigate = useNavigate();

    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [diagramType, setDiagramType] = useState("");
    const [secondDiv, setSecondDiv] = useState(false);
    const [thirdDiv, setThirdDiv] = useState(false);
    const [loaded, setLoad] = useState(false);
    const [userFilesLoad, setUserFilesLoad] = useState(userFiles);
    const [project, setProject] = useState("");
    const [projectFiles, setProjectFiles] = useState([]);
    const [fileName, setFileName] = useState("");
    const [data, setData] = useState({});
    const [diameter, setDiameter] = useState("");
    const [selectDiagramType, setSelectDiagramType] = useState(false);
    const [selectDimension, setSelectDimensio] = useState(false);
    const [selectColor, setSelectColor] = useState(false);
    const [selectProject, setSelectProject] = useState(false);

    const handleColor = event =>{
        setColor(event.target.value);
        setSelectColor(true);
    }

    const handleWidth = event =>{
        if(parseInt(event.target.value) <= 1100) setWidth(event.target.value);
        else setWidth("1100");
    }

    const handleHeight = event =>{
        if(parseInt(event.target.value) <= 650) setHeight(event.target.value);
        else setHeight("650");
        setSelectDimensio(true);
    }

    const handleDiameter = event =>{
        if(parseInt(event.target.value) <= 850) setDiameter(event.target.value);
        else setWidth("850");
        setSelectDimensio(true);
    }

    const handleDiagramType = event =>{
        setDiagramType(event.target.value);
        setSelectDiagramType(true);
    }

    const createCardForProjectName = () => {
        let items = [];
        for (let i = 0; i < userFilesLoad.length; i++) {              
            items.push(
                <ButtonWrap>
                        <BtnText key={i} className="btn success" onClick={() => handleSecondDiv(userFilesLoad[i].projectName)}>{userFilesLoad[i].projectName}</BtnText>
                </ButtonWrap>
            )
        }
        return items;
    }

    async function handleSecondDiv(name) {
        setProject(name);
        localStorage.setItem("projectName",name);
        let index = -1;
        let count = 0;
        userFilesLoad.forEach((doc) =>{
            if(doc.projectName === name) index = count;
            count = count + 1;
        })
        const files = userFilesLoad[index].projectDocument;
        setProjectFiles(files);
        if(secondDiv === false) setSecondDiv(true);
    }

    function handleThirdDiv(name){
        setFileName(name);
        localStorage.setItem("documentName",name);
        setData(projectFiles[name].jsonContent)
        setThirdDiv(true);
    }

    const createCardForDocuments = () => {
        let items = [];
        for (const key in projectFiles) {
            items.push(
                <ButtonWrap>
                        <BtnText key={key} className="success2" onClick={() => handleThirdDiv(key)}>{key}</BtnText>
                </ButtonWrap>
            )
                
        }
        return items;
    }

    const createDiagram = () =>{
        localStorage.setItem("width",width);
        localStorage.setItem("height",height);
        localStorage.setItem("color",color);
        localStorage.setItem("type",diagramType);
        localStorage.setItem("data",data);
        localStorage.setItem("diameter",diameter);
        navigate("/diagramPage");
    }

    const createNewProject = () => {
        navigate("/createDiagram");
    }

    const handleDimension = () => {
        if(diagramType === "bubbleChart"){
            return (
                    <DimensionWrap>
                        <DimensionSection>
                            <Label htmlFor='for'>Diametru</Label>
                            <Input type="number" value={diameter} onChange={handleDiameter} min="400" max="850" required />
                        </DimensionSection>
                    </DimensionWrap>
            )
        }else {
            return (
                <DimensionWrap>
                    <DimensionSection>
                        <Label htmlFor='for'>Lătime</Label>
                        <Input type="number" value={width} onChange={handleWidth} min="500" max="1200" required />
                    </DimensionSection>
                    <DimensionSection>
                        <Label htmlFor='for'>Înălțime</Label>
                        <Input type="number" value={height} onChange={handleHeight} min="300" max="750" required />
                    </DimensionSection>
                </DimensionWrap>
            )
        }
    }

    return(
            isLoading ? (
                        <Container>
                            <ServicesIcon src={Icon} />
                        </Container>
            ) : (
                    <>
                        <Container>
                            <ProjectForm>
                                <ProjectMessage>
                                    <TopLine>Alegeți proiectul, documentul și crează o nouă diagram așa cum dorești tu</TopLine>
                                </ProjectMessage>
                                <ProjectsWrappers>
                                    <ProjectsWrapp>
                                        <HeadingTitle lightText={false}>1. Alege proiectul</HeadingTitle>
                                        <ProjectsName className="projectNameClass">
                                            {createCardForProjectName()}
                                        </ProjectsName>
                                    </ProjectsWrapp>
                                    <Transition in={secondDiv} timeout={300}>
                                        {(state) => (
                                        <ProjectsWrapp
                                            style={{
                                            ...defaultStyle,
                                            ...transitionStyles[state]
                                            }}
                                        >
                                            <HeadingTitle lightText={false}>2. Alege fișierul</HeadingTitle>
                                            <ProjectsDocuments>
                                                {createCardForDocuments()}
                                            </ProjectsDocuments>
                                        </ProjectsWrapp>
                                        )}
                                    </Transition>
                                    <Transition in={thirdDiv} timeout={300}>
                                        {(state) => (
                                        <DiagramWrapp
                                            style={{
                                            ...defaultStyle,
                                            ...transitionStyles[state]
                                            }}
                                        >
                                            <HeadingTitle lightText={false}>3. Cunstomizeazăți diagrama</HeadingTitle>
                                            <DiagramsDetails>
                                                    <Settings>
                                                        <TabDiagramType>
                                                                <Title>Alege tipul diagramei</Title>
                                                                <ColorSelect value={diagramType} onChange={handleDiagramType} required>
                                                                    <option value="default">Selecteaza</option>
                                                                    <option value="treemapStatic">Treemap static</option>
                                                                    <option value="treemapZoomable">Treemap zoomable</option>
                                                                    <option value="bubbleChart">BubbleChart</option>
                                                                    <option value="collapsible">CollapsibleTree</option>
                                                                </ColorSelect>
                                                            </TabDiagramType>
                                                            <Transition in={selectDiagramType} timeout={300}>
                                                                {(state) => (
                                                                <TabDimension
                                                                    style={{
                                                                    ...defaultStyle,
                                                                    ...transitionStyles[state]
                                                                    }}
                                                                >
                                                                    <Title>Setează dimensiunile pentru diagramă</Title>
                                                                    {handleDimension()}
                                                                </TabDimension>
                                                                )}
                                                            </Transition>
                                                            <Transition in={selectDimension} timeout={300}>
                                                                {(state) => (
                                                                <TabColor
                                                                    style={{
                                                                    ...defaultStyle,
                                                                    ...transitionStyles[state]
                                                                    }}
                                                                >
                                                                    <Title>Alege modul de colorare al diagramei</Title>
                                                                    <ColorSelect value={color} onChange={handleColor} required>
                                                                        <option value="default">Selecteaza</option>
                                                                        <option value="pachet">Colorare pe pachete</option>
                                                                        <option value="scale">Colorare în funcție de mărime</option>
                                                                    </ColorSelect>
                                                                </TabColor>
                                                                )}
                                                            </Transition>
                                                            <Transition in={selectColor} timeout={300}>
                                                                {(state) => (
                                                                <TabButtonCreate
                                                                    style={{
                                                                    ...defaultStyle,
                                                                    ...transitionStyles[state]
                                                                    }}
                                                                >
                                                                    <BtnText key={"buttonCreate"} className="btn success2" onClick={createDiagram}>Crează</BtnText>
                                                                </TabButtonCreate>
                                                                )}
                                                            </Transition>
                                                    </Settings>
                                            </DiagramsDetails>
                                        </DiagramWrapp>
                                        )}
                                    </Transition>
                                </ProjectsWrappers>
                                <ProjectBttn>
                                    <BtnNew key={"buttonCreateFile"} className="success3" onClick={createNewProject}>Crează un nou proiect sau adauga un fișier nou unui proiect existent</BtnNew>
                                </ProjectBttn>
                            </ProjectForm>
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
                        </Container>
                    </>
                )
    )
}

export default ProjectUser