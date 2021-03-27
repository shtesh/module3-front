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
    <div className="control">
      <form onSubmit={handleSubmit}>
        <div className="box mr-6 ml-6">
          <div className="field">
            <label htmlFor="email">Email</label>
            <p className="control has-icons-left has-icons-right">
              <input
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="jack@gmail.com"
                className="input"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <p className="control has-icons-left">
              <input
                type="password"
                name="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
                placeholder="********"
                className="input"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button type="submit" className="button is-info">
                Log Me In
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
