import {Card} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FacebookLoginButton } from "react-social-login-buttons";
import {facebookLoginUrl} from './fb.config';

function App(){

    return (
      <div className="App">
      <Card className="text-center mt-1" bg={'light'}
        key={6} text={ 'dark' } className='mb-2'>
       <Card.Text><b>Auth Test Login </b></Card.Text>
       <Card.Body>
        <a href={facebookLoginUrl}><FacebookLoginButton ></FacebookLoginButton></a>
       </Card.Body>
         </Card>
      </div>
    );
  
}

export default App;
