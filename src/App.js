import React from 'react';
import './App.css';

import myWonderfulImage from "./myImage2.png"





function App() {

  let htmlElement1=( <h1 className="title ">Naim Chaabene</h1>); 
  let htmlElement2=(<img className= "img" src="../images/myImage1.jpg"   alt ='myImage' />); //image dans dossier public
  let htmlElement3=(<img src={myWonderfulImage}  className= "img" alt ='myImage' />); //image dans dossier src
  let Firstglobalelement=(<div style={{border:"solid 1px black",maxWidth:"600px", textAlign: "center"}}>
                           {htmlElement1}  <br></br> {htmlElement2} <br></br>  {htmlElement3} </div>);
  let SecondElement=(
                    <video className= "vid" width="320" height="240" controls>
                     <source src="../videos/video1.mp4" type="video/mp4" />
                    </video>
                 );

  return (<div> {Firstglobalelement}    {SecondElement}</div> );
}

export default App;
