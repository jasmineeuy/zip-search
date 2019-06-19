import React from 'react';

import './App.css';
import axios from 'axios';

import ZipResult from './ZipResult'








class  App extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      zipcodes :[]
    }
  }
  searchZip = (event) => {
    event.preventDefault();
    let userInput =event.target[0].value;
    console.log(userInput);
    

    axios.get('http://ctp-zip-api.herokuapp.com/zip/' + userInput)
    .then( (resolve) => {  // called when data is returned
      this.setState({zipcodes:resolve.data}); // sets state to whatever came in in data
      //console.log(resolve);
    })
    .catch((err)=> console.log(err)); // logs erros
  }

  

 render (){

  let elems = []; // holds jsx elements

  /*for(let zip of  this.state.zipcodes){  // each is an array of objects zip - is an individual oblject
    elems.push(<ZipResult key{index++} {...zip}/>);
  }*/ // can use this or the method below

  elems = this.state.zipcodes.map((elem,i) => <ZipResult key={i} {...elem}/>)
  return (
    
    <div class = "mainC">
      <header> Zip Search </header>
      <form onSubmit = {this.searchZip} >
      <h2> Please input a zipcode: </h2>

      <input class="num" type = "text"/>
      <h1></h1>
      </form>
      
      <div class ="resZ">
        
          {elems}


      </div>
    
      
     
    </div>
   
  );
 }
}
export default App;
