

import React, { useState , useEffect} from "react";
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { loadGapiInsideDOM } from "gapi-script";
export default function App() {
    
    const handleSubmit = (username, password) => {
        console.log(username, password);
    };
   
    return (
        <div className="App">
            <EnableDisableButton onSubmit={handleSubmit} />
        </div>
    );
}

function EnableDisableButton({ onSubmit }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isEnable, setEnable] = useState(true);
    const [ShowLoginButton, setShowLoginButton] = useState(true)
    const [ShowLogoutButton, setShowLogoutButton] = useState(false)
    const handleKeyUp = () => {
        if (username.length > 0 && password.length > 0) setEnable(false);
        else setEnable(true);
    };
    const clientId = "70337116168-tqvgute4k5t4ieg61egdndraud548fna.apps.googleusercontent.com";

    const onLoginSuccess = (res) => {
        console.log("login successful", res.profileObj)
        setShowLoginButton(false)
        setShowLogoutButton(true)
    }
    const onLoginFailure = (res) => {
        console.log("login failed", res)
    }
    const signOutSuccess = (res) => {
        console.log("signout successfully", res)
        setShowLoginButton(true)
        setShowLogoutButton(false)
    }
    useEffect(() => {
        (async () => {
          await loadGapiInsideDOM();
        })();
      });
    
    return (
        <div>
            <label>User Name</label>
            <input
                type="text"
                id="username-input"
                placeholder="username"
                value={username}
                onKeyUp={handleKeyUp}
                onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <br />
            <label>Password</label>
            <input
                type="password"
                id="password-input"
                placeholder="Password"
                onKeyUp={handleKeyUp}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <br />
            <button
                type="submit"
                id="button-input"
                disabled={isEnable}
                onClick={() => onSubmit(username, password)}
            >
                Register
            </button>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={'single_host_origin'}
            />

            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={signOutSuccess}
            />
           
        </div>
    );
}
