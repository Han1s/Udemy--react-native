import AuthContent from '../components/Auth/AuthContent';
import {createUser} from "../util/auth";
import {useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signupHandler = async ({email, password}) => {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />
  } else {
    return <AuthContent onAuthenticate={signupHandler} />;
  }
}

export default SignupScreen;
