import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
// import FunctionalComponent/Components/ClassClick';
import Post from './Components/Post/Index';
import Header from './Components/Header/Index'
import NormalLoginForm from './Components/Login/Login';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Feed from './Components/Feed/Feed';
// import { Card } from 'antd';
import Cards from "./Components/Cards/Cards"
import ClassClick from './Components/ClassClick';
import Cards2 from './Components/Cards2/Cards2';
import Cards3 from './Components/Cards3/Cards3'
import Cards4 from './Components/Cards4/Cards4'
import About from './Components/About/About';
import SignUpForm from './Components/SignUp/SignUp';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        {/* <section className="App-main">
        <Post nickname="Chris"  caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
        <Post nickname="OG" caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
        <Post nickname="Amanda" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Hi There!" image="https://i.pinimg.com/originals/90/41/f0/9041f0a56732ec5ff824ea92852df69e.jpg"/>
      </section> */}

        {/* <NormalLoginForm/> */}
        {/* <Link to="/home">Feeds</Link> */}



        {/* <Header /> */}


        {/* <ClassClick/> */}
        <Route path="/" exact component={NormalLoginForm}></Route>
        <Route path="/home" component={Post}></Route>
        <Route path="/cards" component={Cards}></Route>
        {/* <Route path="/feeds" component={Feed}></Route> */}
        <Route path="/cards2" component={Cards2}></Route>
        <Route path="/cards3" component={Cards3}></Route>
        <Route path="/cards4" component={Cards4}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/signup" component={SignUpForm}></Route>








      </div>
    </BrowserRouter>
  )
}

export default App;
