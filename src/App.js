import {Card} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FacebookLoginButton } from "react-social-login-buttons";
import {facebookLoginUrl} from './fb.config';
import * as queryString from 'query-string';
import {getAccessTokenFromCode} from './fb.proxy';
import React from 'react';

 class App extends React.Component{

  async componentDidMount(){
    const urlParams = queryString.parse(window.location.search);
    console.log(urlParams);
    if(urlParams.code)
     {
       const accessToken = await getAccessTokenFromCode(urlParams.code);
       if(accessToken){
            document.getElementById('my-login-card').innerHTML = `<p style='font-size: 14px;'>My access token: ${accessToken}</p>`
       } else {
        document.getElementById('my-login-card').innerHTML = `<p style='font-size: 25px;'>Something went wrong while getting token</p>`
       }
     }

  }
  render(){
    return (
      <div className="App">
      <Card id='my-login-card' className="text-center mt-1" bg={'light'}
        key={6} text={ 'dark' } >
       <Card.Text><b>Auth Test Login </b></Card.Text>
       <Card.Body id='my-login-card'>
        <a href={facebookLoginUrl}><FacebookLoginButton ></FacebookLoginButton></a>
       </Card.Body>
         </Card>
      </div>
    );
  }
  
}

export default App;
