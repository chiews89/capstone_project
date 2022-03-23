import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import SignupFormModal from "./SignupModal";
import "./LoginForm.css";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const mainImage = [
    "https://thumbor.granitemedia.com/super-smash-bros-ultimate/CRG67jof3fQmviP-nPPv0ypeZds=/480x360/filters:format(webp):quality(80)/granite-web-prod/06/b7/06b7d8be299e4d7ab097d20dd898763e.jpeg",
  ];
  const images = [
    "https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_3.0,f_auto,q_auto,w_500/b_rgb:ffffff/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero",
    "https://m.media-amazon.com/images/M/MV5BZjc3MmMzNGItYmEzYy00MWFhLWI0NDQtMWE3Y2Q1NjE1OWRlXkEyXkFqcGdeQXVyNzcyMjAwNTE@._V1_.jpg",
    "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png",
    "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f",
  ];

  const [count, setCount] = useState(0);
  const imageDisplay = images[count];

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 3) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const demoUserLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login("demo@aa.io", "password"));

    if (data) {
      setErrors(data);
    }
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="splash-page">
      <div className="image-container">
        <img className="main-pic" alt={mainImage} src={mainImage} />
        <img className="rotating-pic" alt={imageDisplay} src={imageDisplay} />
      </div>
      <div className="login-container">
        <div className="login-form-logo"><img className ='login-site-logo' src="/static/Instagame-Logo.png" alt="/static/Instagame-Logo.png" /></div>
        <form className="login-form" onSubmit={onLogin}>
          <div className="login-form-errors">
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className="login-email-password">
            <label className="login-form-label" htmlFor="email">
            </label>
            <input
              className="login-form-input"
              name="email"
              type="text"
              placeholder="Your email here..."
              value={email}
              onChange={updateEmail}
            />
            <label className="login-form-label" htmlFor="password">
            </label>
            <input
              className="login-form-input"
              name="password"
              type="password"
              placeholder="Your password here..."
              value={password}
              onChange={updatePassword}
            />
            <div className="login-btn-container">
              <button className="login-btn" type="submit">
                Log In
              </button>
            </div>
            <div className="demo-user-btn-container">
              <button
                type="button"
                className="demo-user-btn"
                onClick={demoUserLogin}
              >
                Demo
              </button>
            </div>
          </div>
        </form>
        <div className="signup-form-container">
          <div className="home-signup-from-login">
            <h3 className="no-account">
              Don't have an account?
          <div>
            <SignupFormModal />
          </div>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
