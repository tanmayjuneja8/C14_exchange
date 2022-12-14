/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';

import { UserContext } from '../contexts/UserContext';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { user, setUser } = useContext(UserContext);
  const { handleSignUp } = useAuth();
  handleSignUp('guest');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/assets');
  }, [user]);

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
  return (
    <></>
    // <AuthLayout>
    //   <Text h1 color='white' size='xxl'>
    //     Sign up for C14 exchange
    //   </Text>
    //   <Button color='secondary' onClick={() => handleSignUp('guest')}>
    //     Continue as guest
    //   </Button>
    //   <Text color='white'>OR</Text>
    //   <SignUpForm />
    //   {authError && <AuthError />}
    // </AuthLayout>
  );
};

export default SignUp;
