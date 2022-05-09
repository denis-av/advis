import React from 'react'
import NavbarUser from '../components/Navbar_user';
import SidebarUser from '../components/Sidebar-user';
import Footer from '../components/Footer'
import Treemap from './staticTreemap';
import DiagramForm from '../components/DiagramForm';


export default class CreateDiagram extends React.Component {

    constructor(){
        super();
        this.state = {
            isOpen: false,
            d3: '',
            data: {"name":"Submitter","children":[{"children":[{"children":[{"children":[{"id":"12","ParentID":"4","codeSizeMax":"41","name":"AssignUnassignMediaTrayDelegates"},{"id":"13","ParentID":"4","codeSizeMax":"14","name":"JDFJMFSubmitter"},{"id":"14","ParentID":"4","codeSizeMax":"41","name":"ReceivedMessageDelegates"},{"id":"15","ParentID":"4","codeSizeMax":"41","name":"SubscriptionMessageDelegates"},{"id":"16","ParentID":"4","codeSizeMax":"41","name":"TimeOutDelegates"}],"id":"4","ParentID":"3","name":"UIController"},{"children":[{"id":"17","ParentID":"5","codeSizeMax":"229","name":"AbortQueueEntry"},{"id":"18","ParentID":"5","codeSizeMax":"0","name":"ActionJMF"},{"id":"19","ParentID":"5","codeSizeMax":"198","name":"AssignMediaToTray"},{"id":"20","ParentID":"5","codeSizeMax":"29","name":"CustomizableJMF"},{"id":"21","ParentID":"5","codeSizeMax":"229","name":"HoldQueueEntry"},{"id":"22","ParentID":"5","codeSizeMax":"229","name":"KnownDevices"},{"id":"23","ParentID":"5","codeSizeMax":"188","name":"KnownMessages"},{"id":"24","ParentID":"5","codeSizeMax":"188","name":"QueueStatus"},{"id":"25","ParentID":"5","codeSizeMax":"229","name":"RemoveQueueEntry"},{"id":"26","ParentID":"5","codeSizeMax":"193","name":"Resource"},{"id":"27","ParentID":"5","codeSizeMax":"229","name":"ResumeQueueEntry"},{"id":"28","ParentID":"5","codeSizeMax":"29","name":"SendFile"},{"id":"29","ParentID":"5","codeSizeMax":"193","name":"Status"},{"id":"30","ParentID":"5","codeSizeMax":"224","name":"StopPersistentChannel"},{"id":"31","ParentID":"5","codeSizeMax":"188","name":"SubmissionMethods"},{"id":"32","ParentID":"5","codeSizeMax":"259","name":"SubmitQueueEntry"},{"id":"33","ParentID":"5","codeSizeMax":"198","name":"UnassignMediaToTray"}],"id":"5","ParentID":"3","name":"SubmitterComponent"},{"children":[{"id":"34","ParentID":"6","codeSizeMax":"300","name":"HTTPServer"},{"id":"35","ParentID":"6","codeSizeMax":"193","name":"Server"}],"id":"6","ParentID":"3","name":"SenderRecevier"},{"children":[{"id":"36","ParentID":"7","codeSizeMax":"283","name":"HistoryManager"}],"id":"7","ParentID":"3","name":"HistoryManager"},{"children":[{"id":"37","ParentID":"8","codeSizeMax":"9","name":"ActionTypeEnumNotFound"},{"id":"38","ParentID":"8","codeSizeMax":"9","name":"QueryNotFoundException"},{"id":"39","ParentID":"8","codeSizeMax":"9","name":"SubmitterComponentClassNotFoundException"},{"id":"40","ParentID":"8","codeSizeMax":"9","name":"XMLNotFoundException"}],"id":"8","ParentID":"3","name":"Exceptions"},{"children":[{"id":"41","ParentID":"9","codeSizeMax":"259","name":"ActionInterpreter"},{"id":"42","ParentID":"9","codeSizeMax":"407","name":"CommandHandler"},{"id":"43","ParentID":"9","codeSizeMax":"121","name":"ConnectionManager"},{"id":"44","ParentID":"9","codeSizeMax":"463","name":"Utility"}],"id":"9","ParentID":"3","name":"Commander"}],"id":"3","ParentID":"2","name":"src"},{"id":"10","ParentID":"2","codeSizeMax":"7","name":"Class1"},{"id":"11","ParentID":"2","codeSizeMax":"7","name":"LogHelper"}],"id":"2","ParentID":"1","name":"Submitter"}]}
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle = () =>{
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){
        return (
            <>
                <SidebarUser isOpen={this.state.isOpen} toggle={this.toggle}/>
                <NavbarUser toggle={this.toggle}/>
                <DiagramForm />
                <Footer />
            </>
        )
    }
}