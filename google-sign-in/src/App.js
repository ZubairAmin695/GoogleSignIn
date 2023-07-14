import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import "../src/App.css"

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="form-container">
          <h3>Login with Google</h3>

          <LoginSocialGoogle
            client_id={
              "229706282150-kojptopuvuaks884ukvgbfkefsnjr7i4.apps.googleusercontent.com"
            }
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={({ provider, data }) => {
              console.log(provider, data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>
           
        </div>
      </div>
    </div>
  );
}

export default App;
