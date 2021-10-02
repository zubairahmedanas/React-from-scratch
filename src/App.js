import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// import {Greet} from './components/Greet';
import Greet from './components/Greet';
// import Hello from './components/Hello';
import Welcome from './components/welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
function App() {
  return (
    <div className="App">
      <h1 className ='error'> Error </h1>
      <h1 className ={styles.success}> Success </h1>
      <Stylesheet primary = {true} />
      <Inline />    
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick />       */}
      {/* <Greet name = "Zubair" designationName = 'Software Engineer'>
        <p> he works as a software engineer</p>
      </Greet>
      
      <Greet name = "Ahmed"  designationName = 'Software Engineer' />
      <Greet name = "Anas" designationName = 'Software Engineer' />
      <Welcome name = "Sumon"  designationName = 'Senior Software Engineer' />
      <Welcome name = "Sarwar" designationName = 'Lead Engineer' /> */}
      {/* <Hello/> */}
      {/* <Message /> */}
      {/* <Counter /> */}
    </div>
  );
}
// class App extends Component{
//   render(){
//     return(
//       <div className = "App">
//         <Greet />
//       </div>
//     );
//   }
// }

export default App;
