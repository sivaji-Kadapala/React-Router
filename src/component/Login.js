import React from 'react';
import "./Login.css";
function Login (){
return  <>
 <div className="container">
        <div className="row">
          <div className="col-md-offset-5 col-md-4 text-center">
            <h1 className="text-white">Unique Login Form</h1>
            <div className="form-login"><br />
              <h4>Secure Login</h4>
              <br />
              <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="username" />
              <br /><br />
              <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="password" />
              <br /><br />
              <div className="wrapper">
                <span className="group-btn">
                  <a href="#" className="btn btn-danger btn-md">login <i className="fa fa-sign-in" /></a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br />
        {/*footer*/}
        <div className="footer text-white text-center">
          <p>© 2020 Unique Login Form. All rights reserved | Design by <a href="https://freecss.tech">Sivaji Kadapala</a></p>
        </div>
        {/*//footer*/}
      </div>
</>
}

export default Login;
