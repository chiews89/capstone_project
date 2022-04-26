import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { UserProfile } from "./components/User/User";
import { authenticate } from "./store/session";
import { AllPosts } from "./components/Post/HomePage/HomePage";
import { getAllComments } from "./store/comments";
import { getAllPosts } from "./store/posts";
import { ErrorPage } from "./components/404Page/404Page";
import { getAllUsers } from "./store/users";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(getAllComments());
      await dispatch(getAllPosts());
      await dispatch(getAllUsers())

      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <UserProfile />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}>
          <AllPosts />
        </ProtectedRoute>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
