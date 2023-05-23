import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.utils"


const SignIn = () => {
  const logGooleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocref = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={logGooleUser}>
        Sign in with Google
      </button>
    </div>

  )
}

export default SignIn 