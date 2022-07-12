
import {useState} from 'react';
import './Login.css'
import axios from 'axios';



const Login = () => {   
    const [users, setUsers] = useState('')
    const urlUser = 'https://jsonplaceholder.typicode.com/users';
    const checkUser =()=>{
        axios.get(urlUser)
        .then(response=> {setUsers(response.data)});
        console.log(users);

    }
    

    return (

            <div className='Login'>
                <h2>Login</h2>
                <input type="text" placeholder='Name or Email'/>
                <input type="password" placeholder='Password'/>
                <br />
                <input type="button" value={'Accept'} onClick={()=>{checkUser()}}/>
            </div>

    )
}

export default Login