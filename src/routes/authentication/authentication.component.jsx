// import { useEffect } from "react";
// import { getRedirectResult } from 'firebase/auth'
// import { auth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up.component";
import SignInForm from "../../components/sign-in-form/sign-in.component";
import './authentication.styles.scss'

const Authentication = () => {
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


    return (
        <div className="authentication-container">
            <SignInForm/>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
        </div>
    );
};

export default Authentication;