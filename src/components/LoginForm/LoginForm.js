import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext.utils";

export default function Login() {
  const initialState = {
    email: "",
    password: "",
  };
  const [formState, setFormState] = useState(initialState);
  const auth = useAuth();
  const handleChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await auth.handleLogin(formState);
  };
  console.log("inside");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
        />

        <button type="submit">Log Me In</button>
      </form>
    </div>
  );
}
