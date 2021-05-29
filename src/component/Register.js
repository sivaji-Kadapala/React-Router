import React from 'react';
import "./Register.css"
function Register (){
    
return <>
        <div className="container">
        <div className="row">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><i className="fa fa-times" /></button>
              <h4 className="modal-title">Ready to Join? Create a New Account</h4>
            </div>
            <form action method="post">
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="userEmail">Email Address</label>
                  <input type="text" className="form-control" required name="userEmail" defaultValue />
                  <span className="help-block">Your email address is also used to log in.</span>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" required name="password" defaultValue />
                      <span className="help-block">Choose a password for your new account.</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="passwordr">Repeat Password</label>
                      <input type="password" className="form-control" required name="passwordr" defaultValue />
                      <span className="help-block">Type the password again. Passwords must match.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <input type="hidden" name="isEmpty" defaultValue />
                <button type="input" name="submit" value="newAccount" className="btn btn-success btn-icon"><i className="fa fa-check" /> Create My Account</button>
                <button type="button" className="btn btn-default btn-icon" data-dismiss="modal"><i className="fa fa-times-circle" /> Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>

</>

}

export default Register;
