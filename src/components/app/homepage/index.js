import React from "react";
import NavBar from './navbar/index';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const Homepage = () => {

  return (
    <div> 
      <NavBar/>
      <div class="container">
      <MDBContainer>
      <MDBRow>
        <MDBCol md="5">
          <form>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p className="h4 text-center mb-4">Search Your Book</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Book Title
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Author
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Address
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
          
            <div className="text-center mt-4">
              <MDBBtn color="success"  type="submit">
                Search
                
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </div>
  );
};

export default Homepage;