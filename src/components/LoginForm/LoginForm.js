import React, {useState} from 'react';

export default function Login() {
    const [formState, setFormState] = useState();

    const handleChange = (e) => {
        const {email, password} = e.target;
        setFormState({...formState, email, password})
    }
return (
<div>
<form onSubmit={handleSubmit}>
    <label htmlFor='email'>Email</label>
    <input type='email' name='email' id='email' value={formState.email} onChange={handleChange}/>

    <label htmlFor='password'>Password</label>
    <input type='password' name='password' id='password' value={formState.password} onChange={handleChange}/>

    <button type='submit'>Log Me In</button>
</form>
</div>
)
}