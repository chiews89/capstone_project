import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { signUp } from "../../store/session";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    const data = await dispatch(
      signUp(username, email, password, repeatPassword)
    );
    if (data) {
      setErrors(data);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form className="sign-up-form-modal" onSubmit={onSignUp}>
      <div className="create-errors">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="sign-up-inputs-container">
        <div>
          <input
            className="sign-up-form-inputs"
            type="text"
            name="username"
            placeholder="Username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <input
            className="sign-up-form-inputs"
            type="text"
            name="email"
            placeholder="Email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <input
            className="sign-up-form-inputs"
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <input
            className="sign-up-form-inputs"
            type="password"
            name="repeat_password"
            placeholder="Confirm password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
          ></input>
        </div>
      </div>
      <button className="sign-up-button" type="submit">
        Sign Up
      </button>
      <div className="home-signup-from-login">
            <h3 className="no-account">
              Have an account?
            </h3>
            <NavLink to='/' exact={true} className='have-account-log-in'>
              Log in
            </NavLink>
          </div>
    </form>
  );
};

export default SignUpForm;
