import React from 'react';
import { useAuth } from '../../Contacts/AuthContext';

const Login = () => {

    const {login} = useAuth();

    const handleSubmit = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,password);
        login(email, password)
    }

    return (
        <div className='flex justify-center my-5'> 
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <from onSubmit={handleSubmit}>
    <legend className="fieldset-legend">Login</legend>

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4">Login</button>
  </from>
</fieldset>
        </div>
    );
};

export default Login;