import React from "react";
import { MDBCol, MDBContainer} from "mdbreact";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export default class SearchBar extends React.Component {

  logValue = value => {
    console.log(value);
  }

  render() {
  return (
   
    <MDBCol md="3">
        <MDBContainer>

        <input className="form-control form-control-sm ml-3 w-75" type="text"  placeholder="Search Category" aria-label="Search" />
    
       </MDBContainer>
       
       </MDBCol>

  );

 }
}
