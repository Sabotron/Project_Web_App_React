import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import '../css/Login.css'

const Login = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState('');
    const [username, setUsername] = useState('');
    const [zipcode, setZipcode] = useState('');
    const cookies = new Cookies();

    const BaseUrl = 'https://jsonplaceholder.typicode.com/users';

    function getUsername(e) { // obtiene el valor del texfield nombre o email
        setUsername(e.target.value);
    }

    function getZipcode(e) { // obtiene el valor del texfield password
        setZipcode(e.target.value);
    }

    const checkUser = async () => { // trae todos los usuarios y filtra el requerido si existiera.
        await axios.get(BaseUrl)
            .then(response => {
                setUsers(response.data);
                for (let i = 0; i < users.length; i++) {
                    if (users[i].username === username || users[i].email === username) {
                        if (users[i].address.zipcode === zipcode) {
                            let user = users[i];
                            cookies.set('id', user.id, {path: "/"});
                            cookies.set('username', user.username, {path: "/"});
                            navigate('/home');
                            break;
                        } 
                    }
                }
            })
            .catch(error=>{
                console.log(error);
            })
    }

    return (

        <div className='Login'>
            <h2>Login</h2>
            <input type="text" className='texfield' placeholder='Name or Email' onChange={getUsername} />
     
            <input type="text" className='texfield'  placeholder='Password' onChange={getZipcode} />
      
            <input type="button" className='btn' value={'Ingresar'} onClick={() => { checkUser() }} />
        </div>

    )
}

export default Login