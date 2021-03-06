import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext.utils";

export default function Signup() {
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
    await auth.handleSignup(formState);
  };
  return (
    <div className="field">
      <form onSubmit={handleSubmit}>
        <div className="box mr-6 ml-6">
          <div className="control">
            <label htmlFor="email">Email</label>
            <div className="control">
              <p className="control has-icons-left">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="input"
                  placeholder="jack@gmail.com"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
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
                className="input"
                placeholder="********"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <div className="control">
              <label htmlFor="checkbox" className="checkbox">
                <input type="checkbox" className="checkbox mx-1" />I agree to
                the <a href="#">terms & conditions</a>
              </label>
            </div>
          </div>
          <div className="field">
            <p className="control">
              <button type="submit" class="button is-success">
                Sign Me Up
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
