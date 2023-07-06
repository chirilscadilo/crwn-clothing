import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

const SignIn = () => {
  //when we come back to our page after redirecting.
  //On mont this useEffect will run ONCE, and will get the responce for the redirect based on
  //auth is an authentication memory, that hold info regardless of redirection
  //this will get us the user
  // useEffect(async () => {
  //   const responce = await getRedirectResult(auth);
  //   if (responce) {
  //     const userDocRef = await createUserDocumentFromAuth(responce.user);
  //   }
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Log In</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
