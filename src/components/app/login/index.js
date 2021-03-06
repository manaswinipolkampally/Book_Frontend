import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";

const Login = () => {
  return (
    
    <div class="container">
    <MDBContainer>
        <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
               
      <MDBRow>
        <MDBCol md="7">
          <MDBCard>
          
            <MDBCardBody>
              
                <h3 className="my-3">
                   Login:
                </h3>
              
              <form>
                <div className="grey-text">
                  <MDBInput
                    
                    icon="envelope"
                    label="email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                  type="password"
                  label="password"
                    icon="lock"
                    group
                    validate
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="success"
                  className="mb-3"
                  type="submit"
                >
                  Login
                </MDBBtn>
              </div>
              </form>
        
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Not a member? <a href="register">Sign Up</a></p>
                  <p>Forgot Password?</p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
                  
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    
  );
};

export default Login;