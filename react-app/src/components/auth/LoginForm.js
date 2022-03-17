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
      <form className="login-form" onSubmit={onLogin}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <h1 className="logo">InstaGame</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <button type="submit">Login</button>
        </div>
        <button type="button" className="demo-user-btn" onClick={demoUserLogin}>
          Try Demo
        </button>
        <div>
          <SignupFormModal />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
