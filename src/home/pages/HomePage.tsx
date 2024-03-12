
import { GetCurrentUserOutput, signOut } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import { getCurrentUser } from 'aws-amplify/auth';
import logo from '../../assets/teral_image.jpeg'

const initialState: GetCurrentUserOutput =  {
  signInDetails: {    
    authFlowType: undefined,
    loginId: ""
  },
  userId: "",
  username: ""
};

export const HomePage = () => {

  const [user, setUser] = useState<GetCurrentUserOutput>(initialState)

  useEffect(() => {
    initializeUser();
  }, []);
  
  const initializeUser = async() => {
    const currentUser = await getCurrentUser();
    setUser(currentUser);
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="w-75">
        <h1 className="mb-5 text-primary text-center">Bienvenido al Reto Técnico Front</h1>
        <div className="d-flex justify-content-center mb-5">
          <img src={logo}/>
        </div>
        <h4>Te has logeado con el siguiente email: <span className="text-primary">{ user?.signInDetails?.loginId }</span></h4>
        <button
            type="submit"
            className="mt-3 w-25 btn btn-outline-primary btn-block"
            onClick={ () => signOut() }
        >
            <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
