// import { useEffect } from "react";
// import { getRedirectResult } from 'firebase/auth'
// import { auth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up.component";

const SignIn = () => {
    //********ALL COMMENTED CODE IS FOR SIGN IN WITH GOOGLE REDIRECT METHOD ********/
    // useEffect(() => {
    //     async function check() {
    //         const response = await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     check()
    // }, [])


    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };


    return (
        <div>
            <h1>Sign In to work with us</h1>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
        </div>
    );
};

export default SignIn;