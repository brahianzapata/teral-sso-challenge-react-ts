import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router';

import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';


const App: React.FC = () => {
  
  return (
    <Authenticator>
      {() => (
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      )}
    </Authenticator>
  );
};

export default withAuthenticator(App);

