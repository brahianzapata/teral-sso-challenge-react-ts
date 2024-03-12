
import { GetCurrentUserOutput, signOut } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import { getCurrentUser } from 'aws-amplify/auth';

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
        <h1 className="mb-5 text-primary">Bienvenido al Reto Técnico Front Teral</h1>
        <h4>Username: { user.username }</h4>
        <h4>UserId: { user?.userId }</h4>
        <h4>Email: { user?.signInDetails?.loginId }</h4>
        <button
            type="submit"
            className="mt-3 w-100 btn btn-outline-primary btn-block"
            onClick={ () => signOut() }
        >
            <span>Logout</span>
        </button>
      </div>
    </div>
  )
}
