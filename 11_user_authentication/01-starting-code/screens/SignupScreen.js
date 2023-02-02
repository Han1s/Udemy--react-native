import AuthContent from '../components/Auth/AuthContent';
import {createUser} from "../util/auth";
import {useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";
import authContext from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signupHandler = async ({email, password}) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authContext.authenticate(token);
    } catch (e) {
      Alert.alert('Authentication failed', 'Could not create user.');
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />
  } else {
    return <AuthContent onAuthenticate={signupHandler} />;
  }
}

export default SignupScreen;
