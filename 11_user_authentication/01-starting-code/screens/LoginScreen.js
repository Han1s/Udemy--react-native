import AuthContent from '../components/Auth/AuthContent';
import {useContext, useState} from "react";
import {createUser, login} from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";
import authContext, {AuthContext} from "../store/auth-context";

function LoginScreen() {
const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authContext = useContext(AuthContext);

  const loginHandler = async ({email, password}) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authContext.authenticate(token);
    } catch (e) {
      Alert.alert('Authentication failed!', 'Could not log you in. Try again later.');
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Authenticating..." />
  } else {
    return <AuthContent isLogin onAuthenticate={loginHandler} />;
  }
}

export default LoginScreen;
