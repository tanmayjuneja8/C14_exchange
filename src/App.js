import {
  Assets,
  Deposit,
  Pay,
  Rating,
  Partner,
  ProtectedPages,
  SignIn,
  SignUp,
  Trade,
  Feedback,
  LearnMore
} from './pages';
import { Navigate, Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Dashboard } from './components';
import { UserProvider } from './contexts/UserContext';
// import {useAuth} from './hooks/useAuth';

function App() {
    ReactGA.initialize('UA-249991444-1');
    ReactGA.pageview('Init page view');
    ReactGA.event({
  category: 'User',
  action: 'Joined the waitlist'
});
// const handleSignUp = useAuth();
// handleSignUp('guest');
  return (
    <div className='App'>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Navigate to='/assets' />} />
           <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route element={<ProtectedPages />}> 
            <Route path='/' element={<Dashboard />}>
              <Route path='assets' element={<Assets />} />
              <Route path='trade' element={<Trade />} />
              <Route path='pay' element={<Pay />} />
              <Route path='deposit' element={<Deposit />} />
              <Route path='rating' element={<Rating />} />
              <Route path='partners' element={<Partner />} />
              <Route path='feedback' element={<Feedback />} />
              <Route path='learn_more' element={<LearnMore />} />
              
              <Route path='*' element={<Assets />} />
            </Route>
           </Route> 
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
