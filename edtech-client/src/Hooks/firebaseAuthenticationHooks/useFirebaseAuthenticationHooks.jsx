import toast from "react-hot-toast";
import { postStudent } from "../../RTK/Features/UsersSlice/StudentsSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSignOut,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export default function useFirebaseAuthenticationHooks() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const { reset } = useForm();
  const navigate = useNavigate();
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);
  const dispatch = useDispatch();
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleGoogleSignin = async () => {
    try {
      const result = await signInWithGoogle();
      if (result.user) {
        navigate("/");
        toast.success("Google sign in success!");

        const { displayName, email, photoURL } = result.user;
        const studentId = Math.random().toString(36).substring(2, 11);
        const userInfo = {
          studentId: "ET_" + studentId,
          name: displayName,
          email: email,
          photo: photoURL,
          role: "student",
        };
        const response = await dispatch(postStudent(userInfo)).unwrap();
        console.log("User data successfully posted to DB:", response);
      } else if (error) {
        console.error("Firebase Google Sign-In Error:", error.message);
      }
    } catch (reduxError) {
      console.error("Error posting user data to Redux store:", reduxError);
    }
  };

  // Email Login
  const handleEmailLogin = async (data) => {
    const { email, password } = data;
    const result = await signInWithEmailAndPassword(email, password);
    if (result && result.user) {
      navigate("/");
      toast.success("Logged in successful!");
    }
  };

  // Signup
  const handleSignInEmailPassword = async (data) => {
    const { email, password } = data;
    const result = await createUserWithEmailAndPassword(email, password);

    try {
      if (result && result.user) {
        const { email, photoURL } = result.user;
        console.log(result.user);
        const studentId = Math.random().toString(36).substring(2, 11);
        const userInfo = {
          studentId: "ET_" + studentId,
          name: data.name,
          email: email,
          photo: photoURL,
          role: "student",
        };

        const response = await dispatch(postStudent(userInfo)).unwrap();
        console.log("User data successfully posted to DB:", response);
        reset();
        navigate("/");
        toast.success("Sign up success!");
      } else {
        console.error("User creation by email and pass Error:", error);
      }
    } catch (reduxError) {
      console.error("Error posting user data to Redux store:", reduxError);
    }
  };

  const handleSignOut = async () => {
    const signout = await signOut();
    if (signout) {
      toast.success("You're signed out!");
    }
  };

  if (user) {
    const userInfo = user.email;
    axios
      .post("http://localhost:4000/api/authorization/jwt", userInfo)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("access-token-secret", res.data.token);
        }
      });
  } else if (user === null) {
    console.log(user);
    localStorage.removeItem("access-token-secret");
  }

  return {
    handleGoogleSignin,
    handleEmailLogin,
    handleSignInEmailPassword,
    handleSignOut,
    user,
  };
}
