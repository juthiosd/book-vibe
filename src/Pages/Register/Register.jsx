import React from 'react';
import { useAuth } from '../../Contacts/AuthContext';

const Register = () => {

    const{register} = useAuth();

    const handleSubmit = e => {
        e.preventDefault();

        console.log('from submited');

       // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        register(email,password);
       
    }

    return (
        <div className='flex justify-center my-5'>
           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <form onSubmit={handleSubmit}>
                 <legend className="fieldset-legend">Register</legend>

  <label className="label">Name</label>
  <input type="text" name='name' className="input" placeholder="Name" />


  <label className="label">Email</label>
  <input type="email" name='email' className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" name='password' className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4">Register</button>

  </form>
 
</fieldset>
        </div>
    );
};

export default Register;